let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var M=Math.imul;var N=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function x(j){var b=0,a=0,f=0,i=0,h=0,v=0,t=0,s=0,r=0,q=0,p=0,o=0,k=0;L1:{L2:{C(j);if((j|0)===128256||(j|0)===192256||(j|0)===256256){a=8;b=4;}else if((j|0)===256192){n=4;m=6;break L2;}else if((j|0)===256128){n=4;m=4;b=4;break L1;}else if((j|0)===192128){n=2;m=4;b=4;break L1;}else if((j|0)===128128){n=0;m=4;b=4;break L1;}else if((j|0)===128192||(j|0)===192192){a=6;b=2;}else{b=4;break L1;}n=b;m=a;if((j|0)===256256||(j|0)===192256||(j|0)===128256){b=8;break L1;}else if((j|0)!==128192&&(j|0)!==192192&&(j|0)!==256192&&(j|0)!==192192&&(j|0)!==256192&&(j|0)!==256192){b=4;break L1;}}b=6;break L1;}a=0;while(1){f=a<<2;e[f]=(e[f]|0)^(g[a]|0);e[f+1|0]=(e[f+1|0]|0)^(g[a+120|0]|0);e[f+2|0]=(e[f+2|0]|0)^(g[a+240|0]|0);e[f+3|0]=(e[f+3|0]|0)^(g[a+360|0]|0);a=a+1|0;if(a>>>0<b>>>0){continue;}break;}b=n|0;B(m|0);if((b+9|0)<1){b=1;}else{a=1;while(1){G(m|0,a);f=n|0;B(m|0);b=a+1|0;if((a|0)<(f+9|0)){a=b;continue;}break;}}if((j|0)===128192||(j|0)===192192||(j|0)===256192){a=6;}else if((j|0)===256256||(j|0)===192256||(j|0)===128256){a=8;}else{a=4;}f=M(a,b)|0;b=0;while(1){i=b+f|0;h=b<<2;e[h]=(e[h]|0)^(g[i]|0);e[h+1|0]=(e[h+1|0]|0)^(g[i+120|0]|0);e[h+2|0]=(e[h+2|0]|0)^(g[i+240|0]|0);e[h+3|0]=(e[h+3|0]|0)^(g[i+360|0]|0);b=b+1|0;if(b>>>0<a>>>0){continue;}break;}b=e[0]|0;a=u|0;f=e[1]|0;i=e[2]|0;h=e[3]|0;v=e[4]|0;t=e[5]|0;s=e[6]|0;r=e[7]|0;q=e[8]|0;p=e[9]|0;o=e[10]|0;k=e[11]|0;u=((((((((((((((((((b|0)!==57?1:0)?1:0)+a|0)+(((f|0)!==37?1:0)?1:0)|0)+(((i|0)!==132?1:0)?1:0)|0)+(((h|0)!==29?1:0)?1:0)|0)+(((v|0)!==2?1:0)?1:0)|0)+(((t|0)!==220?1:0)?1:0)|0)+(((s|0)!==9?1:0)?1:0)|0)+(((r|0)!==251?1:0)?1:0)|0)+(((q|0)!==220?1:0)?1:0)|0)+(((p|0)!==17?1:0)?1:0)|0)+(((o|0)!==133?1:0)?1:0)|0)+(((k|0)!==151?1:0)?1:0)|0)+(((e[12]|0)!==25?1:0)?1:0)|0)+(((e[13]|0)!==106?1:0)?1:0)|0)+(((e[14]|0)!==11?1:0)?1:0)|0)+(((e[15]|0)!==50?1:0)?1:0)|0;}function C(o){var a=0,b=0,i=0,f=0,h=0,k=0,p=0,q=0,j=0;L1:{if((o|0)===256256){i=8;b=8;a=15;}else if((o|0)===256192){i=8;b=6;a=15;}else if((o|0)===256128){i=8;b=4;a=15;}else if((o|0)===192256){i=6;b=8;a=15;}else if((o|0)===192192){i=6;b=6;a=13;}else if((o|0)===192128){i=6;b=4;a=13;}else if((o|0)===128256){i=4;b=8;a=15;}else if((o|0)===128192){i=4;b=6;a=13;}else if((o|0)===128128){i=4;b=4;a=11;}else{break L1;}f=0;while(1){h=f<<2;g[f]=l[h]|0;g[f+120|0]=l[h+1|0]|0;g[f+240|0]=l[h+2|0]|0;g[f+360|0]=l[h+3|0]|0;f=f+1|0;if(f>>>0<i>>>0){continue;}break;}p=M(b,a)|0;if(i>>>0<p>>>0){q=i>>>0>6?1:0;a=i;while(1){j=(a>>>0)%(i>>>0)|0;if((j|0)===0){b=g[a+119|0]|0;k=(H[((a>>>0)/(i>>>0)|0)-1|0]|0)^(c[((b|0)/16<<4)+((b|0)%16|0)|0]|0);b=g[a+239|0]|0;h=c[((b|0)/16<<4)+((b|0)%16|0)|0]|0;b=g[a+359|0]|0;f=c[((b|0)/16<<4)+((b|0)%16|0)|0]|0;b=g[a-1|0]|0;b=c[((b|0)/16<<4)+((b|0)%16|0)|0]|0;}else{k=g[a-1|0]|0;h=g[a+119|0]|0;f=g[a+239|0]|0;b=g[a+359|0]|0;if(q&&(j|0)===4){k=c[((k|0)/16<<4)+((k|0)%16|0)|0]|0;h=c[((h|0)/16<<4)+((h|0)%16|0)|0]|0;f=c[((f|0)/16<<4)+((f|0)%16|0)|0]|0;b=c[((b|0)/16<<4)+((b|0)%16|0)|0]|0;}}j=a-i|0;g[a]=(g[j]|0)^k;g[a+120|0]=(g[j+120|0]|0)^h;g[a+240|0]=(g[j+240|0]|0)^f;g[a+360|0]=(g[j+360|0]|0)^b;a=a+1|0;if(a>>>0<p>>>0){continue;}break;}}}}function B(f){var a=0,b=0;switch(f|0){case 8:{a=e[1]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[5]|0;e[1]=c[(b& -16)+(b&15)|0]|0;b=e[9]|0;e[5]=c[(b& -16)+(b&15)|0]|0;b=e[13]|0;e[9]=c[(b& -16)+(b&15)|0]|0;b=e[17]|0;e[13]=c[(b& -16)+(b&15)|0]|0;b=e[21]|0;e[17]=c[(b& -16)+(b&15)|0]|0;b=e[25]|0;e[21]=c[(b& -16)+(b&15)|0]|0;b=e[29]|0;e[25]=c[(b& -16)+(b&15)|0]|0;e[29]=a;a=e[2]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[14]|0;e[2]=c[(b& -16)+(b&15)|0]|0;b=e[26]|0;e[14]=c[(b& -16)+(b&15)|0]|0;b=e[6]|0;e[26]=c[(b& -16)+(b&15)|0]|0;b=e[18]|0;e[6]=c[(b& -16)+(b&15)|0]|0;b=e[30]|0;e[18]=c[(b& -16)+(b&15)|0]|0;b=e[10]|0;e[30]=c[(b& -16)+(b&15)|0]|0;b=e[22]|0;e[10]=c[(b& -16)+(b&15)|0]|0;e[22]=a;a=e[3]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[19]|0;e[3]=c[(b& -16)+(b&15)|0]|0;e[19]=a;a=e[7]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[23]|0;e[7]=c[(b& -16)+(b&15)|0]|0;e[23]=a;a=e[11]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[27]|0;e[11]=c[(b& -16)+(b&15)|0]|0;e[27]=a;a=e[15]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[31]|0;e[15]=c[(b& -16)+(b&15)|0]|0;e[31]=a;a=e[0]|0;e[0]=c[(a& -16)+(a&15)|0]|0;a=e[4]|0;e[4]=c[(a& -16)+(a&15)|0]|0;a=e[8]|0;e[8]=c[(a& -16)+(a&15)|0]|0;a=e[12]|0;e[12]=c[(a& -16)+(a&15)|0]|0;a=e[16]|0;e[16]=c[(a& -16)+(a&15)|0]|0;a=e[20]|0;e[20]=c[(a& -16)+(a&15)|0]|0;a=e[24]|0;e[24]=c[(a& -16)+(a&15)|0]|0;a=e[28]|0;e[28]=c[(a& -16)+(a&15)|0]|0;break;}case 6:{a=e[1]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[5]|0;e[1]=c[(b& -16)+(b&15)|0]|0;b=e[9]|0;e[5]=c[(b& -16)+(b&15)|0]|0;b=e[13]|0;e[9]=c[(b& -16)+(b&15)|0]|0;b=e[17]|0;e[13]=c[(b& -16)+(b&15)|0]|0;b=e[21]|0;e[17]=c[(b& -16)+(b&15)|0]|0;e[21]=a;a=e[2]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[10]|0;e[2]=c[(b& -16)+(b&15)|0]|0;b=e[18]|0;e[10]=c[(b& -16)+(b&15)|0]|0;e[18]=a;a=e[6]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[14]|0;e[6]=c[(b& -16)+(b&15)|0]|0;b=e[22]|0;e[14]=c[(b& -16)+(b&15)|0]|0;e[22]=a;a=e[3]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[15]|0;e[3]=c[(b& -16)+(b&15)|0]|0;e[15]=a;a=e[7]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[19]|0;e[7]=c[(b& -16)+(b&15)|0]|0;e[19]=a;a=e[11]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[23]|0;e[11]=c[(b& -16)+(b&15)|0]|0;e[23]=a;a=e[0]|0;e[0]=c[(a& -16)+(a&15)|0]|0;a=e[4]|0;e[4]=c[(a& -16)+(a&15)|0]|0;a=e[8]|0;e[8]=c[(a& -16)+(a&15)|0]|0;a=e[12]|0;e[12]=c[(a& -16)+(a&15)|0]|0;a=e[16]|0;e[16]=c[(a& -16)+(a&15)|0]|0;a=e[20]|0;e[20]=c[(a& -16)+(a&15)|0]|0;break;}case 4:{a=e[1]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[5]|0;e[1]=c[(b& -16)+(b&15)|0]|0;b=e[9]|0;e[5]=c[(b& -16)+(b&15)|0]|0;b=e[13]|0;e[9]=c[(b& -16)+(b&15)|0]|0;e[13]=a;a=e[2]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[10]|0;e[2]=c[(b& -16)+(b&15)|0]|0;e[10]=a;a=e[6]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[14]|0;e[6]=c[(b& -16)+(b&15)|0]|0;e[14]=a;a=e[3]|0;a=c[(a& -16)+(a&15)|0]|0;b=e[15]|0;e[3]=c[(b& -16)+(b&15)|0]|0;b=e[11]|0;e[15]=c[(b& -16)+(b&15)|0]|0;b=e[7]|0;e[11]=c[(b& -16)+(b&15)|0]|0;e[7]=a;a=e[0]|0;e[0]=c[(a& -16)+(a&15)|0]|0;a=e[4]|0;e[4]=c[(a& -16)+(a&15)|0]|0;a=e[8]|0;e[8]=c[(a& -16)+(a&15)|0]|0;a=e[12]|0;e[12]=c[(a& -16)+(a&15)|0]|0;break;}default:{}}}function G(I,J){var f=0,b=null,h=0,a=0,s=0,r=0,k=0,q=0,i=0,j=0,D=0,o=0,v=0,p=0,t=0;b=new Int32Array(32);if((I|0)>0){h=M(J,I)|0;f=0;while(1){a=f<<2;s=e[a]|0;r=s<<1;k=a+1|0;q=e[k]|0;i=q<<1;j=i^q;D=a+2|0;o=e[D]|0;v=a+3|0;p=e[v]|0;t=f+h|0;b[a]=p^o^(g[t]|0)^((r& -256|0)===256?r^283|0:r|0)^((j& -256|0)===256?j^283|0:j|0);a=o<<1;j=a^o;b[k]=p^s^(g[t+120|0]|0)^((i& -256|0)===256?i^283|0:i|0)^((j& -256|0)===256?j^283|0:j|0);k=p<<1;i=k^p;b[D]=q^s^(g[t+240|0]|0)^((a& -256|0)===256?a^283|0:a|0)^((i& -256|0)===256?i^283|0:i|0);a=r^s;b[v]=o^q^((a& -256|0)===256?a^283|0:a|0)^(g[t+360|0]|0)^((k& -256|0)===256?k^283|0:k|0);f=f+1|0;if((f|0)<(I|0)){continue;}else{f=0;}break;}while(1){h=f<<2;e[h]=b[h]|0;a=h+1|0;e[a]=b[a]|0;a=h+2|0;e[a]=b[a]|0;h=h+3|0;e[h]=b[h]|0;f=f+1|0;if((f|0)<(I|0)){continue;}break;}}}function w(j){var a=0,b=0,f=0,i=0,h=0,v=0,t=0,s=0,r=0,q=0,p=0,o=0,k=0;L1:{L2:{L3:{C(j);if((j|0)===256256){n=14;m=8;a=14;break L2;}else if((j|0)===256192){n=14;m=6;a=14;break L3;}else if((j|0)===256128){n=14;m=4;b=4;a=14;break L1;}else if((j|0)===128256||(j|0)===192256){n=14;m=8;a=14;}else if((j|0)===192128){n=12;m=4;b=4;a=12;break L1;}else if((j|0)===128192||(j|0)===192192){n=12;m=6;a=12;}else if((j|0)===128128){n=10;m=4;b=4;a=10;break L1;}else{a=n|0;}if((j|0)===256192||(j|0)===128192||(j|0)===192192){break L3;}else if((j|0)===192256||(j|0)===128256){break L2;}else{b=4;break L1;}}b=6;break L1;}b=8;break L1;}f=M(b,a)|0;a=0;while(1){i=a+f|0;h=a<<2;e[h]=(e[h]|0)^(g[i]|0);e[h+1|0]=(e[h+1|0]|0)^(g[i+120|0]|0);e[h+2|0]=(e[h+2|0]|0)^(g[i+240|0]|0);e[h+3|0]=(e[h+3|0]|0)^(g[i+360|0]|0);a=a+1|0;if(a>>>0<b>>>0){continue;}break;}A(m|0);a=n|0;if((a|0)>1){while(1){a=a-1|0;F(m|0,a);A(m|0);if((a|0)>1){continue;}break;}}if((j|0)===128192||(j|0)===192192||(j|0)===256192){a=6;}else if((j|0)===256256||(j|0)===192256||(j|0)===128256){a=8;}else{a=4;}b=0;while(1){f=b<<2;e[f]=(e[f]|0)^(g[b]|0);e[f+1|0]=(e[f+1|0]|0)^(g[b+120|0]|0);e[f+2|0]=(e[f+2|0]|0)^(g[b+240|0]|0);e[f+3|0]=(e[f+3|0]|0)^(g[b+360|0]|0);b=b+1|0;if(b>>>0<a>>>0){continue;}break;}a=e[0]|0;b=u|0;f=e[1]|0;i=e[2]|0;h=e[3]|0;v=e[4]|0;t=e[5]|0;s=e[6]|0;r=e[7]|0;q=e[8]|0;p=e[9]|0;o=e[10]|0;k=e[11]|0;u=((((((((((((((((((a|0)!==50?1:0)?1:0)+b|0)+(((f|0)!==67?1:0)?1:0)|0)+(((i|0)!==246?1:0)?1:0)|0)+(((h|0)!==168?1:0)?1:0)|0)+(((v|0)!==136?1:0)?1:0)|0)+(((t|0)!==90?1:0)?1:0)|0)+(((s|0)!==48?1:0)?1:0)|0)+(((r|0)!==141?1:0)?1:0)|0)+(((q|0)!==49?1:0)?1:0)|0)+(((p|0)!==49?1:0)?1:0)|0)+(((o|0)!==152?1:0)?1:0)|0)+(((k|0)!==162?1:0)?1:0)|0)+(((e[12]|0)!==224?1:0)?1:0)|0)+(((e[13]|0)!==55?1:0)?1:0)|0)+(((e[14]|0)!==7?1:0)?1:0)|0)+(((e[15]|0)!==52?1:0)?1:0)|0;}function A(f){var a=0,b=0;switch(f|0){case 8:{a=e[29]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[25]|0;e[29]=d[(b& -16)+(b&15)|0]|0;b=e[21]|0;e[25]=d[(b& -16)+(b&15)|0]|0;b=e[17]|0;e[21]=d[(b& -16)+(b&15)|0]|0;b=e[13]|0;e[17]=d[(b& -16)+(b&15)|0]|0;b=e[9]|0;e[13]=d[(b& -16)+(b&15)|0]|0;b=e[5]|0;e[9]=d[(b& -16)+(b&15)|0]|0;b=e[1]|0;e[5]=d[(b& -16)+(b&15)|0]|0;e[1]=a;a=e[30]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[18]|0;e[30]=d[(b& -16)+(b&15)|0]|0;b=e[6]|0;e[18]=d[(b& -16)+(b&15)|0]|0;b=e[26]|0;e[6]=d[(b& -16)+(b&15)|0]|0;b=e[14]|0;e[26]=d[(b& -16)+(b&15)|0]|0;b=e[2]|0;e[14]=d[(b& -16)+(b&15)|0]|0;b=e[22]|0;e[2]=d[(b& -16)+(b&15)|0]|0;b=e[10]|0;e[22]=d[(b& -16)+(b&15)|0]|0;e[10]=a;a=e[31]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[15]|0;e[31]=d[(b& -16)+(b&15)|0]|0;e[15]=a;a=e[27]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[11]|0;e[27]=d[(b& -16)+(b&15)|0]|0;e[11]=a;a=e[23]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[7]|0;e[23]=d[(b& -16)+(b&15)|0]|0;e[7]=a;a=e[19]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[3]|0;e[19]=d[(b& -16)+(b&15)|0]|0;e[3]=a;a=e[0]|0;e[0]=d[(a& -16)+(a&15)|0]|0;a=e[4]|0;e[4]=d[(a& -16)+(a&15)|0]|0;a=e[8]|0;e[8]=d[(a& -16)+(a&15)|0]|0;a=e[12]|0;e[12]=d[(a& -16)+(a&15)|0]|0;a=e[16]|0;e[16]=d[(a& -16)+(a&15)|0]|0;a=e[20]|0;e[20]=d[(a& -16)+(a&15)|0]|0;a=e[24]|0;e[24]=d[(a& -16)+(a&15)|0]|0;a=e[28]|0;e[28]=d[(a& -16)+(a&15)|0]|0;break;}case 6:{a=e[21]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[17]|0;e[21]=d[(b& -16)+(b&15)|0]|0;b=e[13]|0;e[17]=d[(b& -16)+(b&15)|0]|0;b=e[9]|0;e[13]=d[(b& -16)+(b&15)|0]|0;b=e[5]|0;e[9]=d[(b& -16)+(b&15)|0]|0;b=e[1]|0;e[5]=d[(b& -16)+(b&15)|0]|0;e[1]=a;a=e[22]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[14]|0;e[22]=d[(b& -16)+(b&15)|0]|0;b=e[6]|0;e[14]=d[(b& -16)+(b&15)|0]|0;e[6]=a;a=e[18]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[10]|0;e[18]=d[(b& -16)+(b&15)|0]|0;b=e[2]|0;e[10]=d[(b& -16)+(b&15)|0]|0;e[2]=a;a=e[15]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[3]|0;e[15]=d[(b& -16)+(b&15)|0]|0;e[3]=a;a=e[19]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[7]|0;e[19]=d[(b& -16)+(b&15)|0]|0;e[7]=a;a=e[23]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[11]|0;e[23]=d[(b& -16)+(b&15)|0]|0;e[11]=a;a=e[0]|0;e[0]=d[(a& -16)+(a&15)|0]|0;a=e[4]|0;e[4]=d[(a& -16)+(a&15)|0]|0;a=e[8]|0;e[8]=d[(a& -16)+(a&15)|0]|0;a=e[12]|0;e[12]=d[(a& -16)+(a&15)|0]|0;a=e[16]|0;e[16]=d[(a& -16)+(a&15)|0]|0;a=e[20]|0;e[20]=d[(a& -16)+(a&15)|0]|0;break;}case 4:{a=e[13]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[9]|0;e[13]=d[(b& -16)+(b&15)|0]|0;b=e[5]|0;e[9]=d[(b& -16)+(b&15)|0]|0;b=e[1]|0;e[5]=d[(b& -16)+(b&15)|0]|0;e[1]=a;a=e[14]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[6]|0;e[14]=d[(b& -16)+(b&15)|0]|0;e[6]=a;a=e[2]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[10]|0;e[2]=d[(b& -16)+(b&15)|0]|0;e[10]=a;a=e[15]|0;a=d[(a& -16)+(a&15)|0]|0;b=e[3]|0;e[15]=d[(b& -16)+(b&15)|0]|0;b=e[7]|0;e[3]=d[(b& -16)+(b&15)|0]|0;b=e[11]|0;e[7]=d[(b& -16)+(b&15)|0]|0;e[11]=a;a=e[0]|0;e[0]=d[(a& -16)+(a&15)|0]|0;a=e[4]|0;e[4]=d[(a& -16)+(a&15)|0]|0;a=e[8]|0;e[8]=d[(a& -16)+(a&15)|0]|0;a=e[12]|0;e[12]=d[(a& -16)+(a&15)|0]|0;break;}default:{}}}function F(v,t){var b=0,a=0,q=null,f=0,p=0,o=0,k=0,s=0,j=0,r=0,i=0,h=0;q=new Int32Array(32);if((v|0)>0){a=M(t,v)|0;b=0;while(1){f=b+a|0;p=b<<2;e[p]=(e[p]|0)^(g[f]|0);e[p+1|0]=(e[p+1|0]|0)^(g[f+120|0]|0);e[p+2|0]=(e[p+2|0]|0)^(g[f+240|0]|0);e[p+3|0]=(e[p+3|0]|0)^(g[f+360|0]|0);b=b+1|0;if((b|0)<(v|0)){continue;}else{b=0;}break;}while(1){f=b<<2;a=0;while(1){p=a+f|0;o=e[p]|0;k=o<<1;k=(((k& -256|0)===256?k^283|0:k|0)^o)<<1;o=(((k& -256|0)===256?k^283|0:k|0)^o)<<1;k=a+1|0;s=e[(k&3)+f|0]|0;j=s<<1;j=((j& -256|0)===256?j^283|0:j|0)<<1;j=(((j& -256|0)===256?j^283|0:j|0)^s)<<1;r=e[(a+2&3)+f|0]|0;i=r<<1;i=(((i& -256|0)===256?i^283|0:i|0)^r)<<1;i=((i& -256|0)===256?i^283|0:i|0)<<1;a=e[(a+3&3)+f|0]|0;h=a<<1;h=((h& -256|0)===256?h^283|0:h|0)<<1;h=((h& -256|0)===256?h^283|0:h|0)<<1;q[p]=r^s^a^((j& -256|0)===256?j^283|0:j|0)^((o& -256|0)===256?o^283|0:o|0)^((h& -256|0)===256?h^283|0:h|0)^((i& -256|0)===256?i^283|0:i|0);if(k>>>0<4){a=k;continue;}break;}b=b+1|0;if((b|0)<(v|0)){continue;}else{b=0;}break;}while(1){a=b<<2;e[a]=q[a]|0;f=a+1|0;e[f]=q[f]|0;f=a+2|0;e[f]=q[f]|0;a=a+3|0;e[a]=q[a]|0;b=b+1|0;if((b|0)<(v|0)){continue;}break;}}}function E(){e[0]=50;e[1]=67;e[2]=246;e[3]=168;e[4]=136;e[5]=90;e[6]=48;e[7]=141;e[8]=49;e[9]=49;e[10]=152;e[11]=162;e[12]=224;e[13]=55;e[14]=7;e[15]=52;l[0]=43;l[1]=126;l[2]=21;l[3]=22;l[4]=40;l[5]=174;l[6]=210;l[7]=166;l[8]=171;l[9]=247;l[10]=21;l[11]=136;l[12]=9;l[13]=207;l[14]=79;l[15]=60;x(256256);w(256256);x(256256);w(256256);x(128128);w(128128);}function K(b,a){u=0;E();return 0|0;}var u=0;var e=new Int32Array(32);var l=new Int32Array(32);var n=0;var m=0;var g=new Int32Array(480);var d=new Int32Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]);var c=new Int32Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]);var H=new Int32Array([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145]);K();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");