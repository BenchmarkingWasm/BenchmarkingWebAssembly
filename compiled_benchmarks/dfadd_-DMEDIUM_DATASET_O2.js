let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var H=Math.imul;var I=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function E(v,w,x,y,z,A,B){var b=0,a=0,j=null,k=0,c=0,d=0,f=0,m=null,g=0,e=0,o=0,q=0,r=0;L1:{L2:{m=new Int32Array(6);g=z>>>20&2047;d=x>>>20;f=d&2047;a=f-g|0;c=A<<9;b=z<<9&536870400|A>>>23;e=y<<9;o=x<<9&536870400|y>>>23;if(f>>>0>g>>>0){if((f|0)===2047){if((o|e|0)===0){v[w]=x;v[w+1|0]=y;break L1;}else{m[0]=x;m[1]=y;m[2]=z;m[3]=A;if((x&2146959360|0)===2146435072){b=((x&524287|y|0)!==0?1:0)?1:0;}else{b=0;}a=A>>>31|z<<1;c=a>>>0>4292870144||(A&2147483647|0)!==0&&(a|0)===-2097152?1:0;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}m[0]=x|524288;m[1]=y;m[2]=z|524288;m[3]=A;if((a|b|0)!==0){l=l|16;}if((a|0)===0){if((b|0)===0){k=c?2:0;j=c?m:m;}else{k=0;j=m;}}else{k=2;j=m;}b=j[k]|0;a=j[k+1|0]|0;v[w]=b;v[w+1|0]=a;break L1;}}else{if((g|0)===0){a=a-1|0;}else{b=b|536870912;}m[0]=b;m[1]=c;if((a|0)===0){a=c;}else{if((a|0)<64){d=a>>>0>31?0|0:b>>>a|0;g=-a&63;q=b|c;a=(((((g|0)===0?q|0:(g>>>0>31?c<<(g-32|0)|0:c>>>(32-g|0)|q<<g|0)|0)|0)!==0?1:0)?1:0)|(a>>>0>31?b>>>(a-32|0)|0:b<<(32-a|0)|c>>>a|0);b=d;}else{a=((b|c|0)!==0?1:0)?1:0;b=0;}}d=b;c=a;a=o;b=e;}}else{if(f>>>0<g>>>0){if((g|0)===2047){if((b|c|0)===0){v[w]=(B<<31)+2146435072|0;v[w+1|0]=0;break L1;}else{m[0]=x;m[1]=y;m[2]=z;m[3]=A;if((x&2146959360|0)===2146435072){b=((x&524287|y|0)!==0?1:0)?1:0;}else{b=0;}a=A>>>31|z<<1;c=a>>>0>4292870144||(A&2147483647|0)!==0&&(a|0)===-2097152?1:0;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}m[0]=x|524288;m[1]=y;m[2]=z|524288;m[3]=A;if((a|b|0)!==0){l=l|16;}if((a|0)===0){if((b|0)===0){k=c?2:0;j=c?m:m;}else{k=0;j=m;}}else{k=2;j=m;}b=j[k]|0;a=j[k+1|0]|0;v[w]=b;v[w+1|0]=a;break L1;}}else{if((f|0)===0){d=a+1|0;a=o;}else{d=o|536870912;f=a;a=d;d=f;}m[0]=a;m[1]=e;if((d|0)===0){d=e;}else{if((d|0)>-64){f=-d|0;o=f>>>0>31?0|0:a>>>f|0;q=d&63;r=a|e;d=(((((q|0)===0?r|0:(q>>>0>31?e<<(q-32|0)|0:e>>>(32-q|0)|r<<q|0)|0)|0)!==0?1:0)?1:0)|(f>>>0>31?a>>>( -32-d|0)|0:a<<(d+32|0)|e>>>f|0);a=o;}else{d=((a|e|0)!==0?1:0)?1:0;a=0;}}e=b;f=g;b=d;d=e;}}else{switch(d&2047){case 0:{b=(b+o|0)+((e>>>0>(c^ -1)>>>0?1:0)?1:0)|0;v[w]=(b>>>9)+(B<<31)|0;v[w+1|0]=b<<23|c+e>>>9;break L1;break;}case 2047:{if((o|e|c|b|0)===0){v[w]=x;v[w+1|0]=y;break L1;}else{m[0]=x;m[1]=y;m[2]=z;m[3]=A;if((x&2146959360|0)===2146435072){b=((x&524287|y|0)!==0?1:0)?1:0;}else{b=0;}a=A>>>31|z<<1;c=a>>>0>4292870144||(A&2147483647|0)!==0&&(a|0)===-2097152?1:0;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}m[0]=x|524288;m[1]=y;m[2]=z|524288;m[3]=A;if((a|b|0)!==0){l=l|16;}if((a|0)===0){if((b|0)===0){k=c?2:0;j=c?m:m;}else{k=0;j=m;}}else{k=2;j=m;}b=j[k]|0;a=j[k+1|0]|0;v[w]=b;v[w+1|0]=a;break L1;}break;}default:{a=c+e|0;b=(b+o|0)+(e>>>0>(c^ -1)>>>0?1073741825|0:1073741824|0)|0;break L2;break;}}}}g=c+b|0;a=(d+(a|536870912)|0)+((b>>>0>(c^ -1)>>>0?1:0)?1:0)|0;c=a<<1|g>>>31;b=(c|0)<0?a|0:c|0;a=g<<(a>>>30&1^1);f=((((c|0)<0?1:0)^1?1:0)<<31>>31)+f|0;break L2;}s(m,4,B,f,b,a);b=m[5]|0;v[w]=m[4]|0;v[w+1|0]=b;break L1;}}function D(v,w,x,y,z,A,B){var b=0,a=0,m=null,n=0,d=0,f=0,c=0,e=0,q=null,g=0,j=0,o=0,r=0;L1:{L2:{q=new Int32Array(4);e=z>>>20&2047;d=x>>>20;f=d&2047;a=f-e|0;g=A<<10;b=z<<10&1073740800|A>>>22;c=y<<10;j=x<<10&1073740800|y>>>22;L3:if(f>>>0>e>>>0){if((f|0)===2047){if((j|c|0)===0){v[w]=x;v[w+1|0]=y;break L1;}else{q[0]=x;q[1]=y;q[2]=z;q[3]=A;if((x&2146959360|0)===2146435072){b=((x&524287|y|0)!==0?1:0)?1:0;}else{b=0;}a=A>>>31|z<<1;d=a>>>0>4292870144||(A&2147483647|0)!==0&&(a|0)===-2097152?1:0;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}q[0]=x|524288;q[1]=y;q[2]=z|524288;q[3]=A;if((a|b|0)!==0){l=l|16;}if((a|0)===0){if((b|0)===0){n=d?2:0;m=d?q:q;}else{n=0;m=q;}}else{n=2;m=q;}b=m[n]|0;a=m[n+1|0]|0;v[w]=b;v[w+1|0]=a;break L1;}}else{if((e|0)===0){a=a-1|0;}else{b=b|1073741824;}q[0]=b;q[1]=g;if((a|0)===0){a=g;}else{if((a|0)<64){d=a>>>0>31?0|0:b>>>a|0;e=-a&63;o=b|g;a=(((((e|0)===0?o|0:(e>>>0>31?g<<(e-32|0)|0:g>>>(32-e|0)|o<<e|0)|0)|0)!==0?1:0)?1:0)|(a>>>0>31?b>>>(a-32|0)|0:b<<(32-a|0)|g>>>a|0);b=d;}else{a=((b|g|0)!==0?1:0)?1:0;b=0;}}d=j|1073741824;e=b;b=d;d=e;}}else{if(f>>>0<e>>>0){if((e|0)===2047){if((b|g|0)===0){v[w]=(B<<31)-1048576|0;v[w+1|0]=0;break L1;}else{q[0]=x;q[1]=y;q[2]=z;q[3]=A;if((x&2146959360|0)===2146435072){b=((x&524287|y|0)!==0?1:0)?1:0;}else{b=0;}a=A>>>31|z<<1;d=a>>>0>4292870144||(A&2147483647|0)!==0&&(a|0)===-2097152?1:0;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}q[0]=x|524288;q[1]=y;q[2]=z|524288;q[3]=A;if((a|b|0)!==0){l=l|16;}if((a|0)===0){if((b|0)===0){n=d?2:0;m=d?q:q;}else{n=0;m=q;}}else{n=2;m=q;}b=m[n]|0;a=m[n+1|0]|0;v[w]=b;v[w+1|0]=a;break L1;}}else{if((f|0)===0){d=a+1|0;a=j;}else{d=j|1073741824;f=a;a=d;d=f;}q[0]=a;q[1]=c;if((d|0)===0){d=c;}else{if((d|0)>-64){f=-d|0;j=f>>>0>31?0|0:a>>>f|0;o=d&63;r=a|c;d=(((((o|0)===0?r|0:(o>>>0>31?c<<(o-32|0)|0:c>>>(32-o|0)|r<<o|0)|0)|0)!==0?1:0)?1:0)|(f>>>0>31?a>>>( -32-d|0)|0:a<<(d+32|0)|c>>>f|0);a=j;}else{d=((a|c|0)!==0?1:0)?1:0;a=0;}}c=b|1073741824;f=e;b=a;}}else{switch(d&2047){case 0:{f=1;a=1;break;}case 2047:{if((j|c|g|b|0)===0){l=l|16;v[w]=2147483647;v[w+1|0]=-1;break L1;}else{q[0]=x;q[1]=y;q[2]=z;q[3]=A;if((x&2146959360|0)===2146435072){b=((x&524287|y|0)!==0?1:0)?1:0;}else{b=0;}a=A>>>31|z<<1;d=a>>>0>4292870144||(A&2147483647|0)!==0&&(a|0)===-2097152?1:0;if((z&2146959360|0)===2146435072){a=((z&524287|A|0)!==0?1:0)?1:0;}else{a=0;}q[0]=x|524288;q[1]=y;q[2]=z|524288;q[3]=A;if((a|b|0)!==0){l=l|16;}if((a|0)===0){if((b|0)===0){n=d?2:0;m=d?q:q;}else{n=0;m=q;}}else{n=2;m=q;}b=m[n]|0;a=m[n+1|0]|0;v[w]=b;v[w+1|0]=a;break L1;}break;}default:{a=e;}}if(b>>>0<j>>>0||g>>>0<c>>>0&&(b|0)===(j|0)){d=b;a=g;b=j;break L3;}else{if(j>>>0<b>>>0||c>>>0<g>>>0&&(b|0)===(j|0)){f=a;d=c;c=b;b=j;}else{v[w]=0;v[w+1|0]=0;break L1;}}}a=g-d|0;b=(c-b|0)+((g>>>0<d>>>0?1:0)<<31>>31)|0;d=B^1;break L2;}e=c-a|0;b=(b-d|0)+((c>>>0<a>>>0?1:0)<<31>>31)|0;a=e;d=B;break L2;}c=(b|0)===0?a|0:b|0;e=c>>>0<65536?c<<16|0:c|0;c=c>>>0<65536?16|0:0|0;if(e>>>0<16777216){e=e<<8;c=c+8|0;}c=(c+((b|0)===0?32|0:0|0)|0)+(F[e>>>24]|0)|0;e=c-1|0;s(q,0,d,f-c|0,(e|0)===0?b|0:(e>>>0>31?a<<(c-33|0)|0:b<<e|a>>>(33-c|0)|0)|0,(e|0)===0?a|0:(e>>>0>31?0|0:a<<e|0)|0);b=q[0]|0;a=q[1]|0;v[w]=b;v[w+1|0]=a;break L1;}}function C(){var c=0,g=null,a=0,e=0,b=0,f=0,d=0;g=new Int32Array(4);c=0;while(1){a=c<<1;e=u[a]|0;b=a+1|0;f=u[b]|0;a=t[a]|0;b=t[b]|0;d=e>>>31;if((d|0)===(a>>>31|0)){E(g,2,e,f,a,b,d);}else{D(g,0,e,f,a,b,d);}c=c+1|0;if(c>>>0<46){continue;}break;}}function G(b,a){C();return 0|0;}function s(o,p,m,j,g,f){var a=0,c=0,b=0,d=0,e=0;L1:{L2:{L3:{L4:{if((j&65535)>>>0>2044){if((j|0)<=2045){if((j|0)===2045){if((((f>>>0>4294966783?1:0)?1:0)+g|0)>=0){a=2045;break L4;}}else{if((j|0)<0){if((j|0)>-64){a=-j|0;b=a>>>0>31?0|0:g>>>a|0;c=j&63;d=(((((c|0)===0?f|g|0:(c>>>0>31?f<<(c-32|0)|0:f>>>(32-c|0)|g<<c|f<<c|0)|0)|0)!==0?1:0)?1:0)|(a>>>0>31?g>>>( -32-j|0)|0:f>>>a|g<<(j+32|0)|0);}else{d=((f|g|0)!==0?1:0)?1:0;b=0;}a=d&1023;if((a|0)===0){c=0;a=0;break L2;}else{e=l|4;l=e;c=0;break L3;}}else{a=j;break L4;}}}l=l|9;o[p]=(m<<31)+2146435072|0;o[p+1|0]=0;break L1;}else{a=j;}}c=f&1023;if((c|0)===0){c=a;d=f;b=g;a=0;break L2;}else{e=l|0;b=a;a=c;c=b;d=f;b=g;}}l=e|1;break L2;}b=((d>>>0>4294966783?1:0)?1:0)+b|0;a=(b<<22|d+512>>>10)&((((a|0)===512?1:0)?1:0)^ -1);b=b>>>10;o[p]=(b+(m<<31)|0)+((a|b|0)===0?0|0:c<<20|0)|0;o[p+1|0]=a;break L1;}}var u=new Int32Array([2146959360,0,2146435072,0,1073741824,0,1073741824,0,1072693248,0,1072693248,0,0,0,1073217536,0,2146959360,0,2146435072,0,0,0,1073217536,0, -524288,0, -1048576,0, -1073741824,0, -1073741824,0, -1074790400,0, -1074790400,0, -2147483648,0, -1074266112,0, -524288,0, -1048576,0, -2147483648,0, -1074266112,0,2146959360,0,2146435072,0,1072693248,0,1072693248,0,1072693248,0,0,0,1073217536,0,2146959360,0,2146435072,0,1072693248,0,1073741824,0, -1048576,0, -1048576,0, -1074790400,0, -1074790400,0, -1074790400,0, -2147483648,0, -1074266112,0, -524288,0, -1048576,0, -1074790400,0, -1073741824,0]);var t=new Int32Array([1072693248,0,1072693248,0,0,0,1073217536,0,2146959360,0,2146435072,0,1073741824,0,1073741824,0,2146435072,0,2146435072,0,0,0,1072693248,0, -1074790400,0, -1074790400,0, -2147483648,0, -1074266112,0, -524288,0, -1048576,0, -1073741824,0, -1073741824,0, -1048576,0, -1048576,0, -2147483648,0, -1074790400,0, -1048576,0, -1048576,0, -1074790400,0, -524288,0, -1048576,0, -1074790400,0, -1073741824,0, -1074790400,0, -1074790400,0, -2147483648,0, -1074266112,0,2146959360,0,2146435072,0,1072693248,0,2146959360,0,2146435072,0,1072693248,0,1073741824,0,1072693248,0,1072693248,0,0,0,1073217536,0]);var l=0;var F=new Int32Array([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);G();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");