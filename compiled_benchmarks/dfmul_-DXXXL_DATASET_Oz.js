let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var X=Math.imul;var Y=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function N(h,g,f,d,e){var c=0,a=0;if((f|0)===0){a=g;c=h;}else{if((f|0)<64){c=g|h;a=-f&63;a=(((((a|0)===0?c|0:(a>>>0>31?g<<(a-32|0)|0:c<<a|g>>>(32-a|0)|0)|0)|0)!==0?1:0)?1:0)|(f>>>0>31?h>>>(f-32|0)|0:h<<(32-f|0)|g>>>f|0);c=f>>>0>31?0|0:h>>>f|0;}else{a=((g|h|0)!==0?1:0)?1:0;c=0;}}d[e]=c;d[e+1|0]=a;}function M(O,P,Q,R,S,T,U,V){var g=0,d=0,a=0,D=0,c=0,B=0,A=0,z=0,C=0,r=0,f=0,i=0,s=0,E=0,F=0,H=0,q=0,o=0,h=0,n=0,m=0,j=0,G=0,u=0;g=R>>>16;d=P>>>16;a=R&65535;D=X(a,d)|0;c=P&65535;B=X(g,c)|0;A=D+B|0;z=X(a,c)|0;C=A<<16;r=Q>>>16;f=Q&65535;i=X(f,d)|0;s=X(r,c)|0;E=i+s|0;c=X(f,c)|0;F=E<<16;H=F+c|0;q=O>>>16;o=X(a,q)|0;h=O&65535;n=X(g,h)|0;m=o+n|0;a=X(a,h)|0;j=m<<16;o=(((m>>>16)+(X(g,q)|0)|0)+(((o>>>0>(n^ -1)>>>0?1:0)?1:0)<<16)|0)+((j>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=j+a|0;n=X(f,q)|0;m=X(r,h)|0;j=n+m|0;f=X(f,h)|0;h=j<<16;G=h+f|0;u=a+H|0;c=((((E>>>16)+(X(r,d)|0)|0)+(((i>>>0>(s^ -1)>>>0?1:0)?1:0)<<16)|0)+((F>>>0>(c^ -1)>>>0?1:0)?1:0)|0)+((H>>>0>(a^ -1)>>>0?1:0)?1:0)|0;i=c+o|0;s=i+G|0;g=((((A>>>16)+(X(g,d)|0)|0)+(((D>>>0>(B^ -1)>>>0?1:0)?1:0)<<16)|0)+((C>>>0>(z^ -1)>>>0?1:0)?1:0)|0)+u|0;d=(g>>>0<u>>>0?1:0)?1:0;U[V]=g;U[V+1|0]=C+z|0;S[T]=((((((j>>>16)+(X(r,q)|0)|0)+(((n>>>0>(m^ -1)>>>0?1:0)?1:0)<<16)|0)+((h>>>0>(f^ -1)>>>0?1:0)?1:0)|0)+((G>>>0>(i^ -1)>>>0?1:0)?1:0)|0)+((s>>>0>(d^ -1)>>>0?1:0)?1:0)|0)+((i>>>0<o>>>0||u>>>0<a>>>0&&(c|0)===0?1:0)?1:0)|0;S[T+1|0]=s+d|0;}function K(s,t,r,q,o,n){var a=0,c=0,g=0,d=0,j=0,f=0,m=0,i=0,h=null;m=(o^r)>>>31;f=o>>>20&2047;i=o&1048575;a=r>>>20&2047;g=r&1048575;h=new Int32Array(4);L1:if((a|0)===2047){if((g|q|0)===0){a=i|n;if((f|0)!==2047||(a|0)===0){if((a|f|0)===0){l=l|16;s[t]=2147483647;s[t+1|0]=-1;break L1;}else{s[t]=(m<<31)+2146435072|0;s[t+1|0]=0;break L1;}}}v(h,0,r,q,o,n);a=h[1]|0;s[t]=h[0]|0;s[t+1|0]=a;}else{if((f|0)===2047){if((i|n|0)===0){if((g|q|a|0)===0){l=l|16;s[t]=2147483647;s[t+1|0]=-1;break L1;}else{s[t]=(m<<31)+2146435072|0;s[t+1|0]=0;break L1;}}else{v(h,0,r,q,o,n);a=h[1]|0;s[t]=h[0]|0;s[t+1|0]=a;}}else{if((a|0)===0){if((g|q|0)===0){s[t]=m<<31;s[t+1|0]=0;break L1;}else{a=(g|0)===0?q|0:g|0;c=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(c>>>0<16777216){c=c<<8;a=a+8|0;}a=(a+((g|0)===0?32|0:0|0)|0)+(w[c>>>24]|0)|0;c=a-11|0;g=(c|0)===0?g|0:(c>>>0>31?q<<(a-43|0)|0:g<<c|q>>>(43-a|0)|0)|0;c=(c|0)===0?q|0:(c>>>0>31?0|0:q<<c|0)|0;a=12-a|0;}}else{c=q;}if((f|0)===0){if((i|n|0)===0){s[t]=m<<31;s[t+1|0]=0;break L1;}else{d=(i|0)===0?n|0:i|0;j=d>>>0<65536?d<<16|0:d|0;d=d>>>0<65536?16|0:0|0;if(j>>>0<16777216){j=j<<8;d=d+8|0;}f=(d+((i|0)===0?32|0:0|0)|0)+(w[j>>>24]|0)|0;d=f-11|0;j=(d|0)===0?i|0:(d>>>0>31?n<<(f-43|0)|0:i<<d|n>>>(43-f|0)|0)|0;d=(d|0)===0?n|0:(d>>>0>31?0|0:n<<d|0)|0;f=12-f|0;}}else{j=i;d=n;}f=f+a|0;M(c>>>22|g<<10|1073741824,c<<10,d>>>21|j<<11| -2147483648,d<<11,h,2,h,0);d=h[2]|0;c=h[3]|0;a=(((h[1]|h[0]|0)!==0?1:0)?1:0)|c;h[3]=a;c=c>>>31|d<<1;g=f-1023|0;if((c|0)>-1){h[2]=c;a=a<<1;h[3]=a;g=f-1024|0;}else{c=d;}J(h,0,m,g,c,a);a=h[1]|0;s[t]=h[0]|0;s[t+1|0]=a;}}}function v(j,k,i,h,g,f){var d=0,c=0,a=null,b=0,m=0;a=new Int32Array(4);a[0]=i;a[1]=h;a[2]=g;a[3]=f;if((i&2146959360|0)===2146435072){d=((i&524287|h|0)!==0?1:0)?1:0;}else{d=0;}c=f>>>31|g<<1;m=c>>>0>4292870144||(f&2147483647|0)!==0&&(c|0)===-2097152?1:0;if((g&2146959360|0)===2146435072){c=((g&524287|f|0)!==0?1:0)?1:0;}else{c=0;}a[0]=i|524288;a[1]=h;a[2]=g|524288;a[3]=f;if((c|d|0)!==0){l=l|16;}if((c|0)===0){if((d|0)===0){b=m?2:0;a=m?a:a;}else{b=0;a=a;}}else{b=2;a=a;}d=a[b+1|0]|0;j[k]=a[b]|0;j[k+1|0]=d;}function J(o,p,n,m,j,i){var a=0,d=0,h=0,c=0,g=null,f=0;L1:{L2:{L3:{L4:{g=new Int32Array(2);g[0]=j;g[1]=i;if((m&65535)>>>0>2044){if((m|0)<=2045){if((m|0)===2045){if((((i>>>0>4294966783?1:0)?1:0)+j|0)>=0){a=2045;break L4;}}else{if((m|0)<0){N(j,i,-m|0,g,0);a=g[1]|0;d=a&1023;if((d|0)===0){h=0;d=0;break L2;}else{c=l|4;l=c;h=0;break L3;}}else{a=m;break L4;}}}l=l|9;o[p]=(n<<31)+2146435072|0;o[p+1|0]=0;break L1;}else{a=m;}}d=i&1023;if((d|0)===0){h=a;d=0;a=i;break L2;}else{c=l|0;h=a;a=i;}}l=c|1;break L2;}c=(g[0]|0)+((a>>>0>4294966783?1:0)?1:0)|0;f=c>>>10;g[0]=f;a=(c<<22|a+512>>>10)&((((d|0)===512?1:0)?1:0)^ -1);g[1]=a;o[p]=(f+(n<<31)|0)+((a|f|0)===0?0|0:h<<20|0)|0;o[p+1|0]=a;break L1;}}function I(){var a=0,f=null,c=0,d=0;f=new Int32Array(2);a=0;while(1){c=a<<1;d=c+1|0;K(f,0,y[c]|0,y[d]|0,x[c]|0,x[d]|0);a=a+1|0;if(a>>>0<320){continue;}break;}}function W(c,a){I();return 0|0;}var y=new Int32Array([2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0]);var x=new Int32Array([ -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0]);var l=0;var w=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);W();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");