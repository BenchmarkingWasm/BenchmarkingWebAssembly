let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var ap=Math.imul;var aq=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function C(h,f,d,b,c){var j=0,a=0;if((d|0)===0){a=f;j=h;}else{if((d|0)<64){j=f|h;a=-d&63;a=(((((a|0)===0?j|0:(a>>>0>31?f<<(a-32|0)|0:j<<a|f>>>(32-a|0)|0)|0)|0)!==0?1:0)?1:0)|(d>>>0>31?h>>>(d-32|0)|0:h<<(32-d|0)|f>>>d|0);j=d>>>0>31?0|0:h>>>d|0;}else{a=((f|h|0)!==0?1:0)?1:0;j=0;}}b[c]=j;b[c+1|0]=a;}function N(D,F,I,J,K,M,P,Q){var d=0,f=0,a=0,ad=0,b=0,ac=0,ab=0,aa=0,$=0,m=0,h=0,l=0,o=0,Y=0,X=0,W=0,x=0,w=0,j=0,u=0,s=0,r=0,Z=0,A=0;d=J>>>16;f=F>>>16;a=J&65535;ad=ap(a,f)|0;b=F&65535;ac=ap(d,b)|0;ab=ad+ac|0;aa=ap(a,b)|0;$=ab<<16;m=I>>>16;h=I&65535;l=ap(h,f)|0;o=ap(m,b)|0;Y=l+o|0;b=ap(h,b)|0;X=Y<<16;W=X+b|0;x=D>>>16;w=ap(a,x)|0;j=D&65535;u=ap(d,j)|0;s=w+u|0;a=ap(a,j)|0;r=s<<16;w=(((s>>>16)+(ap(d,x)|0)|0)+(((w>>>0>(u^ -1)>>>0?1:0)?1:0)<<16)|0)+((r>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=r+a|0;u=ap(h,x)|0;s=ap(m,j)|0;r=u+s|0;h=ap(h,j)|0;j=r<<16;Z=j+h|0;A=a+W|0;b=((((Y>>>16)+(ap(m,f)|0)|0)+(((l>>>0>(o^ -1)>>>0?1:0)?1:0)<<16)|0)+((X>>>0>(b^ -1)>>>0?1:0)?1:0)|0)+((W>>>0>(a^ -1)>>>0?1:0)?1:0)|0;l=b+w|0;o=l+Z|0;d=((((ab>>>16)+(ap(d,f)|0)|0)+(((ad>>>0>(ac^ -1)>>>0?1:0)?1:0)<<16)|0)+(($>>>0>(aa^ -1)>>>0?1:0)?1:0)|0)+A|0;f=(d>>>0<A>>>0?1:0)?1:0;P[Q]=d;P[Q+1|0]=$+aa|0;K[M]=((((((r>>>16)+(ap(m,x)|0)|0)+(((u>>>0>(s^ -1)>>>0?1:0)?1:0)<<16)|0)+((j>>>0>(h^ -1)>>>0?1:0)?1:0)|0)+((Z>>>0>(l^ -1)>>>0?1:0)?1:0)|0)+((o>>>0>(f^ -1)>>>0?1:0)?1:0)|0)+((l>>>0<w>>>0||A>>>0<a>>>0&&(b|0)===0?1:0)?1:0)|0;K[M+1|0]=o+f|0;}function an(h,i,f){var b=0,a=0,d=0;if((f|0)===0){h[i]=0;h[i+1|0]=0;}else{d=(f|0)<0?-f|0:f|0;a=d>>>0<65536?d<<16|0:d|0;b=d>>>0<65536?16|0:0|0;if(a>>>0<16777216){a=a<<8;b=b+8|0;}b=(O[a>>>24]|0)+b|0;a=b+21|0;h[i]=((1053-b<<20)+(f& -2147483648)|0)+((a|0)===0?0|0:(a>>>0>31?d<<(b-11|0)|0:d>>>(11-b|0)|0)|0)|0;h[i+1|0]=(a|0)===0?d|0:(a>>>0>31?0|0:d<<a|0)|0;}}function am(m,n,l,j,h,f){var a=0,d=0,b=null;a=l>>>31;b=new Int32Array(2);if((a|0)===(h>>>31|0)){al(b,0,l,j,h,f,a);a=b[0]|0;d=b[1]|0;}else{ak(b,0,l,j,h,f,a);a=b[0]|0;d=b[1]|0;}m[n]=a;m[n+1|0]=d;}function al(A,B,x,w,u,s,r){var a=0,b=0,f=0,d=0,l=0,m=0,o=0,h=null,j=0;L1:{L2:{m=u>>>20&2047;o=x>>>20;l=o&2047;b=l-m|0;d=w>>>23|x<<9&536870400;h=new Int32Array(4);h[0]=d;f=w<<9;h[1]=f;a=s>>>23|u<<9&536870400;h[2]=a;j=s<<9;h[3]=j;if(l>>>0>m>>>0){if((l|0)===2047){if((f|d|0)===0){A[B]=x;A[B+1|0]=w;break L1;}else{z(h,0,x,w,u,s);a=h[1]|0;A[B]=h[0]|0;A[B+1|0]=a;break L1;}}else{if((m|0)===0){b=b-1|0;}else{a=a|536870912;h[2]=a;h[3]=j;}C(a,j,b,h,2);b=h[2]|0;a=h[3]|0;}}else{if(l>>>0<m>>>0){if((m|0)===2047){if((a|j|0)===0){A[B]=(r<<31)+2146435072|0;A[B+1|0]=0;break L1;}else{z(h,0,x,w,u,s);a=h[1]|0;A[B]=h[0]|0;A[B+1|0]=a;break L1;}}else{if((l|0)===0){b=b+1|0;}else{d=d|536870912;h[0]=d;}C(d,f,-b|0,h,0);d=h[0]|0;f=h[1]|0;l=m;b=a;a=j;}}else{switch(o&2047){case 0:{a=(a+d|0)+((f>>>0>(j^ -1)>>>0?1:0)?1:0)|0;A[B]=(a>>>9)+(r<<31)|0;A[B+1|0]=a<<23|f+j>>>9;break L1;break;}case 2047:{if((d|j|f|a|0)===0){A[B]=x;A[B+1|0]=w;break L1;}else{z(h,0,x,w,u,s);a=h[1]|0;A[B]=h[0]|0;A[B+1|0]=a;break L1;}break;}default:{b=f+j|0;a=((d+1073741824|0)+a|0)+((f>>>0>(j^ -1)>>>0?1:0)?1:0)|0;break L2;break;}}}}d=d|536870912;h[0]=d;m=a+f|0;b=(b+d|0)+((f>>>0>(a^ -1)>>>0?1:0)?1:0)|0;f=b<<1|m>>>31;a=(f|0)<0?b|0:f|0;b=m<<(b>>>30&1^1);l=((((f|0)<0?1:0)^1?1:0)<<31>>31)+l|0;break L2;}G(h,0,r,l,a,b);a=h[1]|0;A[B]=h[0]|0;A[B+1|0]=a;break L1;}}function ak(A,B,x,w,u,s,r){var a=0,d=0,b=0,h=0,o=0,m=0,f=null,l=0,j=0;L1:{L2:{m=u>>>20&2047;o=x>>>20;h=o&2047;d=h-m|0;b=w>>>22|x<<10&1073740800;f=new Int32Array(4);f[0]=b;l=w<<10;f[1]=l;a=s>>>22|u<<10&1073740800;f[2]=a;j=s<<10;f[3]=j;L3:if(h>>>0>m>>>0){if((h|0)===2047){if((l|b|0)===0){A[B]=x;A[B+1|0]=w;break L1;}else{z(f,0,x,w,u,s);a=f[1]|0;A[B]=f[0]|0;A[B+1|0]=a;break L1;}}else{if((m|0)===0){d=d-1|0;}else{a=a|1073741824;f[2]=a;f[3]=j;}C(a,j,d,f,2);b=b|1073741824;f[0]=b;d=f[2]|0;a=f[3]|0;}}else{if(h>>>0<m>>>0){if((m|0)===2047){if((a|j|0)===0){A[B]=(r<<31)-1048576|0;A[B+1|0]=0;break L1;}else{z(f,0,x,w,u,s);a=f[1]|0;A[B]=f[0]|0;A[B+1|0]=a;break L1;}}else{if((h|0)===0){d=d+1|0;}else{b=b|1073741824;f[0]=b;}C(b,l,-d|0,f,0);o=a|1073741824;f[2]=o;b=f[0]|0;a=f[1]|0;h=m;}}else{switch(o&2047){case 0:{h=1;d=1;break;}case 2047:{if((b|j|l|a|0)===0){q=q|16;A[B]=2147483647;A[B+1|0]=-1;break L1;}else{z(f,0,x,w,u,s);a=f[1]|0;A[B]=f[0]|0;A[B+1|0]=a;break L1;}break;}default:{d=m;}}if(a>>>0<b>>>0||(a|0)===(b|0)&&j>>>0<l>>>0){d=a;a=j;break L3;}else{if(b>>>0<a>>>0||(a|0)===(b|0)&&l>>>0<j>>>0){o=a;h=d;a=l;}else{A[B]=0;A[B+1|0]=0;break L1;}}}d=j-a|0;a=(o-b|0)+((j>>>0<a>>>0?1:0)<<31>>31)|0;b=r^1;break L2;}o=l-a|0;a=(b-d|0)+((l>>>0<a>>>0?1:0)<<31>>31)|0;d=o;b=r;break L2;}ae(f,0,b,h-1|0,a,d);a=f[1]|0;A[B]=f[0]|0;A[B+1|0]=a;break L1;}}function U(u,v,s,r,o,m){var a=0,b=0,f=0,d=null,h=0,j=0,l=0;a=s&1048575;d=new Int32Array(6);d[0]=a;d[1]=r;h=s>>>20&2047;d[2]=h;b=o&1048575;d[3]=b;d[4]=m;f=o>>>20&2047;d[5]=f;j=(o^s)>>>31;L1:if((h|0)===2047){if((a|r|0)===0){if((f|0)!==2047||(b|m|0)===0){if((b|f|m|0)===0){q=q|16;u[v]=2147483647;u[v+1|0]=-1;break L1;}else{u[v]=(j<<31)+2146435072|0;u[v+1|0]=0;break L1;}}}z(d,0,s,r,o,m);a=d[1]|0;u[v]=d[0]|0;u[v+1|0]=a;}else{if((f|0)===2047){if((b|m|0)===0){if((h|a|r|0)===0){q=q|16;u[v]=2147483647;u[v+1|0]=-1;break L1;}else{u[v]=(j<<31)+2146435072|0;u[v+1|0]=0;break L1;}}else{z(d,0,s,r,o,m);a=d[1]|0;u[v]=d[0]|0;u[v+1|0]=a;}}else{if((h|0)===0){if((a|r|0)===0){u[v]=j<<31;u[v+1|0]=0;break L1;}else{H(a,r,d,2,d,0);}}if((f|0)===0){if((b|m|0)===0){u[v]=j<<31;u[v+1|0]=0;break L1;}else{H(b,m,d,5,d,3);f=d[5]|0;b=d[3]|0;a=d[4]|0;}}else{a=m;}h=f+(d[2]|0)|0;f=d[1]|0;l=d[0]<<10|f>>>22|1073741824;d[0]=l;f=f<<10;d[1]=f;b=b<<11|a>>>21| -2147483648;d[3]=b;a=a<<11;d[4]=a;N(l,f,b,a,d,3,d,0);b=d[4]|0;a=(((d[1]|d[0]|0)!==0?1:0)?1:0)|b;d[4]=a;l=d[3]|0;b=l<<1|b>>>31;f=h-1023|0;if((b|0)>-1){d[3]=b;a=a<<1;d[4]=a;f=h-1024|0;}else{b=l;}G(d,0,j,f,b,a);a=d[1]|0;u[v]=d[0]|0;u[v+1|0]=a;}}}function z(h,i,f,d,b,a){var m=0,l=0,j=null,k=0,o=0;j=new Int32Array(4);j[0]=f;j[1]=d;j[2]=b;j[3]=a;if((f&2146959360|0)===2146435072){m=((f&524287|d|0)!==0?1:0)?1:0;}else{m=0;}l=a>>>31|b<<1;o=l>>>0>4292870144||(a&2147483647|0)!==0&&(l|0)===-2097152?1:0;if((b&2146959360|0)===2146435072){l=((b&524287|a|0)!==0?1:0)?1:0;}else{l=0;}j[0]=f|524288;j[2]=b|524288;if((l|m|0)!==0){q=q|16;}if((l|0)===0){if((m|0)===0){k=o?2:0;j=o?j:j;}else{k=0;j=j;}}else{k=2;j=j;}m=j[k+1|0]|0;h[i]=j[k]|0;h[i+1|0]=m;}function H(j,h,f,g,d,e){var a=0,b=0;a=(j|0)===0?h|0:j|0;b=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(b>>>0<16777216){b=b<<8;a=a+8|0;}a=(a+((j|0)===0?32|0:0|0)|0)+(O[b>>>24]|0)|0;b=a-11|0;d[e]=(b|0)===0?j|0:(b>>>0>31?h<<(a-43|0)|0:j<<b|h>>>(43-a|0)|0)|0;d[e+1|0]=(b|0)===0?h|0:(b>>>0>31?0|0:h<<b|0)|0;f[g]=12-a|0;}function G(m,n,l,j,h,f){var a=0,d=0,s=0,b=0,r=null,o=0;L1:{L2:{L3:{L4:{r=new Int32Array(2);r[0]=h;r[1]=f;if((j&65535)>>>0>2044){if((j|0)<=2045){if((j|0)===2045){if((((f>>>0>4294966783?1:0)?1:0)+h|0)>=0){a=2045;break L4;}}else{if((j|0)<0){C(h,f,-j|0,r,0);a=r[1]|0;d=a&1023;if((d|0)===0){s=0;d=0;break L2;}else{b=q|4;q=b;s=0;break L3;}}else{a=j;break L4;}}}q=q|9;m[n]=(l<<31)+2146435072|0;m[n+1|0]=0;break L1;}else{a=j;}}d=f&1023;if((d|0)===0){s=a;d=0;a=f;break L2;}else{b=q|0;s=a;a=f;}}q=b|1;break L2;}b=((a>>>0>4294966783?1:0)?1:0)+(r[0]|0)|0;o=b>>>10;r[0]=o;a=(b<<22|a+512>>>10)&((((d|0)===512?1:0)?1:0)^ -1);r[1]=a;m[n]=(o+(l<<31)|0)+((a|o|0)===0?0|0:s<<20|0)|0;m[n+1|0]=a;break L1;}}function aj(D,E,F,I,J,K){var b=0,a=0,h=0,l=0,m=0,f=0,j=0,d=null,w=0,r=0,u=0,x=0,o=0,s=0,A=0;a=F&1048575;d=new Int32Array(6);d[0]=a;d[1]=I;h=F>>>20&2047;d[2]=h;b=J&1048575;d[3]=b;d[4]=K;l=J>>>20;m=l&2047;d[5]=m;w=(J^F)>>>31;L1:if((h|0)===2047){if((a|I|0)===0){if((m|0)===2047){if((b|K|0)===0){q=q|16;D[E]=2147483647;D[E+1|0]=-1;break L1;}else{z(d,0,F,I,J,K);b=d[1]|0;D[E]=d[0]|0;D[E+1|0]=b;break L1;}}else{D[E]=(w<<31)+2146435072|0;D[E+1|0]=0;break L1;}}else{z(d,0,F,I,J,K);b=d[1]|0;D[E]=d[0]|0;D[E+1|0]=b;}}else{switch(l&2047){case 0:{if((b|K|0)===0){b=q|0;if((h|a|I|0)===0){q=b|16;D[E]=2147483647;D[E+1|0]=-1;break L1;}else{q=b|2;D[E]=(w<<31)+2146435072|0;D[E+1|0]=0;break L1;}}else{H(b,K,d,5,d,3);}break;}case 2047:{if((b|K|0)===0){D[E]=w<<31;D[E+1|0]=0;break L1;}else{z(d,0,F,I,J,K);b=d[1]|0;D[E]=d[0]|0;D[E+1|0]=b;break L1;}break;}default:{}}if((h|0)===0){if((a|I|0)===0){D[E]=w<<31;D[E+1|0]=0;break L1;}else{H(a,I,d,2,d,0);h=d[2]|0;a=d[0]|0;b=d[1]|0;}}else{b=I;}l=h-(d[5]|0)|0;m=b>>>22;a=a<<10|m|1073741824;d[0]=a;f=b<<10;d[1]=f;h=d[4]|0;r=d[3]<<11|h>>>21| -2147483648;d[3]=r;u=h<<11;d[4]=u;j=((f>>>0>(f^ -1)>>>0?1:0)?1:0)+(a<<1)|0;h=l+1021|0;if(r>>>0<j>>>0||u>>>0<=b<<11>>>0&&(r|0)===(j|0)){b=b<<9&2147483136|m<<31;a=a>>>1;d[0]=a;d[1]=b;h=l+1022|0;}else{b=f;}ai(d,0,a,b,0,0,r,u);j=d[0]|0;f=d[1]|0;if((f&511)>>>0<3){N(r,u,j,f,d,3,d,0);m=d[3]|0;x=d[4]|0;o=d[0]|0;s=d[1]|0;l=(((s|0)!==0?1:0)<<31>>31)-o|0;A=b-x|0;o=((o|0)!==0||(o|0)===0&&(s|0)!==0?1:0)?1:0;m=((a-m|0)+((b>>>0<x>>>0?1:0)<<31>>31)|0)+((A>>>0<o>>>0?1:0)<<31>>31)|0;a=-s|0;if((m|0)<0){b=A-o|0;x=u^ -1;while(1){j=(((f|0)===0?1:0)<<31>>31)+j|0;o=a+u|0;s=(l+r|0)+((a>>>0>x>>>0?1:0)?1:0)|0;a=(s>>>0<l>>>0||o>>>0<a>>>0&&(s|0)===(l|0)?1:0)?1:0;m=((b>>>0>(a^ -1)>>>0?1:0)?1:0)+m|0;f=f-1|0;if((m|0)<0){l=s;b=a+b|0;a=o;continue;}else{l=s;a=o;}break;}}f=(((l|a|0)!==0?1:0)?1:0)|f;}G(d,0,w,h,j,f);b=d[1]|0;D[E]=d[0]|0;D[E+1|0]=b;}}function ai(s,t,u,w,x,A,D,F){var b=0,a=0,f=0,h=0,d=null,r=null,l=0,j=0,m=0,o=0;if(D>>>0<u>>>0||(D|0)===(u|0)&&F>>>0<=w>>>0){s[t]=-1;s[t+1|0]=-1;}else{d=new Int32Array(2);if(D>>>0>u>>>0){T(d,0,u,w,0,D);b=d[1]|0;}else{b=-1;}r=new Int32Array(2);N(D,F,b,0,r,0,d,0);f=r[0]|0;h=r[1]|0;a=d[0]|0;l=d[1]|0;j=((l>>>0>A>>>0?1:0)<<31>>31)+(x-a|0)|0;l=(a>>>0>x>>>0||(a|0)===(x|0)&&l>>>0>A>>>0?1:0)?1:0;m=w-h|0;a=m-l|0;f=((u-f|0)+((h>>>0>w>>>0?1:0)<<31>>31)|0)+((m>>>0<l>>>0?1:0)<<31>>31)|0;if((f|0)<0){l=D^ -1;h=b;b=j;while(1){j=b+F|0;b=(j>>>0<b>>>0?1:0)?1:0;m=a+D|0;o=b+m|0;f=(((a>>>0>l>>>0?1:0)?1:0)+f|0)+((m>>>0>(b^ -1)>>>0?1:0)?1:0)|0;h=h-1|0;if((f|0)<0){a=o;b=j;continue;}else{a=o;b=j;}break;}}else{h=b;b=j;}if(a>>>0<D>>>0){T(d,0,a,b,0,D);a=d[0]|0;b=d[1]|0;}else{a=0;b=-1;}s[t]=a|h;s[t+1|0]=b;}}function ah(h,f,d,b){var a=0;L1:{if((h&2146435072|0)===2146435072){if((h&1048575|f|0)!==0){break L1;}}if((d&2146435072|0)===2146435072){if((d&1048575|b|0)!==0){break L1;}}a=h>>>31;if((a|0)===(d>>>31|0)){if((h|0)===(d|0)&&(f|0)===(b|0)){return 1|0;}return ((h>>>0<d>>>0||(h|0)===(d|0)&&f>>>0<b>>>0?1:0)?1:0)^a|0;}if((a|0)===0){a=b|f;a=((a>>>31|(d|h)<<1|a&2147483647|0)===0?1:0)?1:0;return a|0;}return 1|0;}q=q|16;return 0|0;}function ag(o,p,m,l){var b=0,d=0,h=0,f=0,j=0,a=null,u=0,s=0,r=0;a=new Int32Array(8);U(a,0,m,l,m,l);u=a[1]|0;s=(a[0]|0)^ -2147483648;j=1;f=l;h=m;d=l;b=m;while(1){U(a,6,b,d,s,u);b=j<<1;an(a,4,ap(b+1|0,b)|0);aj(a,2,a[6]|0,a[7]|0,a[4]|0,a[5]|0);b=a[2]|0;d=a[3]|0;am(a,0,h,f,b,d);h=a[0]|0;f=a[1]|0;r=ah(1055193269,-1998362383,b&2147483647,d)|0;if((r|0)!==0){j=j+1|0;continue;}break;}o[p]=h;o[p+1|0]=f;}function af(){var a=0,d=null,b=0;d=new Int32Array(2);a=0;while(1){b=a<<1;ag(d,0,V[b]|0,V[b+1|0]|0);a=a+1|0;if(a>>>0<288){continue;}break;}}function ao(b,a){af();return 0|0;}function ae(m,n,l,j,h,f){var a=0,b=0,d=null;a=(h|0)===0?f|0:h|0;b=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(b>>>0<16777216){b=b<<8;a=a+8|0;}a=(a+((h|0)===0?32|0:0|0)|0)+(O[b>>>24]|0)|0;b=a-1|0;d=new Int32Array(2);G(d,0,l,j-b|0,(b|0)===0?h|0:(b>>>0>31?f<<(a-33|0)|0:h<<b|f>>>(33-a|0)|0)|0,(b|0)===0?f|0:(b>>>0>31?0|0:f<<b|0)|0);a=d[1]|0;m[n]=d[0]|0;m[n+1|0]=a;}function T(x,y,w,u,s,r){var b=0,a=0,f=0,d=0,j=0,h=0,o=0,m=0,l=0,A=0;if((s|0)>-1&&(s>>>0<w>>>0||(s|0)===(w|0)&&r>>>0<u>>>0)){d=0;f=1;a=s;b=r;while(1){a=a<<1|b>>>31;d=d<<1|f>>>31;b=b<<1;f=f<<1;if((a|0)>-1&&(a>>>0<w>>>0||b>>>0<u>>>0&&(a|0)===(w|0))&&(d|f|0)!==0){continue;}break;}}else{d=0;f=1;a=s;b=r;}if((d|f|0)===0){a=0;b=0;}else{h=d;j=f;d=a;f=b;m=0;o=0;a=w;b=u;while(1){if(a>>>0>d>>>0||b>>>0>=f>>>0&&(a|0)===(d|0)){l=b-f|0;A=(a-d|0)+((b>>>0<f>>>0?1:0)<<31>>31)|0;a=m|h;b=o|j;m=l;o=A;}else{l=b;b=o;o=a;a=m;m=l;}j=h<<31|j>>>1;f=d<<31|f>>>1;h=h>>>1;d=d>>>1;if((j|h|0)!==0){l=b;b=m;m=a;a=o;o=l;continue;}break;}}x[y]=a;x[y+1|0]=b;}var V=new Int32Array([0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675]);var q=0;var O=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);ao();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");