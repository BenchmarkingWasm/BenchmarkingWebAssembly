let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var $=Math.imul;var aa=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function G(N,O,P,Q,R,S,T,U){var e=0,c=0,a=0,B=0,b=0,z=0,x=0,w=0,A=0,r=0,d=0,g=0,s=0,C=0,K=0,V=0,q=0,p=0,f=0,k=0,i=0,h=0,M=0,u=0;e=Q>>>16;c=O>>>16;a=Q&65535;B=$(a,c)|0;b=O&65535;z=$(e,b)|0;x=B+z|0;w=$(a,b)|0;A=x<<16;r=P>>>16;d=P&65535;g=$(d,c)|0;s=$(r,b)|0;C=g+s|0;b=$(d,b)|0;K=C<<16;V=K+b|0;q=N>>>16;p=$(a,q)|0;f=N&65535;k=$(e,f)|0;i=p+k|0;a=$(a,f)|0;h=i<<16;p=(((i>>>16)+($(e,q)|0)|0)+(((p>>>0>(k^ -1)>>>0?1:0)?1:0)<<16)|0)+((h>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=h+a|0;k=$(d,q)|0;i=$(r,f)|0;h=k+i|0;d=$(d,f)|0;f=h<<16;M=f+d|0;u=a+V|0;b=((((C>>>16)+($(r,c)|0)|0)+(((g>>>0>(s^ -1)>>>0?1:0)?1:0)<<16)|0)+((K>>>0>(b^ -1)>>>0?1:0)?1:0)|0)+((V>>>0>(a^ -1)>>>0?1:0)?1:0)|0;g=b+p|0;s=g+M|0;e=((((x>>>16)+($(e,c)|0)|0)+(((B>>>0>(z^ -1)>>>0?1:0)?1:0)<<16)|0)+((A>>>0>(w^ -1)>>>0?1:0)?1:0)|0)+u|0;c=(e>>>0<u>>>0?1:0)?1:0;T[U]=e;T[U+1|0]=A+w|0;R[S]=((((((h>>>16)+($(r,q)|0)|0)+(((k>>>0>(i^ -1)>>>0?1:0)?1:0)<<16)|0)+((f>>>0>(d^ -1)>>>0?1:0)?1:0)|0)+((M>>>0>(g^ -1)>>>0?1:0)?1:0)|0)+((s>>>0>(c^ -1)>>>0?1:0)?1:0)|0)+((g>>>0<p>>>0||u>>>0<a>>>0&&(b|0)===0?1:0)?1:0)|0;R[S+1|0]=s+c|0;}function Y(x,y,z,A,B,C){var a=0,b=0,i=null,j=0,f=0,c=0,d=0,e=0,h=0,g=null,q=0,s=0,p=0,r=0,k=0,u=0,w=0;g=new Int32Array(8);q=(B^z)>>>31;b=B>>>20;a=b&2047;f=B&1048575;c=z>>>20&2047;e=z&1048575;L1:if((c|0)===2047){if((e|A|0)===0){if((a|0)===2047){if((f|C|0)===0){n=n|16;x[y]=2147483647;x[y+1|0]=-1;break L1;}else{g[0]=z;g[1]=A;g[2]=B;g[3]=C;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}b=C>>>31|B<<1;f=b>>>0>4292870144||(C&2147483647|0)!==0&&(b|0)===-2097152?1:0;if((B&2146959360|0)===2146435072){b=((B&524287|C|0)!==0?1:0)?1:0;}else{b=0;}g[0]=z|524288;g[1]=A;g[2]=B|524288;g[3]=C;if((b|a|0)!==0){n=n|16;}if((b|0)===0){if((a|0)===0){j=f?2:0;i=f?g:g;}else{j=0;i=g;}}else{j=2;i=g;}a=i[j]|0;b=i[j+1|0]|0;x[y]=a;x[y+1|0]=b;break L1;}}else{x[y]=(q<<31)+2146435072|0;x[y+1|0]=0;break L1;}}else{g[0]=z;g[1]=A;g[2]=B;g[3]=C;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}b=C>>>31|B<<1;f=b>>>0>4292870144||(C&2147483647|0)!==0&&(b|0)===-2097152?1:0;if((B&2146959360|0)===2146435072){b=((B&524287|C|0)!==0?1:0)?1:0;}else{b=0;}g[0]=z|524288;g[1]=A;g[2]=B|524288;g[3]=C;if((b|a|0)!==0){n=n|16;}if((b|0)===0){if((a|0)===0){j=f?2:0;i=f?g:g;}else{j=0;i=g;}}else{j=2;i=g;}a=i[j]|0;b=i[j+1|0]|0;x[y]=a;x[y+1|0]=b;}}else{switch(b&2047){case 0:{if((f|C|0)===0){a=n|0;if((e|A|c|0)===0){n=a|16;x[y]=2147483647;x[y+1|0]=-1;break L1;}else{n=a|2;x[y]=(q<<31)+2146435072|0;x[y+1|0]=0;break L1;}}else{a=(f|0)===0?C|0:f|0;b=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(b>>>0<16777216){b=b<<8;a=a+8|0;}a=(a+((f|0)===0?32|0:0|0)|0)+(H[b>>>24]|0)|0;b=a-11|0;f=(b|0)===0?f|0:(b>>>0>31?C<<(a-43|0)|0:f<<b|C>>>(43-a|0)|0)|0;b=(b|0)===0?C|0:(b>>>0>31?0|0:C<<b|0)|0;a=12-a|0;}break;}case 2047:{if((f|C|0)===0){x[y]=q<<31;x[y+1|0]=0;break L1;}else{g[0]=z;g[1]=A;g[2]=B;g[3]=C;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}b=C>>>31|B<<1;f=b>>>0>4292870144||(C&2147483647|0)!==0&&(b|0)===-2097152?1:0;if((B&2146959360|0)===2146435072){b=((B&524287|C|0)!==0?1:0)?1:0;}else{b=0;}g[0]=z|524288;g[1]=A;g[2]=B|524288;g[3]=C;if((b|a|0)!==0){n=n|16;}if((b|0)===0){if((a|0)===0){j=f?2:0;i=f?g:g;}else{j=0;i=g;}}else{j=2;i=g;}a=i[j]|0;b=i[j+1|0]|0;x[y]=a;x[y+1|0]=b;break L1;}break;}default:{b=C;}}if((c|0)===0){if((e|A|0)===0){x[y]=q<<31;x[y+1|0]=0;break L1;}else{c=(e|0)===0?A|0:e|0;d=c>>>0<65536?c<<16|0:c|0;c=c>>>0<65536?16|0:0|0;if(d>>>0<16777216){d=d<<8;c=c+8|0;}c=(c+((e|0)===0?32|0:0|0)|0)+(H[d>>>24]|0)|0;d=c-11|0;e=(d|0)===0?e|0:(d>>>0>31?A<<(c-43|0)|0:e<<d|A>>>(43-c|0)|0)|0;d=(d|0)===0?A|0:(d>>>0>31?0|0:A<<d|0)|0;c=12-c|0;}}else{d=A;}c=c-a|0;h=d>>>22;e=h|e<<10|1073741824;s=b>>>21|f<<11| -2147483648;a=d<<10;p=(e<<1)+((a>>>0>(a^ -1)>>>0?1:0)?1:0)|0;r=b<<11;f=c+1021|0;if(s>>>0<p>>>0||r>>>0<=d<<11>>>0&&(s|0)===(p|0)){a=h<<31|d<<9&2147483136;f=c+1022|0;b=e>>>1;}else{b=e;}X(g,4,b,a,s,r);p=g[4]|0;k=g[5]|0;if((k&511)>>>0<3){G(s,r,p,k,g,6,g,4);d=g[6]|0;e=g[7]|0;h=g[4]|0;u=g[5]|0;c=(((u|0)!==0?1:0)<<31>>31)-h|0;w=a-e|0;h=((h|0)!==0||(h|0)===0&&(u|0)!==0?1:0)?1:0;e=((b-d|0)+((a>>>0<e>>>0?1:0)<<31>>31)|0)+((w>>>0<h>>>0?1:0)<<31>>31)|0;d=-u|0;if((e|0)<0){h=w-h|0;u=r^ -1;b=p;a=k;while(1){b=(((a|0)===0?1:0)<<31>>31)+b|0;p=d+r|0;k=(c+s|0)+((d>>>0>u>>>0?1:0)?1:0)|0;c=(k>>>0<c>>>0||p>>>0<d>>>0&&(k|0)===(c|0)?1:0)?1:0;e=((h>>>0>(c^ -1)>>>0?1:0)?1:0)+e|0;a=a-1|0;if((e|0)<0){h=c+h|0;d=p;c=k;continue;}else{d=p;c=k;}break;}}else{b=p;a=k;}a=(((d|c|0)!==0?1:0)?1:0)|a;}else{b=p;a=k;}W(g,4,q,f,b,a);a=g[5]|0;x[y]=g[4]|0;x[y+1|0]=a;}}function X(u,v,s,r,q,p){var e=0,d=0,c=0,b=0,a=null,k=null,h=0,f=0,g=0,i=0;if(s>>>0>q>>>0||(s|0)===(q|0)&&p>>>0<=r>>>0){u[v]=-1;u[v+1|0]=-1;}else{a=new Int32Array(2);if(s>>>0<q>>>0){F(a,0,s,r,0,q);e=a[1]|0;}else{e=-1;}k=new Int32Array(2);G(q,p,e,0,k,0,a,0);d=k[0]|0;h=k[1]|0;b=a[0]|0;f=a[1]|0;c=(((f|0)!==0?1:0)<<31>>31)-b|0;f=((b|0)!==0||(b|0)===0&&(f|0)!==0?1:0)?1:0;g=r-h|0;b=g-f|0;d=((s-d|0)+((h>>>0>r>>>0?1:0)<<31>>31)|0)+((g>>>0<f>>>0?1:0)<<31>>31)|0;if((d|0)<0){h=q^ -1;f=e;e=d;d=f;while(1){f=c+p|0;c=(f>>>0<c>>>0?1:0)?1:0;g=b+q|0;i=c+g|0;e=(((b>>>0>h>>>0?1:0)?1:0)+e|0)+((g>>>0>(c^ -1)>>>0?1:0)?1:0)|0;d=d-1|0;if((e|0)<0){b=i;c=f;continue;}else{b=i;c=f;e=d;}break;}}if(b>>>0<q>>>0){F(a,0,b,c,0,q);c=a[0]|0;d=a[1]|0;}else{c=0;d=-1;}u[v]=c|e;u[v+1|0]=d;}}function W(k,l,i,h,g,f){var a=0,c=0,b=0,d=0,e=0;L1:{L2:{L3:{L4:{if((h&65535)>>>0>2044){if((h|0)<=2045){if((h|0)===2045){if((((f>>>0>4294966783?1:0)?1:0)+g|0)>=0){a=2045;break L4;}}else{if((h|0)<0){if((h|0)>-64){a=-h|0;b=a>>>0>31?0|0:g>>>a|0;c=h&63;d=(((((c|0)===0?f|g|0:(c>>>0>31?f<<(c-32|0)|0:f>>>(32-c|0)|g<<c|f<<c|0)|0)|0)!==0?1:0)?1:0)|(a>>>0>31?g>>>( -32-h|0)|0:f>>>a|g<<(h+32|0)|0);}else{d=((f|g|0)!==0?1:0)?1:0;b=0;}a=d&1023;if((a|0)===0){c=0;a=0;break L2;}else{e=n|4;n=e;c=0;break L3;}}else{a=h;break L4;}}}n=n|9;k[l]=(i<<31)+2146435072|0;k[l+1|0]=0;break L1;}else{a=h;}}c=f&1023;if((c|0)===0){c=a;d=f;b=g;a=0;break L2;}else{e=n|0;b=a;a=c;c=b;d=f;b=g;}}n=e|1;break L2;}b=((d>>>0>4294966783?1:0)?1:0)+b|0;a=(b<<22|d+512>>>10)&((((a|0)===512?1:0)?1:0)^ -1);b=b>>>10;k[l]=(b+(i<<31)|0)+((a|b|0)===0?0|0:c<<20|0)|0;k[l+1|0]=a;break L1;}}function Z(f,e){var a=0,d=null,b=0,c=0;d=new Int32Array(2);a=0;while(1){b=a<<1;c=b+1|0;Y(d,0,J[b]|0,J[c]|0,I[b]|0,I[c]|0);a=a+1|0;if(a>>>0<352){continue;}break;}return 0|0;}function F(s,t,r,q,p,k){var b=0,a=0,d=0,c=0,f=0,e=0,i=0,h=0,g=0,u=0;if((p|0)>-1&&(p>>>0<r>>>0||(p|0)===(r|0)&&k>>>0<q>>>0)){c=0;d=1;a=p;b=k;while(1){a=a<<1|b>>>31;c=c<<1|d>>>31;b=b<<1;d=d<<1;if((a|0)>-1&&(a>>>0<r>>>0||b>>>0<q>>>0&&(a|0)===(r|0))&&(c|d|0)!==0){continue;}break;}}else{c=0;d=1;a=p;b=k;}if((c|d|0)===0){a=0;b=0;}else{e=c;f=d;c=a;d=b;h=0;i=0;a=r;b=q;while(1){if(a>>>0>c>>>0||b>>>0>=d>>>0&&(a|0)===(c|0)){g=b-d|0;u=(a-c|0)+((b>>>0<d>>>0?1:0)<<31>>31)|0;a=h|e;b=i|f;h=g;i=u;}else{g=b;b=i;i=a;a=h;h=g;}f=e<<31|f>>>1;d=c<<31|d>>>1;e=e>>>1;c=c>>>1;if((f|e|0)!==0){g=b;b=h;h=a;a=i;i=g;continue;}break;}}s[t]=a;s[t+1|0]=b;}var J=new Int32Array([2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0,2147418112,0,2146435072,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1074266112,0, -1073217536,0,1074266112,0, -1073217536,0,1073741824,0, -1073741824,0,1073741824,0, -1073741824,0,1072693248,0, -1074790400,0,1072693248,0, -1074790400,0]);var I=new Int32Array([1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,0,0,0,0,1072693248,0,1072693248,0,1073741824,0,1073741824,0, -1073741824,0, -1073741824,0,1074790400,0,1074790400,0, -1072693248,0, -1072693248,0,1073217536,0,1073217536,0, -1074266112,0, -1074266112,0]);var n=0;var H=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);Z();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");