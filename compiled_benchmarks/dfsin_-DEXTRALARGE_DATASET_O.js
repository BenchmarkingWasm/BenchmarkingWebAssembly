let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var aq=Math.imul;var ar=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function D(h,f,d,b,c){var j=0,a=0;if((d|0)===0){a=h;j=f;}else{if((d|0)<64){j=f|h;a=-d&63;j=(((((a|0)===0?j|0:(a>>>0>31?f<<(a-32|0)|0:j<<a|f>>>(32-a|0)|0)|0)|0)!==0?1:0)?1:0)|(d>>>0>31?h>>>(d-32|0)|0:h<<(32-d|0)|f>>>d|0);a=d>>>0>31?0|0:h>>>d|0;}else{j=((f|h|0)!==0?1:0)?1:0;a=0;}}b[c]=a;b[c+1|0]=j;}function O(E,G,J,K,M,N,Q,R){var d=0,f=0,a=0,ad=0,b=0,ac=0,ab=0,aa=0,$=0,n=0,h=0,l=0,p=0,Y=0,X=0,W=0,y=0,x=0,j=0,v=0,t=0,s=0,Z=0,B=0;d=K>>>16;f=G>>>16;a=K&65535;ad=aq(a,f)|0;b=G&65535;ac=aq(d,b)|0;ab=ad+ac|0;aa=aq(a,b)|0;$=ab<<16;n=J>>>16;h=J&65535;l=aq(h,f)|0;p=aq(n,b)|0;Y=l+p|0;b=aq(h,b)|0;X=Y<<16;W=X+b|0;y=E>>>16;x=aq(a,y)|0;j=E&65535;v=aq(d,j)|0;t=x+v|0;a=aq(a,j)|0;s=t<<16;x=(((t>>>16)+(aq(d,y)|0)|0)+(((x>>>0>(v^ -1)>>>0?1:0)?1:0)<<16)|0)+((s>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=s+a|0;v=aq(h,y)|0;t=aq(n,j)|0;s=v+t|0;h=aq(h,j)|0;j=s<<16;Z=j+h|0;B=a+W|0;b=((((Y>>>16)+(aq(n,f)|0)|0)+(((l>>>0>(p^ -1)>>>0?1:0)?1:0)<<16)|0)+((X>>>0>(b^ -1)>>>0?1:0)?1:0)|0)+((W>>>0>(a^ -1)>>>0?1:0)?1:0)|0;l=b+x|0;p=l+Z|0;d=((((ab>>>16)+(aq(d,f)|0)|0)+(((ad>>>0>(ac^ -1)>>>0?1:0)?1:0)<<16)|0)+(($>>>0>(aa^ -1)>>>0?1:0)?1:0)|0)+B|0;f=(d>>>0<B>>>0?1:0)?1:0;Q[R]=d;Q[R+1|0]=$+aa|0;M[N]=((((((s>>>16)+(aq(n,y)|0)|0)+(((v>>>0>(t^ -1)>>>0?1:0)?1:0)<<16)|0)+((j>>>0>(h^ -1)>>>0?1:0)?1:0)|0)+((Z>>>0>(l^ -1)>>>0?1:0)?1:0)|0)+((p>>>0>(f^ -1)>>>0?1:0)?1:0)|0)+((l>>>0<x>>>0||B>>>0<a>>>0&&(b|0)===0?1:0)?1:0)|0;M[N+1|0]=p+f|0;}function an(j,k,h){var b=0,a=0,f=0,d=0;if((h|0)===0){j[k]=0;j[k+1|0]=0;}else{f=h>>>31;d=(f|0)!==0?-h|0:h|0;a=d>>>0<65536?d<<16|0:d|0;b=d>>>0<65536?16|0:0|0;if(a>>>0<16777216){a=a<<8;b=b+8|0;}b=(P[a>>>24]|0)+b|0;a=b+21|0;j[k]=((1053-b<<20)+(f<<31)|0)+((a|0)===0?0|0:(a>>>0>31?d<<(b-11|0)|0:d>>>(11-b|0)|0)|0)|0;j[k+1|0]=(a|0)===0?d|0:(a>>>0>31?0|0:d<<a|0)|0;}}function am(l,m,j,h,f,d){var a=0,b=null;a=j>>>31;b=new Int32Array(2);if((a|0)===(f>>>31|0)){al(b,0,j,h,f,d,a);a=b[1]|0;l[m]=b[0]|0;l[m+1|0]=a;}else{ak(b,0,j,h,f,d,a);a=b[1]|0;l[m]=b[0]|0;l[m+1|0]=a;}}function al(B,C,y,x,v,t,s){var a=0,d=0,b=0,f=0,l=0,n=0,p=0,h=null,j=0;L1:{L2:{n=v>>>20&2047;p=y>>>20;l=p&2047;d=l-n|0;f=x>>>23|y<<9&536870400;h=new Int32Array(4);h[0]=f;b=x<<9;h[1]=b;a=t>>>23|v<<9&536870400;h[2]=a;j=t<<9;h[3]=j;if(l>>>0>n>>>0){if((l|0)===2047){if((b|f|0)===0){B[C]=y;B[C+1|0]=x;break L1;}else{A(h,0,y,x,v,t);a=h[1]|0;B[C]=h[0]|0;B[C+1|0]=a;break L1;}}else{if((n|0)===0){d=d-1|0;}else{a=a|536870912;h[2]=a;h[3]=j;}D(a,j,d,h,2);d=h[2]|0;a=h[3]|0;}}else{if(l>>>0<n>>>0){if((n|0)===2047){if((a|j|0)===0){B[C]=(s<<31)+2146435072|0;B[C+1|0]=0;break L1;}else{A(h,0,y,x,v,t);a=h[1]|0;B[C]=h[0]|0;B[C+1|0]=a;break L1;}}else{if((l|0)===0){d=d+1|0;}else{f=f|536870912;h[0]=f;h[1]=b;}D(f,b,-d|0,h,0);f=h[0]|0;b=h[1]|0;l=n;d=a;a=j;}}else{switch(p&2047){case 0:{a=(a+f|0)+((b>>>0>(j^ -1)>>>0?1:0)?1:0)|0;B[C]=(a>>>9)+(s<<31)|0;B[C+1|0]=a<<23|b+j>>>9;break L1;break;}case 2047:{if((f|j|b|a|0)===0){B[C]=y;B[C+1|0]=x;break L1;}else{A(h,0,y,x,v,t);a=h[1]|0;B[C]=h[0]|0;B[C+1|0]=a;break L1;}break;}default:{n=b+j|0;d=((f+1073741824|0)+a|0)+((b>>>0>(j^ -1)>>>0?1:0)?1:0)|0;a=n;break L2;break;}}}}f=f|536870912;h[0]=f;h[1]=b;n=a+b|0;d=(d+f|0)+((b>>>0>(a^ -1)>>>0?1:0)?1:0)|0;b=d<<1|n>>>31;a=n<<(d>>>30&1^1);d=(b|0)<0?d|0:b|0;l=((((b|0)<0?1:0)^1?1:0)<<31>>31)+l|0;break L2;}H(h,0,s,l,d,a);a=h[1]|0;B[C]=h[0]|0;B[C+1|0]=a;break L1;}}function ak(B,C,y,x,v,t,s){var a=0,d=0,b=0,l=0,p=0,n=0,f=null,j=0,h=0;L1:{L2:{n=v>>>20&2047;p=y>>>20;l=p&2047;d=l-n|0;b=x>>>22|y<<10&1073740800;f=new Int32Array(4);f[0]=b;j=x<<10;f[1]=j;a=t>>>22|v<<10&1073740800;f[2]=a;h=t<<10;f[3]=h;L3:if(l>>>0>n>>>0){if((l|0)===2047){if((j|b|0)===0){B[C]=y;B[C+1|0]=x;break L1;}else{A(f,0,y,x,v,t);a=f[1]|0;B[C]=f[0]|0;B[C+1|0]=a;break L1;}}else{if((n|0)===0){d=d-1|0;}else{a=a|1073741824;f[2]=a;f[3]=h;}D(a,h,d,f,2);b=b|1073741824;f[0]=b;f[1]=j;d=f[2]|0;a=f[3]|0;}}else{if(l>>>0<n>>>0){if((n|0)===2047){if((a|h|0)===0){B[C]=(s<<31)-1048576|0;B[C+1|0]=0;break L1;}else{A(f,0,y,x,v,t);a=f[1]|0;B[C]=f[0]|0;B[C+1|0]=a;break L1;}}else{if((l|0)===0){d=d+1|0;}else{b=b|1073741824;f[0]=b;f[1]=j;}D(b,j,-d|0,f,0);p=a|1073741824;f[2]=p;f[3]=h;b=f[0]|0;d=f[1]|0;l=n;}}else{switch(p&2047){case 0:{l=1;d=1;break;}case 2047:{if((b|h|j|a|0)===0){r=r|16;B[C]=2147483647;B[C+1|0]=-1;break L1;}else{A(f,0,y,x,v,t);a=f[1]|0;B[C]=f[0]|0;B[C+1|0]=a;break L1;}break;}default:{d=n;}}if(a>>>0<b>>>0||(a|0)===(b|0)&&h>>>0<j>>>0){d=a;a=h;break L3;}else{if(b>>>0<a>>>0||(a|0)===(b|0)&&j>>>0<h>>>0){p=a;l=d;d=j;}else{B[C]=0;B[C+1|0]=0;break L1;}}}a=h-d|0;d=(p-b|0)+((h>>>0<d>>>0?1:0)<<31>>31)|0;b=s^1;break L2;}p=j-a|0;d=(b-d|0)+((j>>>0<a>>>0?1:0)<<31>>31)|0;a=p;b=s;break L2;}ae(f,0,b,l-1|0,d,a);a=f[1]|0;B[C]=f[0]|0;B[C+1|0]=a;break L1;}}function V(v,w,t,s,p,n){var a=0,b=0,f=0,d=null,h=0,j=0,l=0;a=t&1048575;d=new Int32Array(6);d[0]=a;d[1]=s;h=t>>>20&2047;d[2]=h;b=p&1048575;d[3]=b;d[4]=n;f=p>>>20&2047;d[5]=f;j=(p^t)>>>31;L1:if((h|0)===2047){if((a|s|0)===0){if((f|0)!==2047||(b|n|0)===0){if((b|f|n|0)===0){r=r|16;v[w]=2147483647;v[w+1|0]=-1;break L1;}else{v[w]=(j<<31)+2146435072|0;v[w+1|0]=0;break L1;}}}A(d,0,t,s,p,n);a=d[1]|0;v[w]=d[0]|0;v[w+1|0]=a;}else{if((f|0)===2047){if((b|n|0)===0){if((h|a|s|0)===0){r=r|16;v[w]=2147483647;v[w+1|0]=-1;break L1;}else{v[w]=(j<<31)+2146435072|0;v[w+1|0]=0;break L1;}}else{A(d,0,t,s,p,n);a=d[1]|0;v[w]=d[0]|0;v[w+1|0]=a;}}else{if((h|0)===0){if((a|s|0)===0){v[w]=j<<31;v[w+1|0]=0;break L1;}else{I(a,s,d,2,d,0);}}if((f|0)===0){if((b|n|0)===0){v[w]=j<<31;v[w+1|0]=0;break L1;}else{I(b,n,d,5,d,3);f=d[5]|0;b=d[3]|0;a=d[4]|0;}}else{a=n;}h=f+(d[2]|0)|0;f=d[1]|0;l=d[0]<<10|f>>>22|1073741824;d[0]=l;f=f<<10;d[1]=f;b=b<<11|a>>>21| -2147483648;d[3]=b;a=a<<11;d[4]=a;O(l,f,b,a,d,3,d,0);l=d[3]|0;b=d[4]|0;a=(((d[1]|d[0]|0)!==0?1:0)?1:0)|b;d[4]=a;b=l<<1|b>>>31;f=h-1023|0;if((b|0)>-1){d[3]=b;a=a<<1;d[4]=a;f=h-1024|0;}else{b=l;}H(d,0,j,f,b,a);a=d[1]|0;v[w]=d[0]|0;v[w+1|0]=a;}}}function A(h,i,f,d,b,a){var n=0,l=0,j=null,k=0,p=0;j=new Int32Array(4);j[0]=f;j[1]=d;j[2]=b;j[3]=a;if((f&2146959360|0)===2146435072){n=((f&524287|d|0)!==0?1:0)?1:0;}else{n=0;}l=a>>>31|b<<1;p=l>>>0>4292870144||(a&2147483647|0)!==0&&(l|0)===-2097152?1:0;if((b&2146959360|0)===2146435072){l=((b&524287|a|0)!==0?1:0)?1:0;}else{l=0;}j[0]=f|524288;j[1]=d;j[2]=b|524288;j[3]=a;if((l|n|0)!==0){r=r|16;}if((l|0)===0){if((n|0)===0){k=p?2:0;j=p?j:j;}else{k=0;j=j;}}else{k=2;j=j;}n=j[k+1|0]|0;h[i]=j[k]|0;h[i+1|0]=n;}function I(j,h,f,g,d,e){var a=0,b=0;a=(j|0)===0?h|0:j|0;b=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(b>>>0<16777216){b=b<<8;a=a+8|0;}a=(a+((j|0)===0?32|0:0|0)|0)+(P[b>>>24]|0)|0;b=a-11|0;d[e]=(b|0)===0?j|0:(b>>>0>31?h<<(a-43|0)|0:j<<b|h>>>(43-a|0)|0)|0;d[e+1|0]=(b|0)===0?h|0:(b>>>0>31?0|0:h<<b|0)|0;f[g]=12-a|0;}function H(n,o,l,j,h,f){var a=0,d=0,t=0,b=0,s=null,p=0;L1:{L2:{L3:{L4:{s=new Int32Array(2);s[0]=h;s[1]=f;if((j&65535)>>>0>2044){if((j|0)<=2045){if((j|0)===2045){if((((f>>>0>4294966783?1:0)?1:0)+h|0)>=0){a=2045;break L4;}}else{if((j|0)<0){D(h,f,-j|0,s,0);a=s[1]|0;d=a&1023;if((d|0)===0){t=0;d=0;break L2;}else{b=r|4;r=b;t=0;break L3;}}else{a=j;break L4;}}}r=r|9;n[o]=(l<<31)+2146435072|0;n[o+1|0]=0;break L1;}else{a=j;}}d=f&1023;if((d|0)===0){t=a;d=0;a=f;break L2;}else{b=r|0;t=a;a=f;}}r=b|1;break L2;}b=((a>>>0>4294966783?1:0)?1:0)+(s[0]|0)|0;p=b>>>10;s[0]=p;a=(b<<22|a+512>>>10)&((((d|0)===512?1:0)?1:0)^ -1);s[1]=a;n[o]=(((a|p|0)===0?0|0:t<<20|0)+(l<<31)|0)+p|0;n[o+1|0]=a;break L1;}}function aj(E,F,G,J,K,M){var a=0,b=0,j=0,l=0,n=0,h=0,f=0,d=null,y=0,p=0,v=0,s=0,x=0,t=0,B=0;b=G&1048575;d=new Int32Array(6);d[0]=b;d[1]=J;j=G>>>20&2047;d[2]=j;a=K&1048575;d[3]=a;d[4]=M;l=K>>>20;n=l&2047;d[5]=n;y=(K^G)>>>31;L1:if((j|0)===2047){if((b|J|0)===0){if((n|0)===2047){if((a|M|0)===0){r=r|16;E[F]=2147483647;E[F+1|0]=-1;break L1;}else{A(d,0,G,J,K,M);a=d[1]|0;E[F]=d[0]|0;E[F+1|0]=a;break L1;}}else{E[F]=(y<<31)+2146435072|0;E[F+1|0]=0;break L1;}}else{A(d,0,G,J,K,M);a=d[1]|0;E[F]=d[0]|0;E[F+1|0]=a;}}else{switch(l&2047){case 0:{if((a|M|0)===0){a=r|0;if((j|b|J|0)===0){r=a|16;E[F]=2147483647;E[F+1|0]=-1;break L1;}else{r=a|2;E[F]=(y<<31)+2146435072|0;E[F+1|0]=0;break L1;}}else{I(a,M,d,5,d,3);}break;}case 2047:{if((a|M|0)===0){E[F]=y<<31;E[F+1|0]=0;break L1;}else{A(d,0,G,J,K,M);a=d[1]|0;E[F]=d[0]|0;E[F+1|0]=a;break L1;}break;}default:{}}if((j|0)===0){if((b|J|0)===0){E[F]=y<<31;E[F+1|0]=0;break L1;}else{I(b,J,d,2,d,0);j=d[2]|0;b=d[0]|0;a=d[1]|0;}}else{a=J;}l=j-(d[5]|0)|0;n=a>>>22;b=b<<10|n|1073741824;d[0]=b;h=a<<10;d[1]=h;j=d[4]|0;p=d[3]<<11|j>>>21| -2147483648;d[3]=p;v=j<<11;d[4]=v;f=((h>>>0>(h^ -1)>>>0?1:0)?1:0)+(b<<1)|0;j=l+1021|0;if(p>>>0<f>>>0||v>>>0<=a<<11>>>0&&(p|0)===(f|0)){a=a<<9&2147483136|n<<31;b=b>>>1;d[0]=b;d[1]=a;j=l+1022|0;}else{a=h;}ai(d,0,b,a,0,0,p,v);h=d[0]|0;f=d[1]|0;if((f&511)>>>0<3){O(p,v,h,f,d,3,d,0);l=d[3]|0;n=d[4]|0;s=d[0]|0;x=d[1]|0;t=(((x|0)!==0?1:0)<<31>>31)-s|0;B=a-n|0;s=((s|0)!==0||(s|0)===0&&(x|0)!==0?1:0)?1:0;l=((b-l|0)+((a>>>0<n>>>0?1:0)<<31>>31)|0)+((B>>>0<s>>>0?1:0)<<31>>31)|0;b=-x|0;if((l|0)<0){n=B-s|0;s=v^ -1;a=t;while(1){h=(h-1|0)+(((f|0)!==0?1:0)?1:0)|0;x=v+b|0;t=(p+a|0)+((b>>>0>s>>>0?1:0)?1:0)|0;a=(t>>>0<a>>>0||x>>>0<b>>>0&&(t|0)===(a|0)?1:0)?1:0;l=l+((n>>>0>(a^ -1)>>>0?1:0)?1:0)|0;f=f-1|0;if((l|0)<0){n=a+n|0;b=x;a=t;continue;}else{b=x;a=t;}break;}}else{a=t;}f=(((a|b|0)!==0?1:0)?1:0)|f;}H(d,0,y,j,h,f);a=d[1]|0;E[F]=d[0]|0;E[F+1|0]=a;}}function ai(t,u,v,x,y,B,E,G){var h=0,b=0,f=0,d=0,a=null,s=null,n=0,j=0,l=0,p=0;if(E>>>0<v>>>0||(E|0)===(v|0)&&G>>>0<=x>>>0){t[u]=-1;t[u+1|0]=-1;}else{a=new Int32Array(2);if(E>>>0>v>>>0){U(a,0,v,x,0,E);h=a[1]|0;}else{h=-1;}s=new Int32Array(2);O(E,G,h,0,s,0,a,0);f=s[0]|0;n=s[1]|0;d=a[0]|0;j=a[1]|0;b=(y-d|0)+((j>>>0>B>>>0?1:0)<<31>>31)|0;j=(d>>>0>y>>>0||(d|0)===(y|0)&&j>>>0>B>>>0?1:0)?1:0;l=x-n|0;d=l-j|0;f=((v-f|0)+((n>>>0>x>>>0?1:0)<<31>>31)|0)+((l>>>0<j>>>0?1:0)<<31>>31)|0;if((f|0)<0){n=E^ -1;while(1){j=b+G|0;b=(j>>>0<b>>>0?1:0)?1:0;l=d+E|0;p=b+l|0;f=(f+((d>>>0>n>>>0?1:0)?1:0)|0)+((l>>>0>(b^ -1)>>>0?1:0)?1:0)|0;h=h-1|0;if((f|0)<0){d=p;b=j;continue;}else{d=p;b=j;}break;}}if(d>>>0<E>>>0){U(a,0,d,b,0,E);f=a[0]|0;b=a[1]|0;}else{f=0;b=-1;}t[u]=f|h;t[u+1|0]=b;}}function ah(h,f,d,b){var a=0;L1:{if((h&2146435072|0)===2146435072){if((h&1048575|f|0)!==0){break L1;}}if((d&2146435072|0)===2146435072){if((d&1048575|b|0)!==0){break L1;}}a=h>>>31;if((a|0)===(d>>>31|0)){if((h|0)===(d|0)&&(f|0)===(b|0)){return 1|0;}return a^((h>>>0<d>>>0||(h|0)===(d|0)&&f>>>0<b>>>0?1:0)?1:0)|0;}if((a|0)===0){a=b|f;a=((a>>>31|(d|h)<<1|a&2147483647|0)===0?1:0)?1:0;return a|0;}return 1|0;}r=r|16;return 0|0;}function ag(p,q,n,l){var h=0,f=0,b=0,d=0,j=0,a=null,v=0,t=0,s=0;a=new Int32Array(8);V(a,0,n,l,n,l);v=a[1]|0;t=(a[0]|0)^ -2147483648;j=1;d=n;b=l;f=n;h=l;while(1){V(a,6,d,b,t,v);b=j<<1;an(a,4,aq(b+1|0,b)|0);aj(a,2,a[6]|0,a[7]|0,a[4]|0,a[5]|0);d=a[2]|0;b=a[3]|0;am(a,0,f,h,d,b);f=a[0]|0;h=a[1]|0;s=ah(1055193269,-1998362383,d&2147483647,b)|0;if((s|0)!==0){j=j+1|0;continue;}break;}p[q]=f;p[q+1|0]=h;}function af(){var a=0,b=null;b=new Int32Array(2);a=0;while(1){ag(b,0,ao[a<<1]|0,ao[(a<<1)+1|0]|0);a=a+1|0;if(a>>>0<144){continue;}break;}}function ap(b,a){af();return 0|0;}function ae(n,o,l,j,h,f){var a=0,b=0,d=null;a=(h|0)===0?f|0:h|0;b=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(b>>>0<16777216){b=b<<8;a=a+8|0;}a=(a+((h|0)===0?32|0:0|0)|0)+(P[b>>>24]|0)|0;b=a-1|0;d=new Int32Array(2);H(d,0,l,j-b|0,(b|0)===0?h|0:(b>>>0>31?f<<(a-33|0)|0:h<<b|f>>>(33-a|0)|0)|0,(b|0)===0?f|0:(b>>>0>31?0|0:f<<b|0)|0);a=d[1]|0;n[o]=d[0]|0;n[o+1|0]=a;}function U(y,z,x,v,t,s){var b=0,a=0,f=0,d=0,j=0,h=0,p=0,n=0,l=0,B=0;if((t|0)>-1&&(t>>>0<x>>>0||(t|0)===(x|0)&&s>>>0<v>>>0)){d=0;f=1;a=t;b=s;while(1){a=a<<1|b>>>31;d=d<<1|f>>>31;b=b<<1;f=f<<1;if((a|0)>-1&&(a>>>0<x>>>0||b>>>0<v>>>0&&(a|0)===(x|0))&&(d|f|0)!==0){continue;}break;}}else{d=0;f=1;a=t;b=s;}if((d|f|0)===0){a=0;b=0;}else{h=d;j=f;d=a;f=b;n=0;p=0;a=x;b=v;while(1){if(a>>>0>d>>>0||b>>>0>=f>>>0&&(a|0)===(d|0)){l=b-f|0;B=(a-d|0)+((b>>>0<f>>>0?1:0)<<31>>31)|0;a=n|h;b=p|j;n=l;p=B;}else{l=b;b=p;p=a;a=n;n=l;}j=h<<31|j>>>1;f=d<<31|f>>>1;h=h>>>1;d=d>>>1;if((j|h|0)!==0){l=b;b=n;n=a;a=p;p=l;continue;}break;}}y[z]=a;y[z+1|0]=b;}var ao=new Int32Array([0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675,0,0,1069963031, -51554879,1071011607, -51554879,1071694161, -38666159,1072060183, -51554879,1072426205, -64443599,1072742737, -38666159,1072925748, -45110519,1073108759, -51554879,1073291770, -57999239,1073474781, -64443599,1073657792, -70887959,1073791313, -38666159,1073882819,2105595309,1073974324, -45110519,1074065830,2099150949,1074157335, -51554879,1074248841,2092706589,1074340346, -57999239,1074431852,2086262229,1074523357, -64443599,1074614863,2079817869,1074706368, -70887959,1074794137,1036686755,1074839889, -38666159,1074885642, -1114019073,1074931395,2105595309,1074977148,1030242395,1075022900, -45110519,1075068653, -1120463433,1075114406,2099150949,1075160159,1023798035,1075205911, -51554879,1075251664, -1126907793,1075297417,2092706589,1075343170,1017353675]);var r=0;var P=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);ap();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");