let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var Q=Math.imul;var R=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function x(c){var a=0;if((c|0)<0){if((c|0)<-1073741823){return 0|0;}a=c^ -1;}else{a=c;}if(a>>>0>65535){if(a>>>0>16777215){a=v[a>>>24]|0;return a+65535|0;}a=v[a>>>16&255]|0;return a+7|0;}if((a&65280|0)===0){a=v[a&255]|0;return a+23|0;}a=v[a>>>8&255]|0;return a+15|0;}function I(K,M,N,O){var e=0,o=0,a=0,c=0,m=0,q=0,w=0,s=0,t=0,u=0,j=0,l=0,h=0,g=0,k=0,y=0,n=0;o=0;e=0;while(1){a=K[M+e|0]|0;if(a<<16<0){a=(a&65535)===32768?32767|0:-a|0;}o=a<<16>o<<16?a|0:o|0;e=e+1|0;if(e>>>0<160){continue;}break;}if((o&65535)===0){o=0;e=0;}else{c=4-(x((o&65535)<<16)|0)|0;o=c<<16>>16;e=o-1|0;if(e>>>0<4){e=16384>>>e;m=(e&65535)===32768?1:0;q=e<<16>>16;e=0;while(1){a=K[M+e|0]|0;if(m&&(a&65535)===32768){a=32767;}else{a=(Q(a<<16>>16,q)|0)+16384>>>15;}K[M+e|0]=a;e=e+1|0;if(e>>>0<160){continue;}else{e=c<<16>0?1:0;}break;}}else{e=c<<16>0?1:0;}}a=K[M]|0;N[O+8|0]=0;N[O+7|0]=0;a=a<<16>>16;c=K[M+1|0]<<16>>16;m=K[M+2|0]<<16>>16;j=K[M+3|0]<<16>>16;l=K[M+4|0]<<16>>16;h=K[M+5|0]<<16>>16;g=K[M+6|0]<<16>>16;w=K[M+7|0]|0;k=w<<16>>16;q=(((((((Q(a,a)|0)+(Q(c,c)|0)|0)+(Q(m,m)|0)|0)+(Q(j,j)|0)|0)+(Q(l,l)|0)|0)+(Q(h,h)|0)|0)+(Q(g,g)|0)|0)+(Q(k,k)|0)|0;N[O]=q;s=(((Q(c,a)|0)+(Q(k+h|0,g)|0)|0)+(Q(h+j|0,l)|0)|0)+(Q(j+c|0,m)|0)|0;N[O+1|0]=s;t=(((Q(m,a)|0)+(Q(j,c)|0)|0)+(Q(k+j|0,h)|0)|0)+(Q(g+m|0,l)|0)|0;N[O+2|0]=t;u=((Q(h,m)|0)+(Q(k+c|0,l)|0)|0)+(Q(g+a|0,j)|0)|0;N[O+3|0]=u;j=(((Q(l,a)|0)+(Q(h,c)|0)|0)+(Q(g,m)|0)|0)+(Q(j,k)|0)|0;N[O+4|0]=j;l=((Q(h,a)|0)+(Q(g,c)|0)|0)+(Q(m,k)|0)|0;N[O+5|0]=l;h=(Q(a,g)|0)+(Q(k,c)|0)|0;N[O+6|0]=h;g=(N[O+7|0]|0)+(Q(k,a)|0)|0;N[O+7|0]=g;a=N[O+8|0]|0;m=7;c=8;while(1){k=m+1|0;y=K[M+k|0]|0;n=y<<16>>16;q=(Q(n,n)|0)+q|0;s=(Q(n,w<<16>>16)|0)+s|0;t=(Q(K[(M+m|0)+ -1|0]<<16>>16,n)|0)+t|0;u=(Q(K[(M+m|0)+ -2|0]<<16>>16,n)|0)+u|0;j=(Q(K[(M+m|0)+ -3|0]<<16>>16,n)|0)+j|0;l=(Q(K[(M+m|0)+ -4|0]<<16>>16,n)|0)+l|0;h=(Q(K[(M+m|0)+ -5|0]<<16>>16,n)|0)+h|0;g=(Q(K[(M+m|0)+ -6|0]<<16>>16,n)|0)+g|0;a=(Q(K[(M+m|0)+ -7|0]<<16>>16,n)|0)+a|0;c=c+1|0;if(c>>>0<160){w=y;m=k;continue;}break;}N[O+8|0]=a<<1;N[O+7|0]=g<<1;N[O+6|0]=h<<1;N[O+5|0]=l<<1;N[O+4|0]=j<<1;N[O+3|0]=u<<1;N[O+2|0]=t<<1;N[O+1|0]=s<<1;N[O]=q<<1;if(e){a=159;e=0;while(1){c=K[M+e|0]|0;K[M+e|0]=c<<16>>16<<o;if((a|0)>0){a=a-1|0;e=e+1|0;continue;}break;}}}function H(q,r,o,p){var a=0,h=0,g=0,e=0,l=0,j=0,c=null,k=0,m=0,n=0;a=q[r]|0;L1:if((a|0)===0){o[p]=0;o[p+1|0]=0;o[p+2|0]=0;o[p+3|0]=0;o[p+4|0]=0;o[p+5|0]=0;o[p+6|0]=0;o[p+7|0]=0;}else{g=(x(a)|0)<<16>>16;c=new Uint16Array(27);h=0;while(1){c[h]=a<<g>>>16;h=h+1|0;if(h>>>0<9){a=q[r+h|0]|0;continue;}break;}a=c[1]|0;c[10]=a;h=c[2]|0;c[11]=h;g=c[3]|0;c[12]=g;e=c[4]|0;c[13]=e;l=c[5]|0;c[14]=l;j=c[6]|0;c[15]=j;k=c[7]|0;c[16]=k;c[18]=c[0]|0;c[19]=a;c[20]=h;c[21]=g;c[22]=e;c[23]=l;c[24]=j;c[25]=k;c[26]=c[8]|0;g=1;h=0;while(1){if(a<<16<0){e=a===32768?32767|0:-a|0;}else{e=a;}l=c[18]|0;if(l<<16<e<<16){if(g>>>0<9){while(1){o[p+h|0]=0;g=g+1|0;if(g>>>0<9){h=h+1|0;continue;}break;}}else{break L1;}}else{k=l<<16>>16;if((e&65535)===0){e=0;}else{j=e<<16>>16;e=0;l=14;while(1){j=j<<1;e=e<<1;if((j|0)>=(k|0)){j=j-k|0;e=e+1|0;}m=l-1|0;if((l|0)!==0){l=m;continue;}break;}}e=a<<16>0?-e|0:e|0;o[p+h|0]=e;if((g|0)!==8){if(a===32768&&(e&65535)===32768){a=32767;}else{a=(Q(e<<16>>16,a<<16>>16)|0)+16384>>>15;}a=(a<<16>>16)+k|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}c[18]=a;if(g>>>0<=7){l=8-g|0;a=e;e=1;while(1){j=c[9+e|0]|0;if((j&65535)===32768&&(a&65535)===32768){a=32767;}else{a=(Q(a<<16>>16,j<<16>>16)|0)+16384>>>15;}k=e+1|0;m=c[18+k|0]|0;n=m<<16>>16;a=n+(a<<16>>16)|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}c[18+e|0]=a;a=o[p+h|0]|0;if((m&65535)===32768&&(a&65535)===32768){a=32767;}else{a=(Q(a<<16>>16,n)|0)+16384>>>15;}a=(a<<16>>16)+(j<<16>>16)|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}c[9+e|0]=a;if((e|0)<(l|0)){a=o[p+h|0]|0;e=k;continue;}break;}}g=g+1|0;if(g>>>0<9){a=c[19]|0;h=h+1|0;continue;}}}break;}}}function G(h,i){var g=0,e=0,a=0,c=0;e=1;g=0;while(1){L1:{L2:{c=h[i+g|0]|0;if(c<<16<0){a=-c|0;if((c&65535)===32768){a=32767;break L2;}}else{a=c;}if(a<<16<1449525248){a=a<<16>>16>>>1;break L1;}else{if(a<<16<2040135680){a=a+54477|0;break L1;}}}a=(a<<2)+26624|0;break L1;}h[i+g|0]=c<<16<0?-a|0:a|0;g=g+1|0;e=e+1|0;if(e>>>0<9){continue;}break;}}function F(e,f){var a=0,c=0;a=(Q(e[f]<<16>>16,40960)>>16)+256|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}a=a<<16>>16>>9;if((a|0)>31){a=63;}else{if((a|0)<-32){a=0;}else{a=a+32|0;}}e[f]=a;a=(Q(e[f+1|0]<<16>>16,40960)>>16)+256|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}a=a<<16>>16>>9;if((a|0)>31){a=63;}else{if((a|0)<-32){a=0;}else{a=a+32|0;}}e[f+1|0]=a;a=(Q(e[f+2|0]<<16>>16,40960)>>16)+2048|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}a=(a<<16>>16)+256|0;if((a|0)<-32768){a=32768;}else{a=(a|0)>32767?32767|0:a|0;}a=a<<16>>16>>9;if((a|0)>15){a=31;}else{if((a|0)<-16){a=0;}else{a=a+16|0;}}e[f+2|0]=a;a=(Q(e[f+3|0]<<16>>16,40960)>>16)-2560|0;if((a|0)<-32768){a=-32512;}else{a=(a|0)>32767?33023|0:(a<<16>>16)+256|0;}if((a|0)<-32768){a=-64;}else{a=(a|0)>32767?63|0:a<<16>>25|0;}if((a|0)>15){a=31;}else{if((a|0)<-16){a=0;}else{a=a+16|0;}}e[f+3|0]=a;a=(Q(e[f+4|0]<<16>>16,27928)>>16)+94|0;if((a|0)<-32768){a=0;}else{if((a|0)>32767){a=15;}else{a=(a<<16>>16)+256|0;if((a|0)<-32768){a=0;}else{c=a<<16>>25;if((a|0)>32767||(c|0)>7){a=15;}else{if((c|0)<-8){a=0;}else{a=c+8|0;}}}}}e[f+4|0]=a;a=(Q(e[f+5|0]<<16>>16,30720)>>16)-1792|0;if((a|0)<-32768){a=0;}else{if((a|0)>32767){a=15;}else{a=(a<<16>>16)+256|0;if((a|0)<-32768){a=0;}else{c=a<<16>>25;if((a|0)>32767||(c|0)>7){a=15;}else{if((c|0)<-8){a=0;}else{a=c+8|0;}}}}}e[f+5|0]=a;a=(Q(e[f+6|0]<<16>>16,17068)>>16)-341|0;if((a|0)<-32768){a=0;}else{if((a|0)>32767){a=7;}else{a=(a<<16>>16)+256|0;if((a|0)<-32768){a=0;}else{c=a<<16>>25;if((a|0)>32767||(c|0)>3){a=7;}else{if((c|0)<-4){a=0;}else{a=c+4|0;}}}}}e[f+6|0]=a;a=(Q(e[f+7|0]<<16>>16,18072)>>16)-1144|0;if((a|0)<-32768){e[f+7|0]=0;return;}if((a|0)>32767){e[f+7|0]=7;return;}a=(a<<16>>16)+256|0;if((a|0)<-32768){e[f+7|0]=0;return;}c=a<<16>>25;if((a|0)>32767||(c|0)>3){e[f+7|0]=7;return;}if((c|0)<-4){e[f+7|0]=0;return;}e[f+7|0]=c+4|0;}function E(c,d,a,b){var e=null;e=new Int32Array(9);I(c,d,e,0);H(e,0,a,b);G(a,b);F(a,b);}function D(){var a=0,c=null;c=new Uint16Array(328);a=0;while(1){c[a]=J[a]|0;a=a+1|0;if(a>>>0<320){continue;}break;}E(c,0,c,320);}function P(c,a){D();return 0|0;}var J=new Uint16Array([81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159,81,10854,1893,55245,7614,29718,20475,36321,46587,35730,33519,1596,15744,62448,48123,43413,6798,52260,3819,49263,63963,53013,38433,65343,39948,4698,35100,15264,64143,11418,11370,4986,7869,63633,9123,33810,40299,51381,17982,32427,53097,49605,43914,7896,1689,28113,3615,22131,59964,45426,12387,9177,40992,12480,21546,47694,51891,20277,9987,17652,54072,48210,54984,38436,207,27612,2517,7167,35802,43095,30039,63168,12813,300,39981,9087,29022,58977,45225,51189,57981,43827,61860,35454,62346,34557,8580,27126,3414,60933,43233,48393,13788,64440,50919,22071,51984,32646,16689,57063,52803,10503,20745,6696,38694,34521,3792,45672,45105,35229,32421,52299,9006,18249,2403,57540,50709,59676,7122,29817,33642,17955,28836,34239,31821,38034,12276,59949,43431,9192,42987,15675,53271,7212,41787,52680,59679,7521,17349,13773,62445,47724,55881,26667,7902,2487,3177,29412,45312,62760,24084,57573,55098,53598,50703,58878,32058,4020,10461,15159]);var v=new Uint8Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);P();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");