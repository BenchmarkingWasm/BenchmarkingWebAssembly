/*
+--------------------------------------------------------------------------+
| CHStone : a suite of benchmark programs for C-based High-Level Synthesis |
| ======================================================================== |
|                                                                          |
| * Collected and Modified : Y. Hara, H. Tomiyama, S. Honda,               |
|                            H. Takada and K. Ishii                        |
|                            Nagoya University, Japan                      |
|                                                                          |
| * Remark :                                                               |
|    1. This source code is modified to unify the formats of the benchmark |
|       programs in CHStone.                                               |
|    2. Test vectors are added for CHStone.                                |
|    3. If "main_result" is 0 at the end of the program, the program is    |
|       correctly executed.                                                |
|    4. Please follow the copyright of each benchmark program.             |
+--------------------------------------------------------------------------+
*/
/*************************************************************************/
/*                                                                       */
/*   SNU-RT Benchmark Suite for Worst Case Timing Analysis               */
/*   =====================================================               */
/*                              Collected and Modified by S.-S. Lim      */
/*                                           sslim@archi.snu.ac.kr       */
/*                                         Real-Time Research Group      */
/*                                        Seoul National University      */
/*                                                                       */
/*                                                                       */
/*        < Features > - restrictions for our experimental environment   */
/*                                                                       */
/*          1. Completely structured.                                    */
/*               - There are no unconditional jumps.                     */
/*               - There are no exit from loop bodies.                   */
/*                 (There are no 'break' or 'return' in loop bodies)     */
/*          2. No 'switch' statements.                                   */
/*          3. No 'do..while' statements.                                */
/*          4. Expressions are restricted.                               */
/*               - There are no multiple expressions joined by 'or',     */
/*                'and' operations.                                      */
/*          5. No library calls.                                         */
/*               - All the functions needed are implemented in the       */
/*                 source file.                                          */
/*                                                                       */
/*                                                                       */
/*************************************************************************/
/*                                                                       */
/*  FILE: adpcm.c                                                        */
/*  SOURCE : C Algorithms for Real-Time DSP by P. M. Embree              */
/*                                                                       */
/*  DESCRIPTION :                                                        */
/*                                                                       */
/*     CCITT G.722 ADPCM (Adaptive Differential Pulse Code Modulation)   */
/*     algorithm.                                                        */
/*     16khz sample rate data is stored in the array test_data[SIZE].    */
/*     Results are stored in the array compressed[SIZE] and result[SIZE].*/
/*     Execution time is determined by the constant SIZE (default value  */
/*     is 2000).                                                         */
/*                                                                       */
/*  REMARK :                                                             */
/*                                                                       */
/*  EXECUTION TIME :                                                     */
/*                                                                       */
/*                                                                       */
/*************************************************************************/
#include <stdio.h>

int encode (int, int);
void decode (int);
int filtez (int *bpl, int *dlt);
void upzero (int dlt, int *dlti, int *bli);
int filtep (int rlt1, int al1, int rlt2, int al2);
int quantl (int el, int detl);
int logscl (int il, int nbl);
int scalel (int nbl, int shift_constant);
int uppol2 (int al1, int al2, int plt, int plt1, int plt2);
int uppol1 (int al1, int apl2, int plt, int plt1);
int logsch (int ih, int nbh);
void reset ();

/* G722 C code */

/* variables for transimit quadrature mirror filter here */
int tqmf[24];

/* QMF filter coefficients:
scaled by a factor of 4 compared to G722 CCITT recomendation */
const int h[24] = {
  12, -44, -44, 212, 48, -624, 128, 1448,
  -840, -3220, 3804, 15504, 15504, 3804, -3220, -840,
  1448, 128, -624, 48, 212, -44, -44, 12
};

int xl, xh;

/* variables for receive quadrature mirror filter here */
int accumc[11], accumd[11];

/* outputs of decode() */
int xout1, xout2;

int xs, xd;

/* variables for encoder (hi and lo) here */

int il, szl, spl, sl, el;

const int qq4_code4_table[16] = {
  0, -20456, -12896, -8968, -6288, -4240, -2584, -1200,
  20456, 12896, 8968, 6288, 4240, 2584, 1200, 0
};


const int qq6_code6_table[64] = {
  -136, -136, -136, -136, -24808, -21904, -19008, -16704,
  -14984, -13512, -12280, -11192, -10232, -9360, -8576, -7856,
  -7192, -6576, -6000, -5456, -4944, -4464, -4008, -3576,
  -3168, -2776, -2400, -2032, -1688, -1360, -1040, -728,
  24808, 21904, 19008, 16704, 14984, 13512, 12280, 11192,
  10232, 9360, 8576, 7856, 7192, 6576, 6000, 5456,
  4944, 4464, 4008, 3576, 3168, 2776, 2400, 2032,
  1688, 1360, 1040, 728, 432, 136, -432, -136
};

int delay_bpl[6];

int delay_dltx[6];

const int wl_code_table[16] = {
  -60, 3042, 1198, 538, 334, 172, 58, -30,
  3042, 1198, 538, 334, 172, 58, -30, -60
};

const int ilb_table[32] = {
  2048, 2093, 2139, 2186, 2233, 2282, 2332, 2383,
  2435, 2489, 2543, 2599, 2656, 2714, 2774, 2834,
  2896, 2960, 3025, 3091, 3158, 3228, 3298, 3371,
  3444, 3520, 3597, 3676, 3756, 3838, 3922, 4008
};

int nbl;			/* delay line */
int al1, al2;
int plt, plt1, plt2;
int dlt;
int rlt, rlt1, rlt2;

/* decision levels - pre-multiplied by 8, 0 to indicate end */
const int decis_levl[30] = {
  280, 576, 880, 1200, 1520, 1864, 2208, 2584,
  2960, 3376, 3784, 4240, 4696, 5200, 5712, 6288,
  6864, 7520, 8184, 8968, 9752, 10712, 11664, 12896,
  14120, 15840, 17560, 20456, 23352, 32767
};

int detl;

/* quantization table 31 long to make quantl look-up easier,
last entry is for mil=30 case when wd is max */
const int quant26bt_pos[31] = {
  61, 60, 59, 58, 57, 56, 55, 54,
  53, 52, 51, 50, 49, 48, 47, 46,
  45, 44, 43, 42, 41, 40, 39, 38,
  37, 36, 35, 34, 33, 32, 32
};

/* quantization table 31 long to make quantl look-up easier,
last entry is for mil=30 case when wd is max */
const int quant26bt_neg[31] = {
  63, 62, 31, 30, 29, 28, 27, 26,
  25, 24, 23, 22, 21, 20, 19, 18,
  17, 16, 15, 14, 13, 12, 11, 10,
  9, 8, 7, 6, 5, 4, 4
};


int deth;
int sh;				/* this comes from adaptive predictor */
int eh;

const int qq2_code2_table[4] = {
  -7408, -1616, 7408, 1616
};

const int wh_code_table[4] = {
  798, -214, 798, -214
};


int dh, ih;
int nbh, szh;
int sph, ph, yh, rh;

int delay_dhx[6];

int delay_bph[6];

int ah1, ah2;
int ph1, ph2;
int rh1, rh2;

/* variables for decoder here */
int ilr, rl;
int dec_deth, dec_detl, dec_dlt;

int dec_del_bpl[6];

int dec_del_dltx[6];

int dec_plt, dec_plt1, dec_plt2;
int dec_szl, dec_spl, dec_sl;
int dec_rlt1, dec_rlt2, dec_rlt;
int dec_al1, dec_al2;
int dl;
int dec_nbl, dec_dh, dec_nbh;

/* variables used in filtez */
int dec_del_bph[6];

int dec_del_dhx[6];

int dec_szh;
/* variables used in filtep */
int dec_rh1, dec_rh2;
int dec_ah1, dec_ah2;
int dec_ph, dec_sph;

int dec_sh;

int dec_ph1, dec_ph2;

/* G722 encode function two ints in, one 8 bit output */

/* put input samples in xin1 = first value, xin2 = second value */
/* returns il and ih stored together */

int
abs (int n)
{
  int m;

  if (n >= 0)
    m = n;
  else
    m = -n;
  return m;
}

int
encode (int xin1, int xin2)
{
  int i;
  const int *h_ptr;
  int *tqmf_ptr, *tqmf_ptr1;
  long int xa, xb;
  int decis;

/* transmit quadrature mirror filters implemented here */
  h_ptr = h;
  tqmf_ptr = tqmf;
  xa = (long) (*tqmf_ptr++) * (*h_ptr++);
  xb = (long) (*tqmf_ptr++) * (*h_ptr++);
/* main multiply accumulate loop for samples and coefficients */
  for (i = 0; i < 10; i++)
    {
      xa += (long) (*tqmf_ptr++) * (*h_ptr++);
      xb += (long) (*tqmf_ptr++) * (*h_ptr++);
    }
/* final mult/accumulate */
  xa += (long) (*tqmf_ptr++) * (*h_ptr++);
  xb += (long) (*tqmf_ptr) * (*h_ptr++);

/* update delay line tqmf */
  tqmf_ptr1 = tqmf_ptr - 2;
  for (i = 0; i < 22; i++)
    *tqmf_ptr-- = *tqmf_ptr1--;
  *tqmf_ptr-- = xin1;
  *tqmf_ptr = xin2;

/* scale outputs */
  xl = (xa + xb) >> 15;
  xh = (xa - xb) >> 15;

/* end of quadrature mirror filter code */

/* starting with lower sub band encoder */

/* filtez - compute predictor output section - zero section */
  szl = filtez (delay_bpl, delay_dltx);

/* filtep - compute predictor output signal (pole section) */
  spl = filtep (rlt1, al1, rlt2, al2);

/* compute the predictor output value in the lower sub_band encoder */
  sl = szl + spl;
  el = xl - sl;

/* quantl: quantize the difference signal */
  il = quantl (el, detl);

/* computes quantized difference signal */
/* for invqbl, truncate by 2 lsbs, so mode = 3 */
  dlt = ((long) detl * qq4_code4_table[il >> 2]) >> 15;

/* logscl: updates logarithmic quant. scale factor in low sub band */
  nbl = logscl (il, nbl);

/* scalel: compute the quantizer scale factor in the lower sub band */
/* calling parameters nbl and 8 (constant such that scalel can be scaleh) */
  detl = scalel (nbl, 8);

/* parrec - simple addition to compute recontructed signal for adaptive pred */
  plt = dlt + szl;

/* upzero: update zero section predictor coefficients (sixth order)*/
/* calling parameters: dlt, dlt1, dlt2, ..., dlt6 from dlt */
/*  bpli (linear_buffer in which all six values are delayed */
/* return params:      updated bpli, delayed dltx */
  upzero (dlt, delay_dltx, delay_bpl);

/* uppol2- update second predictor coefficient apl2 and delay it as al2 */
/* calling parameters: al1, al2, plt, plt1, plt2 */
  al2 = uppol2 (al1, al2, plt, plt1, plt2);

/* uppol1 :update first predictor coefficient apl1 and delay it as al1 */
/* calling parameters: al1, apl2, plt, plt1 */
  al1 = uppol1 (al1, al2, plt, plt1);

/* recons : compute recontructed signal for adaptive predictor */
  rlt = sl + dlt;

/* done with lower sub_band encoder; now implement delays for next time*/
  rlt2 = rlt1;
  rlt1 = rlt;
  plt2 = plt1;
  plt1 = plt;

/* high band encode */

  szh = filtez (delay_bph, delay_dhx);

  sph = filtep (rh1, ah1, rh2, ah2);

/* predic: sh = sph + szh */
  sh = sph + szh;
/* subtra: eh = xh - sh */
  eh = xh - sh;

/* quanth - quantization of difference signal for higher sub-band */
/* quanth: in-place for speed params: eh, deth (has init. value) */
  if (eh >= 0)
    {
      ih = 3;			/* 2,3 are pos codes */
    }
  else
    {
      ih = 1;			/* 0,1 are neg codes */
    }
  decis = (564L * (long) deth) >> 12L;
  if (abs (eh) > decis)
    ih--;			/* mih = 2 case */

/* compute the quantized difference signal, higher sub-band*/
  dh = ((long) deth * qq2_code2_table[ih]) >> 15L;

/* logsch: update logarithmic quantizer scale factor in hi sub-band*/
  nbh = logsch (ih, nbh);

/* note : scalel and scaleh use same code, different parameters */
  deth = scalel (nbh, 10);

/* parrec - add pole predictor output to quantized diff. signal */
  ph = dh + szh;

/* upzero: update zero section predictor coefficients (sixth order) */
/* calling parameters: dh, dhi, bphi */
/* return params: updated bphi, delayed dhx */
  upzero (dh, delay_dhx, delay_bph);

/* uppol2: update second predictor coef aph2 and delay as ah2 */
/* calling params: ah1, ah2, ph, ph1, ph2 */
  ah2 = uppol2 (ah1, ah2, ph, ph1, ph2);

/* uppol1:  update first predictor coef. aph2 and delay it as ah1 */
  ah1 = uppol1 (ah1, ah2, ph, ph1);

/* recons for higher sub-band */
  yh = sh + dh;

/* done with higher sub-band encoder, now Delay for next time */
  rh2 = rh1;
  rh1 = yh;
  ph2 = ph1;
  ph1 = ph;

/* multiplex ih and il to get signals together */
  return (il | (ih << 6));
}

/* decode function, result in xout1 and xout2 */

void
decode (int input)
{
  int i;
  long int xa1, xa2;		/* qmf accumulators */
  const int *h_ptr;
  int *ac_ptr, *ac_ptr1, *ad_ptr, *ad_ptr1;

/* split transmitted word from input into ilr and ih */
  ilr = input & 0x3f;
  ih = input >> 6;

/* LOWER SUB_BAND DECODER */

/* filtez: compute predictor output for zero section */
  dec_szl = filtez (dec_del_bpl, dec_del_dltx);

/* filtep: compute predictor output signal for pole section */
  dec_spl = filtep (dec_rlt1, dec_al1, dec_rlt2, dec_al2);

  dec_sl = dec_spl + dec_szl;

/* compute quantized difference signal for adaptive predic */
  dec_dlt = ((long) dec_detl * qq4_code4_table[ilr >> 2]) >> 15;

/* compute quantized difference signal for decoder output */
  dl = ((long) dec_detl * qq6_code6_table[il]) >> 15;

  rl = dl + dec_sl;

/* logscl: quantizer scale factor adaptation in the lower sub-band */
  dec_nbl = logscl (ilr, dec_nbl);

/* scalel: computes quantizer scale factor in the lower sub band */
  dec_detl = scalel (dec_nbl, 8);

/* parrec - add pole predictor output to quantized diff. signal */
/* for partially reconstructed signal */
  dec_plt = dec_dlt + dec_szl;

/* upzero: update zero section predictor coefficients */
  upzero (dec_dlt, dec_del_dltx, dec_del_bpl);

/* uppol2: update second predictor coefficient apl2 and delay it as al2 */
  dec_al2 = uppol2 (dec_al1, dec_al2, dec_plt, dec_plt1, dec_plt2);

/* uppol1: update first predictor coef. (pole setion) */
  dec_al1 = uppol1 (dec_al1, dec_al2, dec_plt, dec_plt1);

/* recons : compute recontructed signal for adaptive predictor */
  dec_rlt = dec_sl + dec_dlt;

/* done with lower sub band decoder, implement delays for next time */
  dec_rlt2 = dec_rlt1;
  dec_rlt1 = dec_rlt;
  dec_plt2 = dec_plt1;
  dec_plt1 = dec_plt;

/* HIGH SUB-BAND DECODER */

/* filtez: compute predictor output for zero section */
  dec_szh = filtez (dec_del_bph, dec_del_dhx);

/* filtep: compute predictor output signal for pole section */
  dec_sph = filtep (dec_rh1, dec_ah1, dec_rh2, dec_ah2);

/* predic:compute the predictor output value in the higher sub_band decoder */
  dec_sh = dec_sph + dec_szh;

/* in-place compute the quantized difference signal */
  dec_dh = ((long) dec_deth * qq2_code2_table[ih]) >> 15L;

/* logsch: update logarithmic quantizer scale factor in hi sub band */
  dec_nbh = logsch (ih, dec_nbh);

/* scalel: compute the quantizer scale factor in the higher sub band */
  dec_deth = scalel (dec_nbh, 10);

/* parrec: compute partially recontructed signal */
  dec_ph = dec_dh + dec_szh;

/* upzero: update zero section predictor coefficients */
  upzero (dec_dh, dec_del_dhx, dec_del_bph);

/* uppol2: update second predictor coefficient aph2 and delay it as ah2 */
  dec_ah2 = uppol2 (dec_ah1, dec_ah2, dec_ph, dec_ph1, dec_ph2);

/* uppol1: update first predictor coef. (pole setion) */
  dec_ah1 = uppol1 (dec_ah1, dec_ah2, dec_ph, dec_ph1);

/* recons : compute recontructed signal for adaptive predictor */
  rh = dec_sh + dec_dh;

/* done with high band decode, implementing delays for next time here */
  dec_rh2 = dec_rh1;
  dec_rh1 = rh;
  dec_ph2 = dec_ph1;
  dec_ph1 = dec_ph;

/* end of higher sub_band decoder */

/* end with receive quadrature mirror filters */
  xd = rl - rh;
  xs = rl + rh;

/* receive quadrature mirror filters implemented here */
  h_ptr = h;
  ac_ptr = accumc;
  ad_ptr = accumd;
  xa1 = (long) xd *(*h_ptr++);
  xa2 = (long) xs *(*h_ptr++);
/* main multiply accumulate loop for samples and coefficients */
  for (i = 0; i < 10; i++)
    {
      xa1 += (long) (*ac_ptr++) * (*h_ptr++);
      xa2 += (long) (*ad_ptr++) * (*h_ptr++);
    }
/* final mult/accumulate */
  xa1 += (long) (*ac_ptr) * (*h_ptr++);
  xa2 += (long) (*ad_ptr) * (*h_ptr++);

/* scale by 2^14 */
  xout1 = xa1 >> 14;
  xout2 = xa2 >> 14;

/* update delay lines */
  ac_ptr1 = ac_ptr - 1;
  ad_ptr1 = ad_ptr - 1;
  for (i = 0; i < 10; i++)
    {
      *ac_ptr-- = *ac_ptr1--;
      *ad_ptr-- = *ad_ptr1--;
    }
  *ac_ptr = xd;
  *ad_ptr = xs;
}

/* clear all storage locations */

void
reset ()
{
  int i;

  detl = dec_detl = 32;		/* reset to min scale factor */
  deth = dec_deth = 8;
  nbl = al1 = al2 = plt1 = plt2 = rlt1 = rlt2 = 0;
  nbh = ah1 = ah2 = ph1 = ph2 = rh1 = rh2 = 0;
  dec_nbl = dec_al1 = dec_al2 = dec_plt1 = dec_plt2 = dec_rlt1 = dec_rlt2 = 0;
  dec_nbh = dec_ah1 = dec_ah2 = dec_ph1 = dec_ph2 = dec_rh1 = dec_rh2 = 0;

  for (i = 0; i < 6; i++)
    {
      delay_dltx[i] = 0;
      delay_dhx[i] = 0;
      dec_del_dltx[i] = 0;
      dec_del_dhx[i] = 0;
    }

  for (i = 0; i < 6; i++)
    {
      delay_bpl[i] = 0;
      delay_bph[i] = 0;
      dec_del_bpl[i] = 0;
      dec_del_bph[i] = 0;
    }

  for (i = 0; i < 24; i++)
    tqmf[i] = 0;		// i<23

  for (i = 0; i < 11; i++)
    {
      accumc[i] = 0;
      accumd[i] = 0;
    }
}

/* filtez - compute predictor output signal (zero section) */
/* input: bpl1-6 and dlt1-6, output: szl */

int
filtez (int *bpl, int *dlt)
{
  int i;
  long int zl;
  zl = (long) (*bpl++) * (*dlt++);
  for (i = 1; i < 6; i++)
    zl += (long) (*bpl++) * (*dlt++);

  return ((int) (zl >> 14));	/* x2 here */
}

/* filtep - compute predictor output signal (pole section) */
/* input rlt1-2 and al1-2, output spl */

int
filtep (int rlt1, int al1, int rlt2, int al2)
{
  long int pl, pl2;
  pl = 2 * rlt1;
  pl = (long) al1 *pl;
  pl2 = 2 * rlt2;
  pl += (long) al2 *pl2;
  return ((int) (pl >> 15));
}

/* quantl - quantize the difference signal in the lower sub-band */
int
quantl (int el, int detl)
{
  int ril, mil;
  long int wd, decis;

/* abs of difference signal */
  wd = abs (el);
/* determine mil based on decision levels and detl gain */
  for (mil = 0; mil < 30; mil++)
    {
      decis = (decis_levl[mil] * (long) detl) >> 15L;
      if (wd <= decis)
	break;
    }
/* if mil=30 then wd is less than all decision levels */
  if (el >= 0)
    ril = quant26bt_pos[mil];
  else
    ril = quant26bt_neg[mil];
  return (ril);
}

/* logscl - update log quantizer scale factor in lower sub-band */
/* note that nbl is passed and returned */

int
logscl (int il, int nbl)
{
  long int wd;
  wd = ((long) nbl * 127L) >> 7L;	/* leak factor 127/128 */
  nbl = (int) wd + wl_code_table[il >> 2];
  if (nbl < 0)
    nbl = 0;
  if (nbl > 18432)
    nbl = 18432;
  return (nbl);
}

/* scalel: compute quantizer scale factor in lower or upper sub-band*/

int
scalel (int nbl, int shift_constant)
{
  int wd1, wd2, wd3;
  wd1 = (nbl >> 6) & 31;
  wd2 = nbl >> 11;
  wd3 = ilb_table[wd1] >> (shift_constant + 1 - wd2);
  return (wd3 << 3);
}

/* upzero - inputs: dlt, dlti[0-5], bli[0-5], outputs: updated bli[0-5] */
/* also implements delay of bli and update of dlti from dlt */

void
upzero (int dlt, int *dlti, int *bli)
{
  int i, wd2, wd3;
/*if dlt is zero, then no sum into bli */
  if (dlt == 0)
    {
      for (i = 0; i < 6; i++)
	{
	  bli[i] = (int) ((255L * bli[i]) >> 8L);	/* leak factor of 255/256 */
	}
    }
  else
    {
      for (i = 0; i < 6; i++)
	{
	  if ((long) dlt * dlti[i] >= 0)
	    wd2 = 128;
	  else
	    wd2 = -128;
	  wd3 = (int) ((255L * bli[i]) >> 8L);	/* leak factor of 255/256 */
	  bli[i] = wd2 + wd3;
	}
    }
/* implement delay line for dlt */
  dlti[5] = dlti[4];
  dlti[4] = dlti[3];
  dlti[3] = dlti[2];
  dlti[2] = dlti[1];
  dlti[1] = dlti[0];
  dlti[0] = dlt;
}

/* uppol2 - update second predictor coefficient (pole section) */
/* inputs: al1, al2, plt, plt1, plt2. outputs: apl2 */

int
uppol2 (int al1, int al2, int plt, int plt1, int plt2)
{
  long int wd2, wd4;
  int apl2;
  wd2 = 4L * (long) al1;
  if ((long) plt * plt1 >= 0L)
    wd2 = -wd2;			/* check same sign */
  wd2 = wd2 >> 7;		/* gain of 1/128 */
  if ((long) plt * plt2 >= 0L)
    {
      wd4 = wd2 + 128;		/* same sign case */
    }
  else
    {
      wd4 = wd2 - 128;
    }
  apl2 = wd4 + (127L * (long) al2 >> 7L);	/* leak factor of 127/128 */

/* apl2 is limited to +-.75 */
  if (apl2 > 12288)
    apl2 = 12288;
  if (apl2 < -12288)
    apl2 = -12288;
  return (apl2);
}

/* uppol1 - update first predictor coefficient (pole section) */
/* inputs: al1, apl2, plt, plt1. outputs: apl1 */

int
uppol1 (int al1, int apl2, int plt, int plt1)
{
  long int wd2;
  int wd3, apl1;
  wd2 = ((long) al1 * 255L) >> 8L;	/* leak factor of 255/256 */
  if ((long) plt * plt1 >= 0L)
    {
      apl1 = (int) wd2 + 192;	/* same sign case */
    }
  else
    {
      apl1 = (int) wd2 - 192;
    }
/* note: wd3= .9375-.75 is always positive */
  wd3 = 15360 - apl2;		/* limit value */
  if (apl1 > wd3)
    apl1 = wd3;
  if (apl1 < -wd3)
    apl1 = -wd3;
  return (apl1);
}

/* logsch - update log quantizer scale factor in higher sub-band */
/* note that nbh is passed and returned */

int
logsch (int ih, int nbh)
{
  int wd;
  wd = ((long) nbh * 127L) >> 7L;	/* leak factor 127/128 */
  nbh = wd + wh_code_table[ih];
  if (nbh < 0)
    nbh = 0;
  if (nbh > 22528)
    nbh = 22528;
  return (nbh);
}

/*
+--------------------------------------------------------------------------+
| * Test Vectors (added for CHStone)                                       |
|     test_data : input data                                               |
|     test_compressed : expected output data for "encode"                  |
|     test_result : expected output data for "decode"                      |
+--------------------------------------------------------------------------+
*/

//**********************************
// Customized content
//**********************************
 
#ifdef EXTRALARGE_DATASET
#define SIZE 400
#define IN_END 400

const int test_data[SIZE] = {
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60
};
int compressed[SIZE], result[SIZE];
const int test_compressed[SIZE] = {
253,222,119,186,242,144,32,160,236,237,239,241,243,244,245,245,245,245,246,246,246,247,248,247,248,247,249,248,247,249,248,248,246,248,248,247,249,249,249,248,247,250,248,248,247,251,250,249,248,248,248,246,248,247,250,250,56,182,248,182,248,182,249,249,247,250,184,245,248,246,249,246,249,247,250,249,246,249,246,248,245,248,245,247,251,246,250,247,249,247,247,250,246,250,246,250,246,246,248,246,248,245,246,248,242,251,53,179,191,242,250,244,246,250,243,253,244,245,249,245,249,244,248,246,250,248,244,247,253,245,247,252,245,249,246,252,246,248,246,254,249,243,221,246,249,247,253,250,243,219,241,253,246,253,250,246,61,179,156,244,247,159,243,220,244,250,252,243,218,242,254,253,247,253,246,222,245,250,254,249,250,250,253,249,247,222,248,247,252,252,248,244,251,217,243,222,247,221,244,248
};
const int test_result[SIZE] = {
0,-1,-1,0,0,-1,0,0,-1,-1,0,0,1,1,0,-2,-1,-2,0,-4,1,1,1,-5,2,2,3,11,20,20,22,24,32,33,38,39,46,47,51,50,53,51,54,52,55,52,55,53,56,54,57,56,59,58,63,63,64,58,61,62,65,60,62,63,66,62,59,55,59,62,65,59,59,58,59,54,57,59,63,60,59,55,59,61,65,61,62,60,62,59,58,55,59,62,65,60,59,57,58,54,58,61,66,63,62,58,59,57,58,54,57,56,57,51,54,57,60,55,58,61,66,62,63,60,65,61,64,64,67,61,64,64,67,60,63,65,72,67,68,62,68,67,71,65,64,60,63,64,65,60,63,66,68,61,62,64,67,62,63,64,68,65,64,58,61,64,65,58,59,62,63,55,56,58,61,56,56,56,61,62,62,56,58,60,62,56,57,59,62,56,55,54,59,60,60,54,56,58,61,55,57,59,62,55,54,52,57,58,59,53,55,57,59,53,53,52,58,58,56,48,52,59,65,57,58,52,67,73,74,57,58,64,72,62,59,60,68,70,67,56,61,71,75,61,56,57,64,65,65,58,61,65,66,57,58,62,65,61,63,64,68,64,62,57,57,58,65,68,68,60,58,56,63,65,65,56,58,62,63,54,57,64,67,56,55,56,59,55,59,63,68,63,56,48,56,68,70,55,53,58,62,55,57,60,66,63,57,47,57,70,69,48,46,59,66,55,55,61,68,63,59,53,60,66,71,56,66,75,82,66,61,59,72,77,74,59,63,76,79,63,59,63,73,72,66,55,65,80,80,58,55,68,79,72,66,60,64,69,69,59,63,72,74,60,57,61,68,67,67,62,63,62,63,60,63,65,68,63,60,56,62,67,69,60,57,55,59,60,64,61,62,58,57,53,55,56,65,70,67,52
};
#endif
#ifdef LARGE_DATASET
#define SIZE 200
#define IN_END 200

const int test_data[SIZE] = {
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60
};
int compressed[SIZE], result[SIZE];
const int test_compressed[SIZE] = {
253,222,119,186,242,144,32,160,236,237,239,241,243,244,245,245,245,245,246,246,246,247,248,247,248,247,249,248,247,249,248,248,246,248,248,247,249,249,249,248,247,250,248,248,247,251,250,249,248,248,248,246,248,247,250,250,56,182,248,182,248,182,249,249,247,250,184,245,248,246,249,246,249,247,250,249,246,249,246,248,245,248,245,247,251,246,250,247,249,247,247,250,246,250,246,250,246,246,248,246
};
const int test_result[SIZE] = {
0,-1,-1,0,0,-1,0,0,-1,-1,0,1,2,2,1,-1,0,-1,1,-3,2,2,2,-4,3,3,6,17,28,28,29,31,39,41,47,48,55,56,60,59,62,60,63,61,64,61,64,62,65,63,66,65,68,67,72,72,73,67,70,71,73,68,69,70,74,70,68,63,67,70,73,67,67,66,67,62,64,66,71,68,67,61,65,68,72,68,69,68,69,65,64,61,65,68,71,65,64,62,63,60,64,67,71,68,67,64,65,62,63,59,62,61,62,56,59,62,65,59,62,66,71,67,68,65,70,65,68,68,71,65,68,68,71,65,68,69,76,72,73,66,72,71,76,70,67,63,67,68,69,63,66,69,71,64,65,67,70,66,68,68,72,69,67,61,64,67,68,61,62,65,66,59,60,61,64,59,60,60,65,66,66,60,62,64,66,60,61,63,66,60,59,58,63,64,64,57,59,62,65,58
};
#endif
#ifdef XXL_DATASET
#define SIZE 800
#define IN_END 800

const int test_data[SIZE] = {
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60
};
int compressed[SIZE], result[SIZE];
const int test_compressed[SIZE] = {
253,222,119,186,242,144,32,160,236,237,239,241,243,244,245,245,245,245,246,246,246,247,248,247,248,247,249,248,247,249,248,248,246,248,248,247,249,249,249,248,247,250,248,248,247,251,250,249,248,248,248,246,248,247,250,250,56,182,248,182,248,182,249,249,247,250,184,245,248,246,249,246,249,247,250,249,246,249,246,248,245,248,245,247,251,246,250,247,249,247,247,250,246,250,246,250,246,246,248,246,248,245,246,248,242,251,53,179,191,242,250,244,246,250,243,253,244,245,249,245,249,244,248,246,250,248,244,247,253,245,247,252,245,249,246,252,246,248,246,254,249,243,221,246,249,247,253,250,243,219,241,253,246,253,250,246,61,179,156,244,247,159,243,220,244,250,252,243,218,242,254,253,247,253,246,222,245,250,254,249,250,250,253,249,247,222,248,247,252,252,248,244,251,217,243,222,247,221,244,248,253,254,253,249,249,251,53,185,153,185,248,246,223,246,251,219,249,248,246,221,245,249,220,222,249,245,253,249,248,252,220,254,247,254,252,242,219,248,252,252,245,252,245,222,248,223,245,251,253,250,250,220,251,223,240,253,53,182,146,182,158,238,118,248,114,214,190,126,182,116,240,249,217,93,221,182,248,110,253,159,92,217,247,190,115,247,156,220,220,95,246,183,249,120,248,220,218,184,114,222,116,248,249,154,252,184,49,185,220,250,222,249,124,246,119,220,188,119,152,124,241,249,125,252,250,158,253,119,252,178,92,252,247,151,115,253,180,118,246,253,222,246,253,252,242,252,246,219,242,220,254,252,241,250,220,252,50,158,154,241,249,186,222,244,250,219,181,117,253,254,248,250,156,248,248,183,220,119,222,182,220,124,241,189,189,122,253,253,250,251,253,249,181,253,251,223,240,189,123,223
};
const int test_result[SIZE] = {
-1,0,0,-1,-1,0,-1,-1,0,0,-1,-2,-2,-1,-2,-4,-3,-4,-2,-6,-2,-1,-1,-7,-1,-4,-8,-7,-2,-4,-2,-1,5,5,10,10,17,16,20,19,22,20,23,21,24,21,24,22,25,23,26,25,28,27,31,32,33,29,32,33,35,31,33,34,37,33,32,28,32,35,38,33,34,33,34,29,32,34,38,36,35,32,36,37,41,39,40,39,40,37,37,33,38,41,44,39,38,36,37,34,39,42,47,43,43,40,41,39,40,37,40,39,40,35,38,41,44,39,42,45,50,47,48,45,50,46,49,49,52,46,49,49,52,46,49,50,57,53,54,48,54,53,57,51,50,47,50,50,51,47,51,53,55,48,49,51,54,50,52,52,56,53,52,46,49,52,53,46,47,50,51,44,45,46,49,44,45,45,50,51,51,45,47,49,51,45,46,48,51,45,44,43,48,49,49,43,45,47,50,44,46,48,51,44,43,41,46,47,48,42,44,46,48,42,42,41,47,47,45,37,41,48,54,46,47,41,56,62,63,46,47,53,61,51,48,49,57,59,56,45,50,60,64,50,45,46,53,54,54,47,50,54,55,46,47,51,54,50,52,53,57,53,51,46,46,47,54,57,57,49,47,45,52,54,54,45,46,50,53,45,48,53,56,47,46,48,50,45,50,54,59,54,47,39,47,59,61,46,44,49,53,46,48,51,57,53,48,39,49,61,60,39,37,50,57,46,46,52,59,54,50,44,51,57,62,48,58,66,72,57,52,50,63,68,65,50,54,67,70,54,50,54,64,63,57,46,56,71,71,49,46,59,70,63,57,51,55,60,60,50,54,63,65,52,48,52,60,59,59,54,55,54,55,52,55,57,60,55,52,48,54,58,61,53,50,48,52,53,57,54,55,50,50,47,49,49,58,63,61,46,47,56,59,49,50,57,59,48,45,47,53,54,57,55,58,56,57,52,53,53,56,54,55,51,58,55,70,67,74,62,62,60,61,57,62,66,68,60,58,59,67,69,69,61,60,60,61,57,61,64,66,58,57,57,63,63,67,64,64,59,58,54,57,59,62,58,57,55,58,57,61,61,63,60,59,55,57,57,61,58,55,49,54,60,62,54,53,54,59,56,55,50,53,55,56,50,53,56,59,53,54,55,57,51,52,52,57,56,57,53,54,52,57,58,59,54,57,57,57,50,52,54,59,54,59,53,71,68,80,55,66,62,69,54,53,57,64,63,58,54,61,69,76,66,63,65,66,60,57,55,57,50,55,55,63,67,68,65,66,64,65,56,56,58,55,47,50,54,64,63,62,61,66,66,66,52,57,59,59,51,49,49,58,59,62,61,60,62,61,60,58,50,54,49,53,54,52,52,51,51,55,56,64,59,62,54,49,46,50,57,57,50,49,49,55,49,58,59,64,55,56,54,52,45,58,56,67,68,68,64,63,66,66,64,62,64,65,61,58,58,65,63,70,64,62,57,64,69,68,65,59,54,55,59,60,61,63,60,63,56,63,61,64,63,58,56,59,57,59,53,55,60,65,60,56,51,60,66,64,51,52,55,61,53,50,50,55,50,55,54,59,59,58,51,53,54,59,56,53,47,50,53,56,49,54,59,59,48,49,56,63,57,57,55,54,47,49,51,58,59,61,57,55,49,59,59,74,69,69,56,58,58,65,60,66,66,68,58,59,58,67,67,69,59,57,56,61,62,65,63,64,60,61,58,63,64,65,59,61,57,60,55,59,64,63,56,58,60,63,55,56,61,63,59,56,49,56,53,63,57,57,56,58,56,58,56,57,55,56,54,57,56,58,54,56,50,55,53,58,53
};
#endif
#ifdef XXXL_DATASET
#define SIZE 1600
#define IN_END 1600

const int test_data[SIZE] = {
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60,
68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,66,66,66,66,66,66,65,65,65,65,65,64,64,64,64,64,64,64,64,63,63,63,63,63,62,62,62,62,62,62,61,61,61,61,61,61,60,60,60,60,60,60,60,60,60,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,59,60,60,60,60,60,60,60,60
};
int compressed[SIZE], result[SIZE];
const int test_compressed[SIZE] = {
253,222,119,186,242,144,32,160,236,237,239,241,243,244,245,245,245,245,246,246,246,247,248,247,248,247,249,248,247,249,248,248,246,248,248,247,249,249,249,248,247,250,248,248,247,251,250,249,248,248,248,246,248,247,250,250,56,182,248,182,248,182,249,249,247,250,184,245,248,246,249,246,249,247,250,249,246,249,246,248,245,248,245,247,251,246,250,247,249,247,247,250,246,250,246,250,246,246,248,246,248,245,246,248,242,251,53,179,191,242,250,244,246,250,243,253,244,245,249,245,249,244,248,246,250,248,244,247,253,245,247,252,245,249,246,252,246,248,246,254,249,243,221,246,249,247,253,250,243,219,241,253,246,253,250,246,61,179,156,244,247,159,243,220,244,250,252,243,218,242,254,253,247,253,246,222,245,250,254,249,250,250,253,249,247,222,248,247,252,252,248,244,251,217,243,222,247,221,244,248,253,254,253,249,249,251,53,185,153,185,248,246,223,246,251,219,249,248,246,221,245,249,220,222,249,245,253,249,248,252,220,254,247,254,252,242,219,248,252,252,245,252,245,222,248,223,245,251,253,250,250,220,251,223,240,253,53,182,146,182,158,238,118,248,114,214,190,126,182,116,240,249,217,93,221,182,248,110,253,159,92,217,247,190,115,247,156,220,220,95,246,183,249,120,248,220,218,184,114,222,116,248,249,154,252,184,49,185,220,250,222,249,124,246,119,220,188,119,152,124,241,249,125,252,250,158,253,119,252,178,92,252,247,151,115,253,180,118,246,253,222,246,253,252,242,252,246,219,242,220,254,252,241,250,220,252,50,158,154,241,249,186,222,244,250,219,181,117,253,254,248,250,156,248,248,183,220,119,222,182,220,124,241,189,189,122,253,253,250,251,253,249,181,253,251,223,240,189,123,223,242,223,245,184,183,222,48,182,85,248,118,178,120,244,115,216,254,250,184,246,118,248,252,250,220,187,251,246,250,248,187,217,248,251,253,243,222,246,253,220,250,251,249,245,243,217,250,222,243,220,246,248,248,253,222,248,49,184,154,181,123,222,248,245,117,253,159,177,220,31,238,254,223,115,220,188,251,122,250,250,251,220,184,187,95,240,251,95,243,217,248,186,181,115,248,245,248,223,243,156,243,253,244,247,220,189,51,184,220,247,125,183,92,252,114,254,158,115,158,120,248,245,115,122,250,188,251,253,248,239,222,120,119,155,246,186,248,122,252,248,125,253,187,223,175,92,118,250,243,254,253,184,245,186,59,253,113,182,86,246,250,247,92,120,243,218,252,247,158,183,252,114,120,118,126,222,183,188,244,244,122,125,125,223,245,181,184,120,246,220,222,120,246,253,182,251,253,156,58,253,245,248,243,156,125,221,114,248,220,179,92,248,251,158,114,125,250,251,220,249,181,183,123,251,251,253,221,247,185,240,253,223,243,150,120,245,179,250,243,254,222,250,250,250,245,245,245,220,251,220,245,248,243,222,248,253,58,187,150,173,120,244,119,252,243,216,186,246,186,120,116,248,254,126,254,184,182,120,250,251,218,120,246,159,181,117,187,89,248,248,58,189,248,118,223,250,123,223,242,223,239,151,115,222,247,186,49,175,85,248,248,117,252,120,238,223,159,249,123,253,248,242,252,252,158,249,252,122,248,179,220,219,243,154,249,245,244,116,184,248,250,222,185,120,241,252,248,184,252,254,254,188,114,252,247,154,51,158,90,242,252,244,250,126,126,220,186,119,254,252,243,219,186,250,247,247,252,241,253,254,220,247,247,254,248,243,219,252,247,254,253,250,245,253,223,246,250,222,243,222
};
const int test_result[SIZE] = {
-1,0,0,-1,-1,0,-1,-1,0,0,-1,-2,-3,-2,-3,-5,-4,-5,-3,-7,-3,-2,-2,-8,-2,-4,-9,-10,-6,-7,-5,-5,1,1,6,6,13,12,16,15,18,16,19,17,20,17,20,18,21,19,22,21,24,23,27,28,29,25,28,29,31,27,29,30,33,29,28,24,29,32,35,29,30,30,31,26,29,31,36,33,32,29,33,34,38,36,37,36,37,34,34,31,36,39,42,37,36,34,35,32,36,39,44,40,41,38,39,37,38,35,38,37,38,32,35,38,41,37,40,42,47,45,47,43,48,44,47,47,50,44,47,47,50,44,47,48,55,50,52,47,52,51,55,50,49,45,48,49,50,45,48,51,53,46,47,49,52,48,50,50,54,51,50,44,47,50,51,44,45,47,50,43,44,44,47,43,44,44,49,50,50,44,46,48,50,44,45,47,50,44,43,42,47,48,48,42,44,46,49,43,45,47,50,43,42,40,45,46,47,41,43,45,47,41,41,40,46,46,44,36,40,47,53,45,46,40,55,61,62,45,46,52,60,50,47,48,56,58,55,44,49,59,63,49,44,45,52,53,53,46,49,53,54,45,46,50,53,49,51,52,56,52,50,45,45,46,53,56,56,48,46,44,51,53,53,44,46,50,51,43,46,52,55,45,44,46,48,43,48,52,57,52,46,38,46,57,59,44,42,46,51,45,47,49,55,52,47,38,48,60,59,37,35,48,55,44,44,50,57,53,49,43,49,56,62,47,56,64,70,55,51,49,62,67,64,49,53,65,68,52,48,52,62,62,57,46,55,70,69,47,44,57,68,61,55,50,54,58,58,49,53,62,64,51,47,51,59,58,58,53,54,53,54,51,54,56,59,54,51,47,53,57,60,52,49,47,51,52,56,53,54,49,49,46,48,48,57,62,60,45,46,55,58,48,49,56,58,47,44,46,52,53,56,54,57,55,56,51,52,52,55,53,54,50,57,54,69,66,73,61,61,59,60,56,61,65,67,59,57,58,66,68,68,60,59,59,60,56,60,63,65,57,56,56,62,62,66,63,63,58,57,53,56,58,61,57,56,54,57,56,60,60,62,59,58,54,56,56,60,57,55,49,54,59,61,53,52,53,58,55,54,50,53,54,55,50,53,56,59,53,54,55,57,51,52,52,57,56,57,53,54,52,57,58,59,54,57,57,57,50,52,54,59,54,59,53,71,69,80,54,65,61,68,53,52,56,63,62,57,53,60,68,75,65,62,64,65,59,56,54,56,49,54,54,62,66,67,64,65,63,64,55,55,57,54,46,49,53,63,62,61,60,65,65,65,51,56,58,58,50,48,48,57,58,61,60,59,61,60,59,57,49,53,48,52,53,51,51,50,50,54,55,63,58,61,53,48,45,49,56,56,49,48,48,54,48,57,58,63,54,55,53,51,44,57,55,66,67,67,63,62,65,65,63,61,63,64,60,57,57,64,62,69,63,61,56,63,68,67,64,58,53,54,58,59,60,62,59,62,55,62,60,63,62,57,55,58,56,58,53,54,59,63,58,55,50,59,65,63,50,51,54,60,52,49,49,54,49,54,53,58,58,57,50,52,53,58,55,52,46,49,52,55,48,53,58,58,47,48,55,62,56,56,54,53,46,48,50,57,58,60,56,54,48,58,58,73,68,68,55,57,57,64,59,65,65,67,57,58,57,66,66,68,58,56,55,60,61,64,62,63,59,60,57,62,63,64,58,60,56,59,54,58,63,62,55,57,59,62,53,55,60,62,58,55,49,56,52,62,55,56,55,58,56,58,56,57,55,56,54,57,56,58,54,56,50,55,53,58,53,58,56,57,48,51,53,58,54,56,57,56,50,52,55,58,52,54,50,57,52,56,59,59,51,58,56,66,71,73,65,61,59,62,59,57,61,62,61,55,53,62,66,71,64,64,59,64,59,59,57,57,56,60,56,61,58,61,57,62,61,65,61,60,59,60,55,58,55,60,56,59,56,61,63,64,57,56,55,59,58,57,51,55,58,60,53,53,55,60,59,59,54,55,54,57,54,55,52,52,49,55,59,61,54,55,57,58,50,52,56,60,53,52,51,54,52,55,54,59,58,60,54,53,49,58,56,69,64,71,61,60,61,67,67,68,63,62,60,59,58,62,61,68,63,65,55,58,65,68,65,63,51,57,57,66,64,60,57,58,62,65,60,58,60,59,59,58,57,59,57,61,56,61,60,63,55,57,56,58,59,58,51,52,53,59,58,57,50,54,60,63,54,54,52,57,52,50,48,52,51,55,49,52,50,57,56,57,48,54,56,60,50,52,52,57,49,50,48,56,56,61,56,56,50,60,56,66,64,67,61,61,62,65,60,61,65,69,65,60,56,61,60,67,66,63,56,61,65,63,59,59,58,60,60,55,55,54,57,63,56,61,58,60,59,60,60,60,58,56,50,54,59,61,57,53,52,58,60,62,50,53,53,57,54,53,52,56,54,57,52,55,55,58,56,57,54,57,56,56,47,48,57,60,53,52,52,56,48,53,52,59,54,57,52,54,48,54,54,55,54,59,56,58,49,57,58,64,72,70,62,57,61,62,61,60,67,68,64,58,54,61,65,71,62,61,55,65,62,66,56,58,62,61,55,53,57,58,57,57,59,64,62,63,54,57,57,59,53,52,52,55,56,57,58,58,58,59,60,58,53,53,51,56,53,53,53,55,51,57,56,62,58,58,54,54,51,54,54,57,51,54,51,59,52,59,59,58,53,57,54,57,51,54,51,55,47,55,58,60,57,58,58,59,53,57,58,67,65,68,59,60,66,70,62,64,60,69,67,64,58,58,63,65,62,62,60,67,65,67,60,62,57,61,59,59,60,62,60,63,59,62,59,64,61,64,56,59,56,59,52,56,55,63,59,60,51,58,63,65,56,53,53,55,50,53,54,55,51,53,54,59,58,59,54,55,53,56,53,54,51,52,50,51,49,54,57,60,54,57,58,59,51,52,52,53,49,53,57,60,54,55,55,59,56,63,58,72,69,72,55,54,59,62,60,58,58,63,63,62,55,60,67,71,62,59,56,61,60,60,59,58,57,57,58,59,61,62,62,64,60,63,56,60,55,57,56,59,57,59,57,62,64,62,57,55,53,59,57,61,53,52,51,56,55,58,61,62,56,52,55,54,52,57,55,56,56,52,50,54,55,58,55,53,52,59,57,56,49,53,56,58,44,52,61,61,49,49,55,61,50,53,53,55,48,54,48,58,71,75,63,57,59,60,58,59,62,64,62,56,50,53,61,69,66,62,61,61,60,62,59,63,58,59,50,55,56,63,57,63,61,62,58,57,58,59,57,58,55,56,51,55,59,64,64,60,48,55,58,66,54,53,50,53,50,49,47,51,51,54,51,52,51,56,56,59,52,52,51,51,45,48,50,56,50,53,49,54,52,57,53,58,54,58,54,52,46,49,53,56,49,55,60,61,49,57,61,71,69,67,56,59,60,65,57,58,60,65,64,64,63,67,65,67,62,59,59,61,63,64,62,60,53,59,62,67,59,58,58,61,57,57,54,59,59,58,50,52,56,61,59,62,61,61,54,53,52,57,57,59,55,53,48,54,58,62,56,54,51,55,55,58,55,56,53,54,51,53,52,57,57
};
#endif
#ifndef XXXL_DATASET
  #ifndef XXL_DATASET
    #ifndef EXTRALARGE_DATASET
      #ifndef LARGE_DATASET
        #ifndef MEDIUM_DATASET
          #define MEDIUM_DATASET
        #endif
      #endif
    #endif
  #endif
#endif

#ifdef MEDIUM_DATASET
#define SIZE 100
#define IN_END 100

const int test_data[SIZE] = {
  0x44, 0x44, 0x44, 0x44, 0x44,
  0x44, 0x44, 0x44, 0x44, 0x44,
  0x44, 0x44, 0x44, 0x44, 0x44,
  0x44, 0x44, 0x43, 0x43, 0x43,
  0x43, 0x43, 0x43, 0x43, 0x42,
  0x42, 0x42, 0x42, 0x42, 0x42,
  0x41, 0x41, 0x41, 0x41, 0x41,
  0x40, 0x40, 0x40, 0x40, 0x40,
  0x40, 0x40, 0x40, 0x3f, 0x3f,
  0x3f, 0x3f, 0x3f, 0x3e, 0x3e,
  0x3e, 0x3e, 0x3e, 0x3e, 0x3d,
  0x3d, 0x3d, 0x3d, 0x3d, 0x3d,
  0x3c, 0x3c, 0x3c, 0x3c, 0x3c,
  0x3c, 0x3c, 0x3c, 0x3c, 0x3b,
  0x3b, 0x3b, 0x3b, 0x3b, 0x3b,
  0x3b, 0x3b, 0x3b, 0x3b, 0x3b,
  0x3b, 0x3b, 0x3b, 0x3b, 0x3b,
  0x3b, 0x3b, 0x3b, 0x3b, 0x3b,
  0x3b, 0x3b, 0x3c, 0x3c, 0x3c,
  0x3c, 0x3c, 0x3c, 0x3c, 0x3c
};
int compressed[SIZE], result[SIZE];
const int test_compressed[SIZE] = {
  0xfd, 0xde, 0x77, 0xba, 0xf2, 
  0x90, 0x20, 0xa0, 0xec, 0xed, 
  0xef, 0xf1, 0xf3, 0xf4, 0xf5, 
  0xf5, 0xf5, 0xf5, 0xf6, 0xf6, 
  0xf6, 0xf7, 0xf8, 0xf7, 0xf8, 
  0xf7, 0xf9, 0xf8, 0xf7, 0xf9, 
  0xf8, 0xf8, 0xf6, 0xf8, 0xf8, 
  0xf7, 0xf9, 0xf9, 0xf9, 0xf8, 
  0xf7, 0xfa, 0xf8, 0xf8, 0xf7, 
  0xfb, 0xfa, 0xf9, 0xf8, 0xf8
};
const int test_result[SIZE] = {
  0, 0xffffffff, 0xffffffff, 0, 0, 
  0xffffffff, 0, 0, 0xffffffff, 0xffffffff, 
  0, 0, 0x1, 0x1, 0, 
  0xfffffffe, 0xffffffff, 0xfffffffe, 0, 0xfffffffc, 
  0x1, 0x1, 0x1, 0xfffffffb, 0x2, 
  0x2, 0x3, 0xb, 0x14, 0x14, 
  0x16, 0x18, 0x20, 0x21, 0x26, 
  0x27, 0x2e, 0x2f, 0x33, 0x32, 
  0x35, 0x33, 0x36, 0x34, 0x37, 
  0x34, 0x37, 0x35, 0x38, 0x36, 
  0x39, 0x38, 0x3b, 0x3a, 0x3f, 
  0x3f, 0x40, 0x3a, 0x3d, 0x3e, 
  0x41, 0x3c, 0x3e, 0x3f, 0x42, 
  0x3e, 0x3b, 0x37, 0x3b, 0x3e, 
  0x41, 0x3b, 0x3b, 0x3a, 0x3b, 
  0x36, 0x39, 0x3b, 0x3f, 0x3c, 
  0x3b, 0x37, 0x3b, 0x3d, 0x41, 
  0x3d, 0x3e, 0x3c, 0x3e, 0x3b, 
  0x3a, 0x37, 0x3b, 0x3e, 0x41, 
  0x3c, 0x3b, 0x39, 0x3a, 0x36
};
#endif

void
adpcm_main ()
{
  int i, j;

/* reset, initialize required memory */
  reset ();

  j = 10;

  for (i = 0; i < IN_END; i += 2)
    {
      compressed[i / 2] = encode (test_data[i], test_data[i + 1]);
    }
  for (i = 0; i < IN_END; i += 2)
    {
      decode (compressed[i / 2]);
      result[i] = xout1;
      result[i + 1] = xout2;
    }
}

//***************************
// Customized content
#define TEST_REPEAT_TIME 1
//***************************

int
submain ()
{
  int i;
  int main_result;

  main_result = 0;

  adpcm_main ();
  for (i = 0; i < IN_END / 2; i++)
	{
    //printf("%d,", compressed[i]);
	  if (compressed[i] != test_compressed[i])
	    {
	      main_result += 1;
	    }
	}
  //printf("\n\n");
  for (i = 0; i < IN_END; i++)
	{
    //printf("%d,", result[i]);
	  if (result[i] != test_result[i])
	    {
	      main_result += 1;
	    }
	}
  //printf("\n");
  //printf("%d\n", main_result);
  return main_result;
}

int main(int argc, char** argv) {
    for (int i = 0; i < TEST_REPEAT_TIME; ++i)
        submain();
}