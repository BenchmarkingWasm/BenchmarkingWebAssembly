let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var K=Math.imul;var M=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function w(c){var a=0;if((c|0)<0){if((c|0)<-1073741823){return 0|0;}a=c^ -1;}else{a=c;}if(a>>>0>65535){if(a>>>0>16777215){a=u[a>>>24]|0;return a+65535|0;}a=u[a>>>16&255]|0;return a+7|0;}if((a&65280|0)===0){a=u[a&255]|0;return a+23|0;}a=u[a>>>8&255]|0;return a+15|0;}function D(h,g){var a=0,c=0,e=0;if((h&65535)===0){return 0|0;}a=h<<16>>16<<1;e=g<<16>>16;c=(a|0)<(e|0)?0|0:2|0;a=a-((a|0)<(e|0)?0|0:e|0)<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}a=a<<1;c=c<<1;if((a|0)>=(e|0)){a=a-e|0;c=c+1|0;}return (c<<1)+(((a<<1|0)>=(e|0)?1:0)?1:0)|0;}function C(F,G,H,I){var l=0,o=0,a=0,c=0,e=0,g=0,h=0,j=0,k=0,q=0,s=0,t=0,v=0,m=0,n=0;o=0;l=0;while(1){a=F[G+l|0]|0;if(a<<16<0){a=(a&65535)===32768?32767|0:-a|0;}o=a<<16>o<<16?a|0:o|0;l=l+1|0;if(l>>>0<160){continue;}break;}if((o&65535)===0){o=0;l=0;}else{c=4-(w((o&65535)<<16)|0)|0;o=c<<16>>16;if((c+65535&65535)<4){l=16384>>>(o-1|0);e=(l&65535)===32768?1:0;g=l<<16>>16;l=0;while(1){a=F[G+l|0]|0;if(e&&(a&65535)===32768){a=32767;}else{a=(K(a<<16>>16,g)|0)+16384>>>15;}F[G+l|0]=a;l=l+1|0;if(l>>>0<160){continue;}else{l=c<<16>0?1:0;}break;}}else{l=c<<16>0?1:0;}}a=F[G]|0;H[I+8|0]=0;H[I+7|0]=0;H[I+6|0]=0;H[I+5|0]=0;H[I+4|0]=0;H[I+3|0]=0;H[I+2|0]=0;H[I+1|0]=0;H[I]=0;a=K(F[G]<<16>>16,a<<16>>16)|0;H[I]=a;c=F[G+1|0]<<16>>16;a=(K(c,c)|0)+a|0;H[I]=a;c=K(F[G]<<16>>16,c)|0;H[I+1|0]=c;e=F[G+2|0]<<16>>16;a=(K(e,e)|0)+a|0;H[I]=a;c=(K(F[G+1|0]<<16>>16,e)|0)+c|0;H[I+1|0]=c;e=K(F[G]<<16>>16,e)|0;H[I+2|0]=e;g=F[G+3|0]<<16>>16;a=(K(g,g)|0)+a|0;H[I]=a;c=(K(F[G+2|0]<<16>>16,g)|0)+c|0;H[I+1|0]=c;e=(K(F[G+1|0]<<16>>16,g)|0)+e|0;H[I+2|0]=e;g=K(F[G]<<16>>16,g)|0;H[I+3|0]=g;h=F[G+4|0]<<16>>16;a=(K(h,h)|0)+a|0;H[I]=a;c=(K(F[G+3|0]<<16>>16,h)|0)+c|0;H[I+1|0]=c;e=(K(F[G+2|0]<<16>>16,h)|0)+e|0;H[I+2|0]=e;g=(K(F[G+1|0]<<16>>16,h)|0)+g|0;H[I+3|0]=g;h=K(F[G]<<16>>16,h)|0;H[I+4|0]=h;j=F[G+5|0]<<16>>16;a=(K(j,j)|0)+a|0;H[I]=a;c=(K(F[G+4|0]<<16>>16,j)|0)+c|0;H[I+1|0]=c;e=(K(F[G+3|0]<<16>>16,j)|0)+e|0;H[I+2|0]=e;g=(K(F[G+2|0]<<16>>16,j)|0)+g|0;H[I+3|0]=g;h=(K(F[G+1|0]<<16>>16,j)|0)+h|0;H[I+4|0]=h;j=(K(F[G]<<16>>16,j)|0)+(H[I+5|0]|0)|0;H[I+5|0]=j;k=F[G+6|0]<<16>>16;a=(K(k,k)|0)+a|0;H[I]=a;c=(K(F[G+5|0]<<16>>16,k)|0)+c|0;H[I+1|0]=c;e=(K(F[G+4|0]<<16>>16,k)|0)+e|0;H[I+2|0]=e;g=(K(F[G+3|0]<<16>>16,k)|0)+g|0;H[I+3|0]=g;h=(K(F[G+2|0]<<16>>16,k)|0)+h|0;H[I+4|0]=h;t=(K(F[G+1|0]<<16>>16,k)|0)+j|0;H[I+5|0]=t;v=(K(F[G]<<16>>16,k)|0)+(H[I+6|0]|0)|0;H[I+6|0]=v;m=F[G+7|0]<<16>>16;s=(K(m,m)|0)+a|0;H[I]=s;q=(K(F[G+6|0]<<16>>16,m)|0)+c|0;H[I+1|0]=q;k=(K(F[G+5|0]<<16>>16,m)|0)+e|0;H[I+2|0]=k;j=(K(F[G+4|0]<<16>>16,m)|0)+g|0;H[I+3|0]=j;h=(K(F[G+3|0]<<16>>16,m)|0)+h|0;H[I+4|0]=h;g=(K(F[G+2|0]<<16>>16,m)|0)+t|0;H[I+5|0]=g;e=(K(F[G+1|0]<<16>>16,m)|0)+v|0;H[I+6|0]=e;c=(K(F[G]<<16>>16,m)|0)+(H[I+7|0]|0)|0;H[I+7|0]=c;a=H[I+8|0]|0;v=7;t=8;while(1){m=v+1|0;n=F[G+m|0]<<16>>16;s=(K(n,n)|0)+s|0;H[I]=s;q=(K(F[G+v|0]<<16>>16,n)|0)+q|0;H[I+1|0]=q;k=(K(F[(G+v|0)+ -1|0]<<16>>16,n)|0)+k|0;H[I+2|0]=k;j=(K(F[(G+v|0)+ -2|0]<<16>>16,n)|0)+j|0;H[I+3|0]=j;h=(K(F[(G+v|0)+ -3|0]<<16>>16,n)|0)+h|0;H[I+4|0]=h;g=(K(F[(G+v|0)+ -4|0]<<16>>16,n)|0)+g|0;H[I+5|0]=g;e=(K(F[(G+v|0)+ -5|0]<<16>>16,n)|0)+e|0;H[I+6|0]=e;c=(K(F[(G+v|0)+ -6|0]<<16>>16,n)|0)+c|0;H[I+7|0]=c;a=(K(F[(G+v|0)+ -7|0]<<16>>16,n)|0)+a|0;H[I+8|0]=a;t=t+1|0;if(t>>>0<160){v=m;continue;}break;}H[I+8|0]=a<<1;H[I+7|0]=c<<1;H[I+6|0]=e<<1;H[I+5|0]=g<<1;H[I+4|0]=h<<1;H[I+3|0]=j<<1;H[I+2|0]=k<<1;H[I+1|0]=q<<1;H[I]=s<<1;if(l){a=159;l=0;while(1){c=F[G+l|0]|0;F[G+l|0]=c<<16>>16<<o;if((a|0)>0){a=a-1|0;l=l+1|0;continue;}break;}}}function B(q,r,o,p){var a=0,h=0,c=0,g=0,l=0,k=0,j=0,n=0,m=0,s=0,e=null;h=q[r]|0;L1:if((h|0)===0){o[p]=0;o[p+1|0]=0;o[p+2|0]=0;o[p+3|0]=0;o[p+4|0]=0;o[p+5|0]=0;o[p+6|0]=0;o[p+7|0]=0;}else{c=(w(h)|0)<<16>>16;a=q[r+1|0]|0;a=a<<c>>>16;g=q[r+2|0]|0;g=g<<c>>>16;l=q[r+3|0]|0;l=l<<c>>>16;k=q[r+4|0]|0;k=k<<c>>>16;j=q[r+5|0]|0;j=j<<c>>>16;n=q[r+6|0]|0;n=n<<c>>>16;m=q[r+7|0]|0;m=m<<c>>>16;s=q[r+8|0]|0;e=new Uint16Array(18);e[1]=a;e[2]=g;e[3]=l;e[4]=k;e[5]=j;e[6]=n;e[7]=m;e[9]=h<<c>>>16;e[10]=a;e[11]=g;e[12]=l;e[13]=k;e[14]=j;e[15]=n;e[16]=m;e[17]=s<<c>>>16;c=1;h=0;while(1){if(a<<16<0){g=(a&65535)===32768?32767|0:-a|0;}else{g=a;}l=e[9]|0;if(l<<16<g<<16){if(c>>>0<9){while(1){o[p+h|0]=0;c=c+1|0;if(c>>>0<9){h=h+1|0;continue;}break;}}else{break L1;}}else{g=D(g,l)|0;k=-g|0;j=a<<16>0?k|0:g|0;o[p+h|0]=a<<16>0?k|0:g|0;if((c|0)!==8){if((a&65535)===32768&&(j&65535)===32768){a=32767;}else{a=(K(j<<16>>16,a<<16>>16)|0)+16384>>>15;}a=(l<<16>>16)+(a<<16>>16)|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}e[9]=a;if(c>>>0<=7){l=8-c|0;a=j;g=1;while(1){k=e[g]|0;if((k&65535)===32768&&(a&65535)===32768){a=32767;}else{a=(K(a<<16>>16,k<<16>>16)|0)+16384>>>15;}j=g+1|0;n=e[9+j|0]|0;m=n<<16>>16;a=m+(a<<16>>16)|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}e[9+g|0]=a;a=o[p+h|0]|0;if((n&65535)===32768&&(a&65535)===32768){a=32767;}else{a=(K(a<<16>>16,m)|0)+16384>>>15;}a=(k<<16>>16)+(a<<16>>16)|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}e[g]=a;if((g|0)<(l|0)){a=o[p+h|0]|0;g=j;continue;}break;}}c=c+1|0;if(c>>>0<9){a=e[10]|0;h=h+1|0;continue;}}}break;}}}function A(h,i){var g=0,e=0,a=0,c=0;e=1;g=0;while(1){L1:{L2:{c=h[i+g|0]|0;if(c<<16<0){a=-c|0;if((c&65535)===32768){a=32767;break L2;}}else{a=c;}if(a<<16<1449525248){a=a<<16>>16>>>1;break L1;}else{if(a<<16<2040135680){a=a+54477|0;break L1;}}}a=(a<<2)+26624|0;break L1;}h[i+g|0]=c<<16<0?-a|0:a|0;g=g+1|0;e=e+1|0;if(e>>>0<9){continue;}break;}}function z(e,f){var a=0,c=0;a=(K(e[f]<<16>>16,40960)>>16)+256|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}a=a<<16>>16>>>9;if(a<<16>2031616){a=63;}else{a=a<<16<-2097152?0|0:a+32|0;}e[f]=a;a=(K(e[f+1|0]<<16>>16,40960)>>16)+256|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}a=a<<16>>16>>>9;if(a<<16>2031616){a=63;}else{a=a<<16<-2097152?0|0:a+32|0;}e[f+1|0]=a;a=(K(e[f+2|0]<<16>>16,40960)>>16)+2048|0;if((a|0)<-32768){a=-32512;}else{a=(a|0)>32767?33023|0:(a<<16>>16)+256|0;}if((a|0)<-32768){a=65472;}else{a=(a|0)>32767?63|0:a<<16>>16>>>9|0;}if(a<<16>983040){a=31;}else{a=a<<16<-1048576?0|0:a+16|0;}L1:{e[f+2|0]=a;a=(K(e[f+3|0]<<16>>16,40960)>>16)-2560|0;if((a|0)<-32768){a=65472;}else{if((a|0)>32767){a=31;break L1;}else{c=(a<<16>>16)+256|0;if((c|0)<-32768){a=65472;}else{a=c<<16>>16>>>9;if((c|0)>32767||a<<16>983040){a=31;break L1;}}}}a=a<<16<-1048576?0|0:a+16|0;break L1;}L2:{e[f+3|0]=a;a=(K(e[f+4|0]<<16>>16,27928)>>16)+94|0;if((a|0)<-32768){a=65472;}else{if((a|0)>32767){a=15;break L2;}else{c=(a<<16>>16)+256|0;if((c|0)<-32768){a=65472;}else{a=c<<16>>16>>>9;if((c|0)>32767||a<<16>458752){a=15;break L2;}}}}a=a<<16<-524288?0|0:a+8|0;break L2;}L3:{e[f+4|0]=a;a=(K(e[f+5|0]<<16>>16,30720)>>16)-1792|0;if((a|0)<-32768){a=65472;}else{if((a|0)>32767){a=15;break L3;}else{c=(a<<16>>16)+256|0;if((c|0)<-32768){a=65472;}else{a=c<<16>>16>>>9;if((c|0)>32767||a<<16>458752){a=15;break L3;}}}}a=a<<16<-524288?0|0:a+8|0;break L3;}L4:{e[f+5|0]=a;a=(K(e[f+6|0]<<16>>16,17068)>>16)-341|0;if((a|0)<-32768){a=65472;}else{if((a|0)>32767){a=7;break L4;}else{c=(a<<16>>16)+256|0;if((c|0)<-32768){a=65472;}else{a=c<<16>>16>>>9;if((c|0)>32767||a<<16>196608){a=7;break L4;}}}}a=a<<16<-262144?0|0:a+4|0;break L4;}e[f+6|0]=a;a=(K(e[f+7|0]<<16>>16,18072)>>16)-1144|0;if((a|0)<-32768){a=65472;}else{if((a|0)>32767){e[f+7|0]=7;return;}c=(a<<16>>16)+256|0;if((c|0)<-32768){a=65472;}else{a=c<<16>>16>>>9;if((c|0)>32767||a<<16>196608){e[f+7|0]=7;return;}}}a=a<<16<-262144?0|0:a+4|0;e[f+7|0]=a;}function y(c,d,a,b){var e=null;e=new Int32Array(9);C(c,d,e,0);B(e,0,a,b);A(a,b);z(a,b);}function x(){var a=0,c=null;c=new Uint16Array(1288);a=0;while(1){c[a]=E[a]|0;a=a+1|0;if(a>>>0<1280){continue;}break;}y(c,0,c,1280);}function J(c,a){x();return 0|0;}var E=new Uint16Array([81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159]);var u=new Uint8Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);J();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");