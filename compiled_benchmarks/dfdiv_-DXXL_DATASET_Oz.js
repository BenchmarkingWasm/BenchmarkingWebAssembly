let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var ac=Math.imul;var ad=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function aa(h,g,f,d,e){var c=0,a=0;if((f|0)===0){a=g;c=h;}else{if((f|0)<64){c=g|h;a=-f&63;a=(((((a|0)===0?c|0:(a>>>0>31?g<<(a-32|0)|0:c<<a|g>>>(32-a|0)|0)|0)|0)!==0?1:0)?1:0)|(f>>>0>31?h>>>(f-32|0)|0:h<<(32-f|0)|g>>>f|0);c=f>>>0>31?0|0:h>>>f|0;}else{a=((g|h|0)!==0?1:0)?1:0;c=0;}}d[e]=c;d[e+1|0]=a;}function G(O,P,Q,R,S,T,U,V){var g=0,d=0,a=0,C=0,c=0,A=0,z=0,x=0,B=0,r=0,f=0,i=0,s=0,K=0,M=0,W=0,q=0,o=0,h=0,m=0,l=0,j=0,N=0,u=0;g=R>>>16;d=P>>>16;a=R&65535;C=ac(a,d)|0;c=P&65535;A=ac(g,c)|0;z=C+A|0;x=ac(a,c)|0;B=z<<16;r=Q>>>16;f=Q&65535;i=ac(f,d)|0;s=ac(r,c)|0;K=i+s|0;c=ac(f,c)|0;M=K<<16;W=M+c|0;q=O>>>16;o=ac(a,q)|0;h=O&65535;m=ac(g,h)|0;l=o+m|0;a=ac(a,h)|0;j=l<<16;o=(((l>>>16)+(ac(g,q)|0)|0)+(((o>>>0>(m^ -1)>>>0?1:0)?1:0)<<16)|0)+((j>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=j+a|0;m=ac(f,q)|0;l=ac(r,h)|0;j=m+l|0;f=ac(f,h)|0;h=j<<16;N=h+f|0;u=a+W|0;c=((((K>>>16)+(ac(r,d)|0)|0)+(((i>>>0>(s^ -1)>>>0?1:0)?1:0)<<16)|0)+((M>>>0>(c^ -1)>>>0?1:0)?1:0)|0)+((W>>>0>(a^ -1)>>>0?1:0)?1:0)|0;i=c+o|0;s=i+N|0;g=((((z>>>16)+(ac(g,d)|0)|0)+(((C>>>0>(A^ -1)>>>0?1:0)?1:0)<<16)|0)+((B>>>0>(x^ -1)>>>0?1:0)?1:0)|0)+u|0;d=(g>>>0<u>>>0?1:0)?1:0;U[V]=g;U[V+1|0]=B+x|0;S[T]=((((((j>>>16)+(ac(r,q)|0)|0)+(((m>>>0>(l^ -1)>>>0?1:0)?1:0)<<16)|0)+((h>>>0>(f^ -1)>>>0?1:0)?1:0)|0)+((N>>>0>(i^ -1)>>>0?1:0)?1:0)|0)+((s>>>0>(d^ -1)>>>0?1:0)?1:0)|0)+((i>>>0<o>>>0||u>>>0<a>>>0&&(c|0)===0?1:0)?1:0)|0;S[T+1|0]=s+d|0;}function $(x,y,z,A,B,C){var a=0,d=0,j=0,c=0,h=0,f=0,g=0,r=0,i=null,q=0,m=0,o=0,l=0,s=0,u=0;r=(B^z)>>>31;d=B>>>20;a=d&2047;j=B&1048575;f=z>>>20&2047;g=z&1048575;i=new Int32Array(4);L1:if((f|0)===2047){if((g|A|0)===0){if((a|0)===2047){if((j|C|0)===0){n=n|16;x[y]=2147483647;x[y+1|0]=-1;break L1;}else{w(i,0,z,A,B,C);a=i[1]|0;x[y]=i[0]|0;x[y+1|0]=a;break L1;}}else{x[y]=(r<<31)+2146435072|0;x[y+1|0]=0;break L1;}}else{w(i,0,z,A,B,C);a=i[1]|0;x[y]=i[0]|0;x[y+1|0]=a;}}else{switch(d&2047){case 0:{if((j|C|0)===0){a=n|0;if((g|A|f|0)===0){n=a|16;x[y]=2147483647;x[y+1|0]=-1;break L1;}else{n=a|2;x[y]=(r<<31)+2146435072|0;x[y+1|0]=0;break L1;}}else{a=(j|0)===0?C|0:j|0;d=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(d>>>0<16777216){d=d<<8;a=a+8|0;}a=(a+((j|0)===0?32|0:0|0)|0)+(H[d>>>24]|0)|0;d=a-11|0;j=(d|0)===0?j|0:(d>>>0>31?C<<(a-43|0)|0:j<<d|C>>>(43-a|0)|0)|0;d=(d|0)===0?C|0:(d>>>0>31?0|0:C<<d|0)|0;a=12-a|0;}break;}case 2047:{if((j|C|0)===0){x[y]=r<<31;x[y+1|0]=0;break L1;}else{w(i,0,z,A,B,C);a=i[1]|0;x[y]=i[0]|0;x[y+1|0]=a;break L1;}break;}default:{d=C;}}if((f|0)===0){if((g|A|0)===0){x[y]=r<<31;x[y+1|0]=0;break L1;}else{c=(g|0)===0?A|0:g|0;h=c>>>0<65536?c<<16|0:c|0;c=c>>>0<65536?16|0:0|0;if(h>>>0<16777216){h=h<<8;c=c+8|0;}f=(c+((g|0)===0?32|0:0|0)|0)+(H[h>>>24]|0)|0;c=f-11|0;h=(c|0)===0?g|0:(c>>>0>31?A<<(f-43|0)|0:g<<c|A>>>(43-f|0)|0)|0;c=(c|0)===0?A|0:(c>>>0>31?0|0:A<<c|0)|0;f=12-f|0;}}else{h=g;c=A;}f=f-a|0;g=c>>>22;h=g|h<<10|1073741824;q=d>>>21|j<<11| -2147483648;a=c<<10;m=(h<<1)+((a>>>0>(a^ -1)>>>0?1:0)?1:0)|0;o=d<<11;j=f+1021|0;if(q>>>0<m>>>0||o>>>0<=c<<11>>>0&&(q|0)===(m|0)){a=c<<9&2147483136|g<<31;j=f+1022|0;d=h>>>1;}else{d=h;}Z(i,0,d,a,q,o);m=i[0]|0;l=i[1]|0;if((l&511)>>>0<3){G(q,o,m,l,i,2,i,0);h=i[2]|0;f=i[3]|0;g=i[0]|0;s=i[1]|0;c=(((s|0)!==0?1:0)<<31>>31)-g|0;u=a-f|0;g=((g|0)!==0||(g|0)===0&&(s|0)!==0?1:0)?1:0;f=((d-h|0)+((a>>>0<f>>>0?1:0)<<31>>31)|0)+((u>>>0<g>>>0?1:0)<<31>>31)|0;h=-s|0;if((f|0)<0){g=u-g|0;s=o^ -1;d=m;a=l;while(1){d=(((a|0)===0?1:0)<<31>>31)+d|0;m=h+o|0;l=(c+q|0)+((h>>>0>s>>>0?1:0)?1:0)|0;c=(l>>>0<c>>>0||m>>>0<h>>>0&&(l|0)===(c|0)?1:0)?1:0;f=((g>>>0>(c^ -1)>>>0?1:0)?1:0)+f|0;a=a-1|0;if((f|0)<0){g=c+g|0;h=m;c=l;continue;}else{h=m;c=l;}break;}}else{d=m;a=l;}a=(((c|h|0)!==0?1:0)?1:0)|a;}else{d=m;a=l;}Y(i,0,r,j,d,a);a=i[1]|0;x[y]=i[0]|0;x[y+1|0]=a;}}function w(j,k,i,h,g,f){var d=0,c=0,a=null,b=0,l=0;a=new Int32Array(4);a[0]=i;a[1]=h;a[2]=g;a[3]=f;if((i&2146959360|0)===2146435072){d=((i&524287|h|0)!==0?1:0)?1:0;}else{d=0;}c=f>>>31|g<<1;l=c>>>0>4292870144||(f&2147483647|0)!==0&&(c|0)===-2097152?1:0;if((g&2146959360|0)===2146435072){c=((g&524287|f|0)!==0?1:0)?1:0;}else{c=0;}a[0]=i|524288;a[1]=h;a[2]=g|524288;a[3]=f;if((c|d|0)!==0){n=n|16;}if((c|0)===0){if((d|0)===0){b=l?2:0;a=l?a:a;}else{b=0;a=a;}}else{b=2;a=a;}d=a[b+1|0]|0;j[k]=a[b]|0;j[k+1|0]=d;}function Z(u,v,s,r,q,o){var f=0,d=0,a=0,h=0,c=null,m=null,j=0,g=0,i=0,l=0;if(s>>>0>q>>>0||(s|0)===(q|0)&&o>>>0<=r>>>0){u[v]=-1;u[v+1|0]=-1;}else{c=new Int32Array(2);if(s>>>0<q>>>0){F(c,0,s,r,0,q);f=c[1]|0;}else{f=-1;}m=new Int32Array(2);G(q,o,f,0,m,0,c,0);h=m[0]|0;j=m[1]|0;a=c[0]|0;g=c[1]|0;d=(((g|0)!==0?1:0)<<31>>31)-a|0;g=((a|0)!==0||(a|0)===0&&(g|0)!==0?1:0)?1:0;i=r-j|0;a=i-g|0;h=((s-h|0)+((j>>>0>r>>>0?1:0)<<31>>31)|0)+((i>>>0<g>>>0?1:0)<<31>>31)|0;if((h|0)<0){j=q^ -1;while(1){g=d+o|0;d=(g>>>0<d>>>0?1:0)?1:0;i=a+q|0;l=d+i|0;h=(((a>>>0>j>>>0?1:0)?1:0)+h|0)+((i>>>0>(d^ -1)>>>0?1:0)?1:0)|0;f=f-1|0;if((h|0)<0){a=l;d=g;continue;}else{a=l;d=g;}break;}}if(a>>>0<q>>>0){F(c,0,a,d,0,q);a=c[0]|0;d=c[1]|0;}else{a=0;d=-1;}u[v]=a|f;u[v+1|0]=d;}}function Y(o,p,m,l,j,i){var a=0,d=0,h=0,c=0,g=null,f=0;L1:{L2:{L3:{L4:{g=new Int32Array(2);g[0]=j;g[1]=i;if((l&65535)>>>0>2044){if((l|0)<=2045){if((l|0)===2045){if((((i>>>0>4294966783?1:0)?1:0)+j|0)>=0){a=2045;break L4;}}else{if((l|0)<0){aa(j,i,-l|0,g,0);a=g[1]|0;d=a&1023;if((d|0)===0){h=0;d=0;break L2;}else{c=n|4;n=c;h=0;break L3;}}else{a=l;break L4;}}}n=n|9;o[p]=(m<<31)+2146435072|0;o[p+1|0]=0;break L1;}else{a=l;}}d=i&1023;if((d|0)===0){h=a;d=0;a=i;break L2;}else{c=n|0;h=a;a=i;}}n=c|1;break L2;}c=(g[0]|0)+((a>>>0>4294966783?1:0)?1:0)|0;f=c>>>10;g[0]=f;a=(c<<22|a+512>>>10)&((((d|0)===512?1:0)?1:0)^ -1);g[1]=a;o[p]=(f+(m<<31)|0)+((a|f|0)===0?0|0:h<<20|0)|0;o[p+1|0]=a;break L1;}}function X(){var a=0,f=null,c=0,d=0;f=new Int32Array(2);a=0;while(1){c=a<<1;d=c+1|0;$(f,0,I[c]|0,I[d]|0,J[c]|0,J[d]|0);a=a+1|0;if(a>>>0<176){continue;}break;}}function ab(c,a){X();return 0|0;}function F(s,t,r,q,o,m){var c=0,a=0,f=0,d=0,h=0,g=0,l=0,j=0,i=0,u=0;if((o|0)>-1&&(o>>>0<r>>>0||(o|0)===(r|0)&&m>>>0<q>>>0)){d=0;f=1;a=o;c=m;while(1){a=a<<1|c>>>31;d=d<<1|f>>>31;c=c<<1;f=f<<1;if((a|0)>-1&&(a>>>0<r>>>0||c>>>0<q>>>0&&(a|0)===(r|0))&&(d|f|0)!==0){continue;}break;}}else{d=0;f=1;a=o;c=m;}if((d|f|0)===0){a=0;c=0;}else{g=d;h=f;d=a;f=c;j=0;l=0;a=r;c=q;while(1){if(a>>>0>d>>>0||c>>>0>=f>>>0&&(a|0)===(d|0)){i=c-f|0;u=(a-d|0)+((c>>>0<f>>>0?1:0)<<31>>31)|0;a=j|g;c=l|h;j=i;l=u;}else{i=c;c=l;l=a;a=j;j=i;}h=g<<31|h>>>1;f=d<<31|f>>>1;g=g>>>1;d=d>>>1;if((h|g|0)!==0){i=c;c=j;j=a;a=l;l=i;continue;}break;}}s[t]=a;s[t+1|0]=c;}var I=new Int32Array([2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0]);var J=new Int32Array([1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0]);var n=0;var H=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);ab();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");