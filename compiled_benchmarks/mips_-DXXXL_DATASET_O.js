let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var v=Math.imul;var w=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function r(){var j=0,d=0,b=0,c=0,a=null,g=0,h=0,f=0,e=0,i=0,q=0,p=0,o=0,n=0,m=0,l=0;k=0;a=new Int32Array(96);a[0]=0;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=0;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=0;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=0;a[16]=0;a[17]=0;a[18]=0;a[19]=0;a[20]=0;a[21]=0;a[22]=0;a[23]=0;a[24]=0;a[25]=0;a[26]=0;a[27]=0;a[28]=0;a[30]=0;a[31]=0;a[29]=2147479548;j=0;while(1){a[32+j|0]=t[j]|0;j=j+1|0;if(j>>>0<64){continue;}else{c=0;b=0;d=4194304;j=0;}break;}L1:{L2:{while(1){L3:{g=s[d>>>2&63]|0;h=g>>>26;f=d+4|0;switch(h|0){case 3:{a[31]=f;d=g<<2&268435452;break;}case 2:{d=g<<2&268435452;break;}case 0:{d=g>>>21&31;h=g>>>16&31;e=g>>>11&31;i=g>>>6&31;switch(g&63|0){case 8:{d=a[d]|0;break L3;break;}case 43:{a[e]=(a[d]>>>0<a[h]>>>0?1:0)?1:0;d=f;break L3;break;}case 42:{a[e]=((a[d]|0)<(a[h]|0)?1:0)?1:0;d=f;break L3;break;}case 6:{a[e]=a[h]>>(a[d]|0);d=f;break L3;break;}case 4:{a[e]=a[h]<<(a[d]|0);d=f;break L3;break;}case 2:{a[e]=a[h]>>i;d=f;break L3;break;}case 0:{a[e]=a[h]<<i;d=f;break L3;break;}case 38:{a[e]=(a[h]|0)^(a[d]|0);d=f;break L3;break;}case 37:{a[e]=a[h]|a[d];d=f;break L3;break;}case 36:{a[e]=a[h]&a[d];d=f;break L3;break;}case 18:{a[e]=b;d=f;break L3;break;}case 16:{a[e]=c;d=f;break L3;break;}case 25:{d=a[d]|0;b=a[h]|0;c=b>>>16;g=d>>>16;b=b&65535;h=v(b,g)|0;d=d&65535;e=v(c,d)|0;i=h+e|0;d=v(b,d)|0;b=i<<16;c=(((i>>>16)+(v(c,g)|0)|0)+(((h>>>0>(e^ -1)>>>0?1:0)?1:0)<<16)|0)+((b>>>0>(d^ -1)>>>0?1:0)?1:0)|0;b=b+d|0;d=f;break L3;break;}case 24:{d=a[d]|0;b=a[h]|0;c=d>>>16;g=b>>31;h=g&65535;e=b>>>16;i=d>>31;q=i&65535;d=d&65535;b=b&65535;p=v(b,c)|0;o=v(e,d)|0;n=p+o|0;m=v(b,d)|0;l=n<<16;c=(((((v(e,c)|0)+(v(q,b)|0)|0)+(v(h,d)|0)|0)+(n>>>16)|0)+((l>>>0>(m^ -1)>>>0?1:0)?1:0)|0)+(((((v(q,e)|0)+(v(i>>>16,b)|0)|0)+(v(g>>>16,d)|0)|0)+(v(h,c)|0)|0)+((p>>>0>(o^ -1)>>>0?1:0)?1:0)<<16)|0;b=l+m|0;d=f;break L3;break;}case 35:{a[e]=(a[d]|0)-(a[h]|0)|0;d=f;break L3;break;}case 33:{a[e]=(a[h]|0)+(a[d]|0)|0;d=f;break;}default:{break L2;}}break;}default:{e=g>>>21&31;i=g>>>16&31;switch(h|0){case 11:{a[i]=(a[e]>>>0<(g&65535)>>>0?1:0)?1:0;d=f;break;}case 10:{a[i]=((a[e]|0)<(g<<16>>16|0)?1:0)?1:0;d=f;break;}case 1:{if((a[e]|0)>-1){d=(g<<16>>16<<2)+d|0;}else{d=f;break L3;}break;}case 5:{if((a[e]|0)===(a[i]|0)){d=f;break L3;}else{d=(g<<16>>16<<2)+d|0;}break;}case 4:{if((a[e]|0)===(a[i]|0)){d=(g<<16>>16<<2)+d|0;}else{d=f;break L3;}break;}case 15:{a[i]=g<<16;d=f;break;}case 43:{a[32+((a[e]|0)+g>>>2&63)|0]=a[i]|0;d=f;break;}case 35:{a[i]=a[32+((a[e]|0)+g>>>2&63)|0]|0;d=f;break;}case 14:{a[i]=(a[e]|0)^g&65535;d=f;break;}case 13:{a[i]=a[e]|g&65535;d=f;break;}case 12:{a[i]=g&65535&a[e];d=f;break;}case 9:{a[i]=(a[e]|0)+(g<<16>>16)|0;d=f;break;}default:{break L2;}}break;}}}a[0]=0;j=j+1|0;if((d|0)===0){break L1;}else{continue;}break;}}a[0]=0;j=j+1|0;break L1;}d=a[32]|0;b=a[33]|0;c=a[34]|0;g=a[35]|0;h=a[36]|0;f=a[37]|0;k=(((a[39]|0)!==38?1:0)?1:0)+((((a[38]|0)!==22?1:0)?1:0)+((((f|0)!==11?1:0)?1:0)+((((h|0)!==5?1:0)?1:0)+((((g|0)!==3?1:0)?1:0)+((((c|0)!==0?1:0)?1:0)+((((b|0)!==-9?1:0)?1:0)+((((d|0)!==-17?1:0)?1:0)+(((j|0)!==611?1:0)?1:0)|0)|0)|0)|0)|0)|0)|0)|0;}function u(c,b){var a=0;a=0;while(1){r();a=a+1|0;if(a>>>0<16){continue;}break;}return 0|0;}var k=0;var t=new Int32Array([22,5, -9,3, -17,38,0,11]);var s=new Int32Array([ -1885077504,665124868,614858756,266368,12726305,202375190,0,872546314,12,1006702593,875036672,280704,17385505, -1926627328,350336,17520673, -1922301952,25847850,295698435, -1389625344, -1385562112,65011720,666763252, -1346437112, -1347354620, -1347420160,605028352,705167368,285212683,638648321,707264520,285212678,637796352,639959040,202375177,640745473,135266334,638582785,135266331, -1883308024, -1884225532, -1884291072,666697740,65011720]);u();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");