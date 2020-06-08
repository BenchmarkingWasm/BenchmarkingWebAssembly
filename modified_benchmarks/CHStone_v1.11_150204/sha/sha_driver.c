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
/* NIST Secure Hash Algorithm */
/* heavily modified by Uwe Hollerbach uh@alumni.caltech edu */
/* from Peter C. Gutmann's implementation as found in */
/* Applied Cryptography by Bruce Schneier */

/* NIST's proposed modification to SHA of 7/11/94 may be */
/* activated by defining USE_MODIFIED_SHA */

#include <stdio.h>
#include "sha.h"
#include "sha.c"

/*
+--------------------------------------------------------------------------+
| * Test Vector (added for CHStone)                                        |
|     outData : expected output data                                       |
+--------------------------------------------------------------------------+
*/
#ifdef LARGE_DATASET
const INT32 outData[5] =
  {0x7f9d7eabUL,
  0x097c354eUL,
  0xd401812cUL,
  0xe24a94d2UL,
  0x27cb028aUL};
#endif
#ifdef EXTRALARGE_DATASET
const INT32 outData[5] =
  {
  0x2e6c9681UL,
  0x665cb2b8UL,
  0x485a42e7UL,
  0xb5303f02UL,
  0x8fa16277UL
  };
#endif
#ifdef XXL_DATASET
const INT32 outData[5] =
  {
  0x2124f900UL,
  0x6cd769feUL,
  0xc59ffad1UL,
  0x1ec813d4UL,
  0xc02863aUL
  };
#endif
#ifdef XXXL_DATASET
const INT32 outData[5] =
  {
  0x19ca4c6aUL,
  0xecc8394cUL,
  0x1e66b8f9UL,
  0x628c697eUL,
  0x6d4b78bfUL
  };
#endif
#ifdef MEDIUM_DATASET
const INT32 outData[5] =
  { 0x006a5a37UL, 0x93dc9485UL, 0x2c412112UL, 0x63f7ba43UL, 0xad73f922UL };
#endif

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
  sha_stream ();
  for (i = 0; i < 5; i++)
	{
    //printf ("%x\n", sha_info_digest[i]);
	  main_result += (sha_info_digest[i] != outData[i]);
	}
  //printf ("\n%d\n", main_result);
  return main_result;
}

int main(int argc, char** argv) {
    for (int i = 0; i < TEST_REPEAT_TIME; ++i)
        submain();
}