let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var ad=Math.imul;var ae=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function aa(i,h,f,d,e){var c=0,a=0;if((f|0)===0){a=h;c=i;}else{if((f|0)<64){c=h|i;a=-f&63;a=(((((a|0)===0?c|0:(a>>>0>31?h<<(a-32|0)|0:c<<a|h>>>(32-a|0)|0)|0)|0)!==0?1:0)?1:0)|(f>>>0>31?i>>>(f-32|0)|0:i<<(32-f|0)|h>>>f|0);c=f>>>0>31?0|0:i>>>f|0;}else{a=((h|i|0)!==0?1:0)?1:0;c=0;}}d[e]=c;d[e+1|0]=a;}function H(O,P,Q,R,S,T,U,V){var h=0,d=0,a=0,C=0,c=0,A=0,y=0,w=0,B=0,s=0,f=0,j=0,t=0,K=0,M=0,W=0,r=0,o=0,i=0,n=0,m=0,k=0,N=0,v=0;h=R>>>16;d=P>>>16;a=R&65535;C=ad(a,d)|0;c=P&65535;A=ad(h,c)|0;y=C+A|0;w=ad(a,c)|0;B=y<<16;s=Q>>>16;f=Q&65535;j=ad(f,d)|0;t=ad(s,c)|0;K=j+t|0;c=ad(f,c)|0;M=K<<16;W=M+c|0;r=O>>>16;o=ad(a,r)|0;i=O&65535;n=ad(h,i)|0;m=o+n|0;a=ad(a,i)|0;k=m<<16;o=(((m>>>16)+(ad(h,r)|0)|0)+(((o>>>0>(n^ -1)>>>0?1:0)?1:0)<<16)|0)+((k>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=k+a|0;n=ad(f,r)|0;m=ad(s,i)|0;k=n+m|0;f=ad(f,i)|0;i=k<<16;N=i+f|0;v=a+W|0;c=((((K>>>16)+(ad(s,d)|0)|0)+(((j>>>0>(t^ -1)>>>0?1:0)?1:0)<<16)|0)+((M>>>0>(c^ -1)>>>0?1:0)?1:0)|0)+((W>>>0>(a^ -1)>>>0?1:0)?1:0)|0;j=c+o|0;t=j+N|0;h=((((y>>>16)+(ad(h,d)|0)|0)+(((C>>>0>(A^ -1)>>>0?1:0)?1:0)<<16)|0)+((B>>>0>(w^ -1)>>>0?1:0)?1:0)|0)+v|0;d=(h>>>0<v>>>0?1:0)?1:0;U[V]=h;U[V+1|0]=B+w|0;S[T]=((((((k>>>16)+(ad(s,r)|0)|0)+(((n>>>0>(m^ -1)>>>0?1:0)?1:0)<<16)|0)+((i>>>0>(f^ -1)>>>0?1:0)?1:0)|0)+((N>>>0>(j^ -1)>>>0?1:0)?1:0)|0)+((t>>>0>(d^ -1)>>>0?1:0)?1:0)|0)+((j>>>0<o>>>0||v>>>0<a>>>0&&(c|0)===0?1:0)?1:0)|0;S[T+1|0]=t+d|0;}function $(w,x,y,A,B,C){var c=0,a=0,h=0,j=0,k=0,f=0,i=0,d=null,s=0,n=0,r=0,t=0,m=0,o=0,v=0;a=y&1048575;d=new Int32Array(6);d[0]=a;d[1]=A;h=y>>>20&2047;d[2]=h;c=B&1048575;d[3]=c;d[4]=C;j=B>>>20;k=j&2047;d[5]=k;s=(B^y)>>>31;L1:if((h|0)===2047){if((a|A|0)===0){if((k|0)===2047){if((c|C|0)===0){q=q|16;w[x]=2147483647;w[x+1|0]=-1;break L1;}else{z(d,0,y,A,B,C);c=d[1]|0;w[x]=d[0]|0;w[x+1|0]=c;break L1;}}else{w[x]=(s<<31)+2146435072|0;w[x+1|0]=0;break L1;}}else{z(d,0,y,A,B,C);c=d[1]|0;w[x]=d[0]|0;w[x+1|0]=c;}}else{switch(j&2047){case 0:{if((c|C|0)===0){c=q|0;if((h|a|A|0)===0){q=c|16;w[x]=2147483647;w[x+1|0]=-1;break L1;}else{q=c|2;w[x]=(s<<31)+2146435072|0;w[x+1|0]=0;break L1;}}else{G(c,C,d,5,d,3);}break;}case 2047:{if((c|C|0)===0){w[x]=s<<31;w[x+1|0]=0;break L1;}else{z(d,0,y,A,B,C);c=d[1]|0;w[x]=d[0]|0;w[x+1|0]=c;break L1;}break;}default:{}}if((h|0)===0){if((a|A|0)===0){w[x]=s<<31;w[x+1|0]=0;break L1;}else{G(a,A,d,2,d,0);h=d[2]|0;a=d[0]|0;c=d[1]|0;}}else{c=A;}j=h-(d[5]|0)|0;k=c>>>22;a=a<<10|k|1073741824;d[0]=a;f=c<<10;d[1]=f;h=d[4]|0;n=d[3]<<11|h>>>21| -2147483648;d[3]=n;r=h<<11;d[4]=r;i=((f>>>0>(f^ -1)>>>0?1:0)?1:0)+(a<<1)|0;h=j+1021|0;if(n>>>0<i>>>0||r>>>0<=c<<11>>>0&&(n|0)===(i|0)){c=c<<9&2147483136|k<<31;a=a>>>1;d[0]=a;d[1]=c;h=j+1022|0;}else{c=f;}Z(d,0,a,c,0,0,n,r);i=d[0]|0;f=d[1]|0;if((f&511)>>>0<3){H(n,r,i,f,d,3,d,0);k=d[3]|0;t=d[4]|0;m=d[0]|0;o=d[1]|0;j=(((o|0)!==0?1:0)<<31>>31)-m|0;v=c-t|0;m=((m|0)!==0||(m|0)===0&&(o|0)!==0?1:0)?1:0;k=((a-k|0)+((c>>>0<t>>>0?1:0)<<31>>31)|0)+((v>>>0<m>>>0?1:0)<<31>>31)|0;a=-o|0;if((k|0)<0){c=v-m|0;t=r^ -1;while(1){i=(((f|0)===0?1:0)<<31>>31)+i|0;m=a+r|0;o=(j+n|0)+((a>>>0>t>>>0?1:0)?1:0)|0;a=(o>>>0<j>>>0||m>>>0<a>>>0&&(o|0)===(j|0)?1:0)?1:0;k=((c>>>0>(a^ -1)>>>0?1:0)?1:0)+k|0;f=f-1|0;if((k|0)<0){j=o;c=a+c|0;a=m;continue;}else{j=o;a=m;}break;}}f=(((j|a|0)!==0?1:0)?1:0)|f;}Y(d,0,s,h,i,f);c=d[1]|0;w[x]=d[0]|0;w[x+1|0]=c;}}function z(k,l,j,i,h,f){var d=0,c=0,a=null,b=0,m=0;a=new Int32Array(4);a[0]=j;a[1]=i;a[2]=h;a[3]=f;if((j&2146959360|0)===2146435072){d=((j&524287|i|0)!==0?1:0)?1:0;}else{d=0;}c=f>>>31|h<<1;m=c>>>0>4292870144||(f&2147483647|0)!==0&&(c|0)===-2097152?1:0;if((h&2146959360|0)===2146435072){c=((h&524287|f|0)!==0?1:0)?1:0;}else{c=0;}a[0]=j|524288;a[2]=h|524288;if((c|d|0)!==0){q=q|16;}if((c|0)===0){if((d|0)===0){b=m?2:0;a=m?a:a;}else{b=0;a=a;}}else{b=2;a=a;}d=a[b+1|0]|0;k[l]=a[b]|0;k[l+1|0]=d;}function G(i,h,f,g,d,e){var a=0,c=0;a=(i|0)===0?h|0:i|0;c=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(c>>>0<16777216){c=c<<8;a=a+8|0;}a=(a+((i|0)===0?32|0:0|0)|0)+(ab[c>>>24]|0)|0;c=a-11|0;d[e]=(c|0)===0?i|0:(c>>>0>31?h<<(a-43|0)|0:i<<c|h>>>(43-a|0)|0)|0;d[e+1|0]=(c|0)===0?h|0:(c>>>0>31?0|0:h<<c|0)|0;f[g]=12-a|0;}function Z(o,p,r,s,t,v,w,y){var c=0,a=0,f=0,h=0,d=null,n=null,j=0,i=0,k=0,m=0;if(w>>>0<r>>>0||(w|0)===(r|0)&&y>>>0<=s>>>0){o[p]=-1;o[p+1|0]=-1;}else{d=new Int32Array(2);if(w>>>0>r>>>0){F(d,0,r,s,0,w);c=d[1]|0;}else{c=-1;}n=new Int32Array(2);H(w,y,c,0,n,0,d,0);f=n[0]|0;h=n[1]|0;a=d[0]|0;j=d[1]|0;i=((j>>>0>v>>>0?1:0)<<31>>31)+(t-a|0)|0;j=(a>>>0>t>>>0||(a|0)===(t|0)&&j>>>0>v>>>0?1:0)?1:0;k=s-h|0;a=k-j|0;f=((r-f|0)+((h>>>0>s>>>0?1:0)<<31>>31)|0)+((k>>>0<j>>>0?1:0)<<31>>31)|0;if((f|0)<0){j=w^ -1;h=c;c=i;while(1){i=c+y|0;c=(i>>>0<c>>>0?1:0)?1:0;k=a+w|0;m=c+k|0;f=(((a>>>0>j>>>0?1:0)?1:0)+f|0)+((k>>>0>(c^ -1)>>>0?1:0)?1:0)|0;h=h-1|0;if((f|0)<0){a=m;c=i;continue;}else{a=m;c=i;}break;}}else{h=c;c=i;}if(a>>>0<w>>>0){F(d,0,a,c,0,w);a=d[0]|0;c=d[1]|0;}else{a=0;c=-1;}o[p]=a|h;o[p+1|0]=c;}}function Y(o,p,n,m,k,j){var a=0,d=0,i=0,c=0,h=null,f=0;L1:{L2:{L3:{L4:{h=new Int32Array(2);h[0]=k;h[1]=j;if((m&65535)>>>0>2044){if((m|0)<=2045){if((m|0)===2045){if((((j>>>0>4294966783?1:0)?1:0)+k|0)>=0){a=2045;break L4;}}else{if((m|0)<0){aa(k,j,-m|0,h,0);a=h[1]|0;d=a&1023;if((d|0)===0){i=0;d=0;break L2;}else{c=q|4;q=c;i=0;break L3;}}else{a=m;break L4;}}}q=q|9;o[p]=(n<<31)+2146435072|0;o[p+1|0]=0;break L1;}else{a=m;}}d=j&1023;if((d|0)===0){i=a;d=0;a=j;break L2;}else{c=q|0;i=a;a=j;}}q=c|1;break L2;}c=((a>>>0>4294966783?1:0)?1:0)+(h[0]|0)|0;f=c>>>10;h[0]=f;a=(c<<22|a+512>>>10)&((((d|0)===512?1:0)?1:0)^ -1);h[1]=a;o[p]=(f+(n<<31)|0)+((a|f|0)===0?0|0:i<<20|0)|0;o[p+1|0]=a;break L1;}}function X(){var a=0,f=null,c=0,d=0;f=new Int32Array(2);a=0;while(1){c=a<<1;d=c+1|0;$(f,0,J[c]|0,J[d]|0,I[c]|0,I[d]|0);a=a+1|0;if(a>>>0<88){continue;}break;}}function ac(c,a){X();return 0|0;}function F(t,u,s,r,o,n){var c=0,a=0,f=0,d=0,i=0,h=0,m=0,k=0,j=0,v=0;if((o|0)>-1&&(o>>>0<s>>>0||(o|0)===(s|0)&&n>>>0<r>>>0)){d=0;f=1;a=o;c=n;while(1){a=a<<1|c>>>31;d=d<<1|f>>>31;c=c<<1;f=f<<1;if((a|0)>-1&&(a>>>0<s>>>0||c>>>0<r>>>0&&(a|0)===(s|0))&&(d|f|0)!==0){continue;}break;}}else{d=0;f=1;a=o;c=n;}if((d|f|0)===0){a=0;c=0;}else{h=d;i=f;d=a;f=c;k=0;m=0;a=s;c=r;while(1){if(a>>>0>d>>>0||c>>>0>=f>>>0&&(a|0)===(d|0)){j=c-f|0;v=(a-d|0)+((c>>>0<f>>>0?1:0)<<31>>31)|0;a=k|h;c=m|i;k=j;m=v;}else{j=c;c=m;m=a;a=k;k=j;}i=h<<31|i>>>1;f=d<<31|f>>>1;h=h>>>1;d=d>>>1;if((i|h|0)!==0){j=c;c=k;k=a;a=m;m=j;continue;}break;}}t[u]=a;t[u+1|0]=c;}var J=new Int32Array([2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0]);var I=new Int32Array([1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0]);var q=0;var ab=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);ac();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");