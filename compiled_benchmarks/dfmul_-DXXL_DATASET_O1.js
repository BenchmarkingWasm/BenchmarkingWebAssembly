let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var Z=Math.imul;var $=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function O(i,h,f,d,e){var c=0,a=0;if((f|0)===0){a=h;c=i;}else{if((f|0)<64){c=h|i;a=-f&63;a=(((((a|0)===0?c|0:(a>>>0>31?h<<(a-32|0)|0:c<<a|h>>>(32-a|0)|0)|0)|0)!==0?1:0)?1:0)|(f>>>0>31?i>>>(f-32|0)|0:i<<(32-f|0)|h>>>f|0);c=f>>>0>31?0|0:i>>>f|0;}else{a=((h|i|0)!==0?1:0)?1:0;c=0;}}d[e]=c;d[e+1|0]=a;}function N(Q,R,S,T,U,V,W,X){var h=0,d=0,a=0,E=0,c=0,C=0,B=0,A=0,D=0,t=0,f=0,k=0,u=0,F=0,G=0,I=0,r=0,p=0,i=0,o=0,n=0,l=0,H=0,v=0;h=T>>>16;d=R>>>16;a=T&65535;E=Z(a,d)|0;c=R&65535;C=Z(h,c)|0;B=E+C|0;A=Z(a,c)|0;D=B<<16;t=S>>>16;f=S&65535;k=Z(f,d)|0;u=Z(t,c)|0;F=k+u|0;c=Z(f,c)|0;G=F<<16;I=G+c|0;r=Q>>>16;p=Z(a,r)|0;i=Q&65535;o=Z(h,i)|0;n=p+o|0;a=Z(a,i)|0;l=n<<16;p=(((n>>>16)+(Z(h,r)|0)|0)+(((p>>>0>(o^ -1)>>>0?1:0)?1:0)<<16)|0)+((l>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=l+a|0;o=Z(f,r)|0;n=Z(t,i)|0;l=o+n|0;f=Z(f,i)|0;i=l<<16;H=i+f|0;v=a+I|0;c=((((F>>>16)+(Z(t,d)|0)|0)+(((k>>>0>(u^ -1)>>>0?1:0)?1:0)<<16)|0)+((G>>>0>(c^ -1)>>>0?1:0)?1:0)|0)+((I>>>0>(a^ -1)>>>0?1:0)?1:0)|0;k=c+p|0;u=k+H|0;h=((((B>>>16)+(Z(h,d)|0)|0)+(((E>>>0>(C^ -1)>>>0?1:0)?1:0)<<16)|0)+((D>>>0>(A^ -1)>>>0?1:0)?1:0)|0)+v|0;d=(h>>>0<v>>>0?1:0)?1:0;W[X]=h;W[X+1|0]=D+A|0;U[V]=((((((l>>>16)+(Z(t,r)|0)|0)+(((o>>>0>(n^ -1)>>>0?1:0)?1:0)<<16)|0)+((i>>>0>(f^ -1)>>>0?1:0)?1:0)|0)+((H>>>0>(k^ -1)>>>0?1:0)?1:0)|0)+((u>>>0>(d^ -1)>>>0?1:0)?1:0)|0)+((k>>>0<p>>>0||v>>>0<a>>>0&&(c|0)===0?1:0)?1:0)|0;U[V+1|0]=u+d|0;}function M(r,s,p,o,n,l){var a=0,c=0,f=0,d=null,h=0,i=0,k=0;a=p&1048575;d=new Int32Array(6);d[0]=a;d[1]=o;h=p>>>20&2047;d[2]=h;c=n&1048575;d[3]=c;d[4]=l;f=n>>>20&2047;d[5]=f;i=(n^p)>>>31;L1:if((h|0)===2047){if((a|o|0)===0){if((f|0)!==2047||(c|l|0)===0){if((c|f|l|0)===0){j=j|16;r[s]=2147483647;r[s+1|0]=-1;break L1;}else{r[s]=(i<<31)+2146435072|0;r[s+1|0]=0;break L1;}}}x(d,0,p,o,n,l);a=d[1]|0;r[s]=d[0]|0;r[s+1|0]=a;}else{if((f|0)===2047){if((c|l|0)===0){if((h|a|o|0)===0){j=j|16;r[s]=2147483647;r[s+1|0]=-1;break L1;}else{r[s]=(i<<31)+2146435072|0;r[s+1|0]=0;break L1;}}else{x(d,0,p,o,n,l);a=d[1]|0;r[s]=d[0]|0;r[s+1|0]=a;}}else{if((h|0)===0){if((a|o|0)===0){r[s]=i<<31;r[s+1|0]=0;break L1;}else{w(a,o,d,2,d,0);}}if((f|0)===0){if((c|l|0)===0){r[s]=i<<31;r[s+1|0]=0;break L1;}else{w(c,l,d,5,d,3);f=d[5]|0;c=d[3]|0;a=d[4]|0;}}else{a=l;}h=f+(d[2]|0)|0;f=d[1]|0;k=d[0]<<10|f>>>22|1073741824;d[0]=k;f=f<<10;d[1]=f;c=c<<11|a>>>21| -2147483648;d[3]=c;a=a<<11;d[4]=a;N(k,f,c,a,d,3,d,0);c=d[4]|0;a=(((d[1]|d[0]|0)!==0?1:0)?1:0)|c;d[4]=a;k=d[3]|0;c=k<<1|c>>>31;f=h-1023|0;if((c|0)>-1){d[3]=c;a=a<<1;d[4]=a;f=h-1024|0;}else{c=k;}K(d,0,i,f,c,a);a=d[1]|0;r[s]=d[0]|0;r[s+1|0]=a;}}}function x(l,m,k,i,h,f){var d=0,c=0,a=null,b=0,n=0;a=new Int32Array(4);a[0]=k;a[1]=i;a[2]=h;a[3]=f;if((k&2146959360|0)===2146435072){d=((k&524287|i|0)!==0?1:0)?1:0;}else{d=0;}c=f>>>31|h<<1;n=c>>>0>4292870144||(f&2147483647|0)!==0&&(c|0)===-2097152?1:0;if((h&2146959360|0)===2146435072){c=((h&524287|f|0)!==0?1:0)?1:0;}else{c=0;}a[0]=k|524288;a[2]=h|524288;if((c|d|0)!==0){j=j|16;}if((c|0)===0){if((d|0)===0){b=n?2:0;a=n?a:a;}else{b=0;a=a;}}else{b=2;a=a;}d=a[b+1|0]|0;l[m]=a[b]|0;l[m+1|0]=d;}function w(i,h,f,g,d,e){var a=0,c=0;a=(i|0)===0?h|0:i|0;c=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(c>>>0<16777216){c=c<<8;a=a+8|0;}a=(a+((i|0)===0?32|0:0|0)|0)+(P[c>>>24]|0)|0;c=a-11|0;d[e]=(c|0)===0?i|0:(c>>>0>31?h<<(a-43|0)|0:i<<c|h>>>(43-a|0)|0)|0;d[e+1|0]=(c|0)===0?h|0:(c>>>0>31?0|0:h<<c|0)|0;f[g]=12-a|0;}function K(p,q,o,n,l,k){var a=0,d=0,i=0,c=0,h=null,f=0;L1:{L2:{L3:{L4:{h=new Int32Array(2);h[0]=l;h[1]=k;if((n&65535)>>>0>2044){if((n|0)<=2045){if((n|0)===2045){if((((k>>>0>4294966783?1:0)?1:0)+l|0)>=0){a=2045;break L4;}}else{if((n|0)<0){O(l,k,-n|0,h,0);a=h[1]|0;d=a&1023;if((d|0)===0){i=0;d=0;break L2;}else{c=j|4;j=c;i=0;break L3;}}else{a=n;break L4;}}}j=j|9;p[q]=(o<<31)+2146435072|0;p[q+1|0]=0;break L1;}else{a=n;}}d=k&1023;if((d|0)===0){i=a;d=0;a=k;break L2;}else{c=j|0;i=a;a=k;}}j=c|1;break L2;}c=((a>>>0>4294966783?1:0)?1:0)+(h[0]|0)|0;f=c>>>10;h[0]=f;a=(c<<22|a+512>>>10)&((((d|0)===512?1:0)?1:0)^ -1);h[1]=a;p[q]=(f+(o<<31)|0)+((a|f|0)===0?0|0:i<<20|0)|0;p[q+1|0]=a;break L1;}}function J(){var a=0,f=null,c=0,d=0;f=new Int32Array(2);a=0;while(1){c=a<<1;d=c+1|0;M(f,0,z[c]|0,z[d]|0,y[c]|0,y[d]|0);a=a+1|0;if(a>>>0<160){continue;}break;}}function Y(c,a){J();return 0|0;}var z=new Int32Array([2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0]);var y=new Int32Array([ -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0]);var j=0;var P=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);Y();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");