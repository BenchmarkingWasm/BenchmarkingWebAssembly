let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var U=Math.imul;var V=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function J(K,M,N,O,P,Q,R,S){var e=0,c=0,a=0,C=0,b=0,A=0,z=0,y=0,B=0,r=0,d=0,g=0,s=0,D=0,E=0,G=0,q=0,p=0,f=0,n=0,m=0,k=0,F=0,u=0;e=O>>>16;c=M>>>16;a=O&65535;C=U(a,c)|0;b=M&65535;A=U(e,b)|0;z=C+A|0;y=U(a,b)|0;B=z<<16;r=N>>>16;d=N&65535;g=U(d,c)|0;s=U(r,b)|0;D=g+s|0;b=U(d,b)|0;E=D<<16;G=E+b|0;q=K>>>16;p=U(a,q)|0;f=K&65535;n=U(e,f)|0;m=p+n|0;a=U(a,f)|0;k=m<<16;p=(((m>>>16)+(U(e,q)|0)|0)+(((p>>>0>(n^ -1)>>>0?1:0)?1:0)<<16)|0)+((k>>>0>(a^ -1)>>>0?1:0)?1:0)|0;a=k+a|0;n=U(d,q)|0;m=U(r,f)|0;k=n+m|0;d=U(d,f)|0;f=k<<16;F=f+d|0;u=a+G|0;b=((((D>>>16)+(U(r,c)|0)|0)+(((g>>>0>(s^ -1)>>>0?1:0)?1:0)<<16)|0)+((E>>>0>(b^ -1)>>>0?1:0)?1:0)|0)+((G>>>0>(a^ -1)>>>0?1:0)?1:0)|0;g=b+p|0;s=g+F|0;e=((((z>>>16)+(U(e,c)|0)|0)+(((C>>>0>(A^ -1)>>>0?1:0)?1:0)<<16)|0)+((B>>>0>(y^ -1)>>>0?1:0)?1:0)|0)+u|0;c=(e>>>0<u>>>0?1:0)?1:0;R[S]=e;R[S+1|0]=B+y|0;P[Q]=((((((k>>>16)+(U(r,q)|0)|0)+(((n>>>0>(m^ -1)>>>0?1:0)?1:0)<<16)|0)+((f>>>0>(d^ -1)>>>0?1:0)?1:0)|0)+((F>>>0>(g^ -1)>>>0?1:0)?1:0)|0)+((s>>>0>(c^ -1)>>>0?1:0)?1:0)|0)+((g>>>0<p>>>0||u>>>0<a>>>0&&(b|0)===0?1:0)?1:0)|0;P[Q+1|0]=s+c|0;}function I(s,t,r,q,p,n){var a=0,b=0,k=null,l=0,d=0,c=0,e=0,g=0,f=null,m=0;f=new Int32Array(8);m=(p^r)>>>31;c=p>>>20&2047;g=p&1048575;a=r>>>20&2047;d=r&1048575;L1:if((a|0)===2047){if((d|q|0)===0){a=g|n;if((c|0)!==2047||(a|0)===0){if((a|c|0)===0){h=h|16;s[t]=2147483647;s[t+1|0]=-1;break L1;}else{s[t]=(m<<31)+2146435072|0;s[t+1|0]=0;break L1;}}}f[0]=r;f[1]=q;f[2]=p;f[3]=n;if((r&2146959360|0)===2146435072){a=((r&524287|q|0)!==0?1:0)?1:0;}else{a=0;}b=n>>>31|p<<1;d=b>>>0>4292870144||(n&2147483647|0)!==0&&(b|0)===-2097152?1:0;if((p&2146959360|0)===2146435072){b=((p&524287|n|0)!==0?1:0)?1:0;}else{b=0;}f[0]=r|524288;f[1]=q;f[2]=p|524288;f[3]=n;if((b|a|0)!==0){h=h|16;}if((b|0)===0){if((a|0)===0){l=d?2:0;k=d?f:f;}else{l=0;k=f;}}else{l=2;k=f;}a=k[l]|0;b=k[l+1|0]|0;s[t]=a;s[t+1|0]=b;}else{if((c|0)===2047){if((g|n|0)===0){if((d|q|a|0)===0){h=h|16;s[t]=2147483647;s[t+1|0]=-1;break L1;}else{s[t]=(m<<31)+2146435072|0;s[t+1|0]=0;break L1;}}else{f[0]=r;f[1]=q;f[2]=p;f[3]=n;if((r&2146959360|0)===2146435072){a=((r&524287|q|0)!==0?1:0)?1:0;}else{a=0;}b=n>>>31|p<<1;d=b>>>0>4292870144||(n&2147483647|0)!==0&&(b|0)===-2097152?1:0;if((p&2146959360|0)===2146435072){b=((p&524287|n|0)!==0?1:0)?1:0;}else{b=0;}f[0]=r|524288;f[1]=q;f[2]=p|524288;f[3]=n;if((b|a|0)!==0){h=h|16;}if((b|0)===0){if((a|0)===0){l=d?2:0;k=d?f:f;}else{l=0;k=f;}}else{l=2;k=f;}a=k[l]|0;b=k[l+1|0]|0;s[t]=a;s[t+1|0]=b;}}else{if((a|0)===0){if((d|q|0)===0){s[t]=m<<31;s[t+1|0]=0;break L1;}else{a=(d|0)===0?q|0:d|0;b=a>>>0<65536?a<<16|0:a|0;a=a>>>0<65536?16|0:0|0;if(b>>>0<16777216){b=b<<8;a=a+8|0;}a=(a+((d|0)===0?32|0:0|0)|0)+(v[b>>>24]|0)|0;b=a-11|0;d=(b|0)===0?d|0:(b>>>0>31?q<<(a-43|0)|0:d<<b|q>>>(43-a|0)|0)|0;b=(b|0)===0?q|0:(b>>>0>31?0|0:q<<b|0)|0;a=12-a|0;}}else{b=q;}if((c|0)===0){if((g|n|0)===0){s[t]=m<<31;s[t+1|0]=0;break L1;}else{c=(g|0)===0?n|0:g|0;e=c>>>0<65536?c<<16|0:c|0;c=c>>>0<65536?16|0:0|0;if(e>>>0<16777216){e=e<<8;c=c+8|0;}c=(c+((g|0)===0?32|0:0|0)|0)+(v[e>>>24]|0)|0;e=c-11|0;g=(e|0)===0?g|0:(e>>>0>31?n<<(c-43|0)|0:g<<e|n>>>(43-c|0)|0)|0;e=(e|0)===0?n|0:(e>>>0>31?0|0:n<<e|0)|0;c=12-c|0;}}else{e=n;}c=c+a|0;J(b>>>22|d<<10|1073741824,b<<10,e>>>21|g<<11| -2147483648,e<<11,f,6,f,4);e=f[6]|0;b=f[7]|0;a=(((f[5]|f[4]|0)!==0?1:0)?1:0)|b;f[7]=a;b=b>>>31|e<<1;d=c-1023|0;if((b|0)>-1){f[6]=b;a=a<<1;f[7]=a;d=c-1024|0;}else{b=e;}H(f,4,m,d,b,a);a=f[5]|0;s[t]=f[4]|0;s[t+1|0]=a;}}}function H(n,o,m,k,g,f){var a=0,c=0,b=0,d=0,e=0;L1:{L2:{L3:{L4:{if((k&65535)>>>0>2044){if((k|0)<=2045){if((k|0)===2045){if((((f>>>0>4294966783?1:0)?1:0)+g|0)>=0){a=2045;break L4;}}else{if((k|0)<0){if((k|0)>-64){a=-k|0;b=a>>>0>31?0|0:g>>>a|0;c=k&63;d=(((((c|0)===0?f|g|0:(c>>>0>31?f<<(c-32|0)|0:f>>>(32-c|0)|g<<c|f<<c|0)|0)|0)!==0?1:0)?1:0)|(a>>>0>31?g>>>( -32-k|0)|0:f>>>a|g<<(k+32|0)|0);}else{d=((f|g|0)!==0?1:0)?1:0;b=0;}a=d&1023;if((a|0)===0){c=0;a=0;break L2;}else{e=h|4;h=e;c=0;break L3;}}else{a=k;break L4;}}}h=h|9;n[o]=(m<<31)+2146435072|0;n[o+1|0]=0;break L1;}else{a=k;}}c=f&1023;if((c|0)===0){c=a;d=f;b=g;a=0;break L2;}else{e=h|0;b=a;a=c;c=b;d=f;b=g;}}h=e|1;break L2;}b=((d>>>0>4294966783?1:0)?1:0)+b|0;a=(b<<22|d+512>>>10)&((((a|0)===512?1:0)?1:0)^ -1);b=b>>>10;n[o]=(b+(m<<31)|0)+((a|b|0)===0?0|0:c<<20|0)|0;n[o+1|0]=a;break L1;}}function T(f,e){var a=0,d=null,b=0,c=0;d=new Int32Array(2);a=0;while(1){b=a<<1;c=b+1|0;I(d,0,x[b]|0,x[c]|0,w[b]|0,w[c]|0);a=a+1|0;if(a>>>0<80){continue;}break;}return 0|0;}var x=new Int32Array([2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0,2146435072,0,2147418112,0,2146435072,0,2146435072,0,1072693248,0,0,0,1072693248,0,0,0, -2147483648,0,1072693248,0,1072693248,0,1073741824,0,1070596096,0, -1073741824,0, -1076887552,0,1073741824,0, -1076887552,0, -1073741824,0,1070596096,0,0,0]);var w=new Int32Array([ -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0, -1, -1, -1048576,0,0,0,1072693248,0, -65536,0,2146435072,0,2146435072,0,1072693248,0,1072693248,0,0,0, -2147483648,0,1070596096,0,1073741824,0, -1076887552,0, -1073741824,0, -1076887552,0,1073741824,0,1070596096,0, -1073741824,0,0,0]);var h=0;var v=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);T();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");