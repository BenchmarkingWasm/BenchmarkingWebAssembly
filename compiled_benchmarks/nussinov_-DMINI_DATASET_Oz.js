let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var bg=Math.imul;var bh=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function aK(k,i,j){var c=0,a=0,g=null,e=null,m=0;g=new Int32Array(15);e=new Int32Array(3600);c=0;while(1){a=c+1|0;g[c]=a&3;if(a>>>0<60){c=a;continue;}else{c=0;}break;}while(1){m=bg(c,60)|0;a=0;while(1){e[a+m|0]=0;a=a+1|0;if(a>>>0<60){continue;}break;}c=c+1|0;if(c>>>0<60){continue;}break;}aJ(g,0,e,0);if((k|0)>42){g=i[j];if((g.d[g.o]&255)===0){aI(e,0);}}}function aJ(t,u,r,s){var i=0,g=0,a=0,c=0,e=0,k=0,m=0,o=0,B=0,v=0;i=59;while(1){k=i+1|0;if((k|0)<60){m=bg(i,60)|0;o=bg(k,60)|0;a=i;g=k;while(1){c=r[s+(g+m|0)|0]|0;e=r[s+(a+m|0)|0]|0;c=(c|0)<(e|0)?e|0:c|0;r[s+(g+m|0)|0]=c;e=r[s+(g+o|0)|0]|0;c=(c|0)<(e|0)?e|0:c|0;r[s+(g+m|0)|0]=c;e=r[s+(a+o|0)|0]|0;if((i|0)<(a|0)){a=((((t[u+g|0]<<24>>24)+(t[u+i|0]<<24>>24)|0)===3?1:0)?1:0)+e|0;a=(c|0)<(a|0)?a|0:c|0;}else{a=(c|0)<(e|0)?e|0:c|0;}r[s+(g+m|0)|0]=a;if((k|0)<(g|0)){B=g+120|0;e=i;c=k;while(1){e=(r[s+(B+(bg(e,60)|0)|0)|0]|0)+(r[s+(c+m|0)|0]|0)|0;a=(a|0)<(e|0)?e|0:a|0;r[s+(g+m|0)|0]=a;e=c+1|0;if((e|0)<(g|0)){v=c;c=e;e=v;continue;}break;}}a=g+1|0;if((a|0)<60){c=g;g=a;a=c;continue;}break;}}g=i-1|0;if((i|0)>0){i=g;continue;}break;}}function aI(k,l){var i=0,a=0,g=0,e=0,c=0,m=0;Y(aV,0,22,1,q.a3)|0;O(q.a3,aU,0,{d:aT,o:0})|0;g=60;a=0;i=0;while(1){m=bg(a,60)|0;c=a;e=i;while(1){if(((e|0)%20|0)===0){ar(10,q.a3)|0;}O(q.a3,aS,0,k[l+(c+m|0)|0]|0)|0;c=c+1|0;e=e+1|0;if(c>>>0<60){continue;}break;}i=i+g|0;g=g-1|0;a=a+1|0;if(a>>>0<60){continue;}break;}O(q.a3,aR,0,{d:aT,o:0})|0;Y(aQ,0,22,1,q.a3)|0;}function bf(c,a,b){aK(c,a,b);return 0|0;}function aF(){throw new Error("Abort called");}function aD(r,s,o){var a=0,e=null,c=0,m=null,n=0,i=0,k=0,g=null;e=String();n=s;m=r;c=o;L1:while(1){while(1){if((c|0)!==0){i=m[n]|0;if((i&255)!==0){k=i&255;if(i<<24>-16777216){a=k;}else{if((i&255)<192){a=k&63|a<<6;}else{if((i&255)<224){a=k&31;}else{if((i&255)<240){a=k&15;}else{a=k&7;}}}}c=c-1|0;if((c|0)===0){c=0;}else{if((m[n+1|0]&192)===128){n=n+1|0;m=m;continue;}}if(a>>>0<65536){g=String.fromCharCode(a);g=String(g);e=e.concat(g);n=n+1|0;m=m;continue L1;}a=a-65536|0;g=String.fromCharCode((a>>>10)+55296|0);g=String(g);e=e.concat(g);g=String.fromCharCode((a&1023)+56320|0);g=String(g);e=e.concat(g);n=n+1|0;m=m;continue L1;}}break;}break;}return e;}function aB(g,h,e){var a=null,c=0;a=aD(g,h,e);c=e-1|0;if((g[h+c|0]&255)===10){a=a.substr(0,c);a=String(a);console.log(a);return e|0;}a=String(a);console.log(a);return e|0;}function aa(K,M,I,B,v,t,r){var e=0,a=0,c=0,g=0,m=0,i=0,o=0,k=0,U=0;if((t|0)>-1&&(t>>>0<B>>>0||(t|0)===(B|0)&&r>>>0<v>>>0)){g=0;c=1;a=t;e=r;while(1){a=a<<1|e>>>31;g=g<<1|c>>>31;e=e<<1;c=c<<1;if((a|0)>-1&&(a>>>0<B>>>0||e>>>0<v>>>0&&(a|0)===(B|0))&&(g|c|0)!==0){continue;}break;}}else{g=0;c=1;a=t;e=r;}if((g|c|0)===0){g=0;c=0;a=B;e=v;}else{k=g;o=c;i=a;m=e;g=0;c=0;a=B;e=v;while(1){if(a>>>0>i>>>0||e>>>0>=m>>>0&&(a|0)===(i|0)){U=e-m|0;a=(a-i|0)+((e>>>0<m>>>0?1:0)<<31>>31)|0;g=g|k;c=c|o;e=U;}o=k<<31|o>>>1;m=i<<31|m>>>1;k=k>>>1;i=i>>>1;if((o|k|0)!==0){continue;}break;}}K[M]=(I|0)===0?g|0:a|0;K[M+1|0]=(I|0)===0?c|0:e|0;}function aw(i,g){var a=null,e=0,c=null,d=0,k=0;if(g===null){return 0|0;}if(i!==null){if((i.i6|0)===0){x(i);}}if(g===A){a=i.a1;}else{if(g===z){a=i.a2;}else{if(g===y){a=i.a3;}else{a=g;}}}if((a.i3&65535)===0){return 0|0;}e=$(i,a)|0;c=a.a12;if(c!==null){k=c(i,a.a8)|0;e=(k|0)<0? -1|0:e|0;}d=a.a13.a0o;c=a.a13.a0;if(c.length!==1||c!==nullArray||d!==0){a.a13.a0=nullArray;a.a13.a0o=0;}d=a.a17.a0o;c=a.a17.a0;if(c.length!==1||c!==nullArray||d!==0){a.a17.a0=nullArray;a.a17.a0o=0;}a.i3=0;return e|0;}function $(m,k){var a=0,g=0,c=0,e=null,f=0,i=null,j=0,r=null,s=0,o=0;a=k.i3|0;c=a<<16>>16;if((c&8|0)===0){k.i3=a|2048;if((k.i1|0)<=0){if((k.i15|0)<=0){return 0|0;}}e=k.a11;if(e===null){return 0|0;}L1:{g=m.i0|0;m.i0=0;if((a&4096)===0){a=e(m,k.a8,0,1)|0;if((a|0)===-1){switch(m.i0|0){case 29:case 22:{m.i0=g;return 0|0;break;}case 0:{a=-1;break L1;}default:{k.i3=k.i3|64;return  -1|0;break;}}}else{break L1;}}a=k.i19|0;break L1;}if((k.i3&4)!==0){f=k.a13.a0o;e=k.a13.a0;a=a-(k.i1|0)|0;if(e.length!==1||e!==nullArray||f!==0){a=a-(k.i15|0)|0;}}a=k.a11(m,k.a8,a,0)|0;if((a|0)===-1){switch(m.i0|0){case 0:case 29:case 22:{break;}default:{k.i3=k.i3|64;return  -1|0;break;}}}L2:{c=k.i3|0;k.i3=c&63487;k.i1=0;f=k.a5.a0o;e=k.a5.a0;k.a0=e;k.a0o=f;if((c&4096)!==0){if((a|0)===-1){if((m.i0|0)!==0){break L2;}}k.i19=a;}}m.i0=g;f=k.a13.a0o;e=k.a13.a0;if(e.length===1&&e===nullArray&&f===0){return 0|0;}k.a13.a0=nullArray;k.a13.a0o=0;return 0|0;}e=k.a5;j=e.a0o;i=e.a0;if(i.length===1&&i===nullArray&&j===0){return 0|0;}s=k.a0o;r=k.a0;g=(s)-(j)|0;k.a0=i;k.a0o=j;if((c&3|0)===0){a=e.i1|0;}else{a=0;}k.i2=a;if((g|0)>0){a=0;while(1){c=k.a10(m,k.a8,i,j+a|0,g)|0;if((c|0)<1){k.i3=k.i3|64;return  -1|0;}a=a+c|0;o=g-c|0;if((g|0)>(c|0)){g=o;continue;}break;}return 0|0;}return 0|0;}function G(e,c){var a=null,b=0,g=0;b=c.a5.a0o;a=c.a5.a0;if(a.length===1&&a===nullArray&&b===0){return 0|0;}if(e!==null){if((e.i6|0)===0){x(e);}}if(c===A){a=e.a1;}else{if(c===z){a=e.a2;}else{if(c===y){a=e.a3;}else{a=c;}}}if((a.i3&65535)===0){return 0|0;}g=$(e,a)|0;return g|0;}function av(){var e=0,c=null,g=null,a=null;c={a0:null,i1:0,a2:nullArray,a3:null};g=[new bb(),new bb(),new bb(),new bb()];c.a3=g[0];if(c===null){return null;}c=c;c.a0=null;c.i1=4;c.a2=g;e=0;while(1){g[e].a0=nullArray;g[e].a0o=0;g[e].i1=0;g[e].i2=0;g[e].i3=0;g[e].i4=0;a=g[e].a5;a.a0=nullArray;a.a0o=0;a.i1=0;g[e].i6=0;g[e].a7=null;g[e].a8=null;g[e].a9=null;g[e].a10=null;g[e].a11=null;g[e].a12=null;a=g[e].a13;a.a0=nullArray;a.a0o=0;a.i1=0;g[e].a14=null;g[e].i15=0;a=g[e].a16;a[0]=0;a[1]=0;a[2]=0;a[3]=0;a=g[e].a17;a.a0=nullArray;a.a0o=0;a.i1=0;g[e].i18=0;g[e].i19=0;g[e].i20=0;a=g[e].a21;a.i0=0;a.i1=0;g[e].i22=0;e=e+1|0;if((e|0)!==4){continue;}break;}return c;}function Q(g){var a=null,e=0,i=0,c=null,k=0;if((q.i6|0)===0){x(q);a=q.a20;}else{a=q.a20;}while(1){e=a.i1|0;if((e|0)>0){c=a.a2;i=0;while(1){if((c[i].i3&65535)===0){c[i].i4=65535;c[i].i3=1;c[i].i22=0;c[i].a0=nullArray;c[i].a0o=0;c[i].i2=0;c[i].i1=0;a=c[i].a5;a.a0=nullArray;a.a0o=0;a.i1=0;c[i].i6=0;a=c[i].a21;a.i0=0;a.i1=0;a=c[i].a13;a.a0=nullArray;a.a0o=0;a.i1=0;a=c[i].a17;a.a0=nullArray;a.a0o=0;a.i1=0;return c[i];}i=i+1|0;k=e-1|0;if((e|0)>1){e=k;continue;}break;}}c=a.a0;if(c!==null){a=c;continue;}c=av();a.a0=c;if(c!==null){a=c;continue;}break;}g.i0=12;return null;}function x(a){var c=null;if((a.i6|0)===0){a.a10=Z;c=a.a20;c.a0=null;c.i1=0;c.a2=nullArray;if(a===q){a.i6=1;}c=Q(a);a.a1=c;c=Q(a);a.a2=c;c=Q(a);a.a3=c;P(a.a1,4,0);P(a.a2,9,1);P(a.a3,18,2);a.i6=1;}}function Z(a){an(a);}function P(g,e,c){var a=null;g.a0=nullArray;g.a0o=0;g.i1=0;g.i2=0;g.i3=e;g.i22=0;g.i4=c;a=g.a5;a.a0=nullArray;a.a0o=0;a.i1=0;g.i6=0;a=g.a21;a.i0=0;a.i1=0;g.a8=g;g.a9=ay;g.a10=ah;g.a11=ag;g.a12=af;}function O(c,a,b){var i=null,g=null,e=0;i=[nullObj];i[0]={d:arguments,o:O.length};g=i[0];e=ai(c,a,b,g.d,g.o)|0;i[0]=null;return e|0;}function as(g,e){var c=null,a=0;if((q.i6|0)===0){x(q);}if(e===A){c=q.a1;a=R(g,c)|0;return a|0;}if(e===z){c=q.a2;a=R(g,c)|0;return a|0;}c=q.a3;a=R(g,(e===y?c:e))|0;return a|0;}function ar(c,a){var e=0;e=as(c,a)|0;return e|0;}function aq(k,i,g){var a=0,e=0,c=null,d=0;if(i-1>>>0<255){a=i;}else{if(i>>>0>255){g.a21.i0=0;k.i0=138;g.i3=g.i3|64;return  -1|0;}else{a=0;}}L1:{e=g.i2|0;g.i2=e-1|0;if((e|0)<1){L2:if((e|0)>(g.i6|0)){d=g.a0o;c=g.a0;c[d]=a;d=g.a0o;c=g.a0;if((c[d]&255)===10){a=F(k,10,g)|0;break L2;}else{g.a0=c;g.a0o=d+1|0;break L1;}}else{a=F(k,a&255,g)|0;}if((a|0)===-1){return  -1|0;}else{break L1;}}d=g.a0o;c=g.a0;c[d]=a;d=g.a0o;c=g.a0;g.a0=c;g.a0o=d+1|0;break L1;}return i|0;}function ap(g,e,c){var a=0;a=c.i3|0;if((a&8192)===0){c.i3=a|8192;c.i22=c.i22|8192;}a=aq(g,e,c)|0;return a|0;}function ao(U,K){var m=0,g=null,h=0,e=0,a=0,c=0,i=null,j=0,t=0,k=0,B=null,o=null,p=0,v=null,w=0,r=0,I=0;if((K.i2|0)===0){return 0|0;}L1:{m=U.i3|0;if((m&8)!==0){h=U.a5.a0o;g=U.a5.a0;if(g.length!==1||g!==nullArray||h!==0){break L1;}}m=N(q,U)|0;if((m|0)===0){m=U.i3|0;}else{return  -1|0;}}L2:{B=K.a0;m=m<<16>>16;if((m&2|0)===0){if((m&1|0)===0){e=0;h=0;g=nullArray;m=0;L3:while(1){while(1){if((e|0)===0){h=B[m].a0o;g=B[m].a0;e=B[m].i1|0;m=m+1|0;continue L3;}a=U.i2|0;c=U.i3<<16>>16;L4:if((c&512|0)===0){j=U.a0o;i=U.a0;o=U.a5;w=o.a0o;v=o.a0;if(j<=w){c=o.i1|0;if(e>>>0>=c>>>0){a=e>>>0<2147483647?e|0:2147483647|0;a=U.a10(q,U.a8,g,h,a-((a|0)%(c|0)|0)|0)|0;if((a|0)<1){break L2;}else{break L4;}}}a=e>>>0<a>>>0?e|0:a|0;if((a|0)!==0){if(h<j){c=a;while(1){c=c-1|0;i[j+c|0]=g[h+c|0]|0;if((c|0)!==0){continue;}break;}}else{c=0;while(1){i[j+c|0]=g[h+c|0]|0;c=c+1|0;if((a|0)!==(c|0)){continue;}break;}}}c=U.i2|0;U.i2=c-a|0;j=U.a0o;i=U.a0;U.a0=i;U.a0o=j+a|0;if((c|0)===(a|0)){c=G(q,U)|0;if((c|0)!==0){break L2;}}else{break L4;}}else{j=U.a0o;i=U.a0;if(!(e>>>0<a>>>0||(c&1152|0)===0)){o=U.a5;w=o.a0o;v=o.a0;a=(w);t=(j);k=t-a|0;r=(e+1|0)+k|0;I=(bg(o.i1|0,3)|0)/2|0;r=I>>>0<r>>>0?r|0:I|0;L5:if((c&1024|0)===0){i=(function(){var __old__=v;var __ret__=new Uint8Array(r/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();if(i.length===1&&i===nullArray&&0===0){U.i3=U.i3&65407;q.i0=12;break L2;}else{break L5;}}else{i=new Uint8Array(r/1|0);if(i.length===1&&i===nullArray&&0===0){q.i0=12;break L2;}else{w=o.a0o;v=o.a0;if((t|0)!==(a|0)){a=0;while(1){i[a]=v[w+a|0]|0;a=a+1|0;if((k|0)!==(a|0)){continue;}break;}}U.i3=U.i3&64383|128;}}o.a0=i;o.a0o=0;U.a0=i;U.a0o=0+k|0;o.i1=r;U.i2=r-k|0;j=0+k|0;i=i;a=e;}c=e>>>0<a>>>0?e|0:a|0;if((c|0)!==0){if(h<j){a=c;while(1){a=a-1|0;i[j+a|0]=g[h+a|0]|0;if((a|0)!==0){continue;}break;}}else{a=0;while(1){i[j+a|0]=g[h+a|0]|0;a=a+1|0;if((c|0)!==(a|0)){continue;}break;}}}U.i2=(U.i2|0)-c|0;j=U.a0o;i=U.a0;U.a0=i;U.a0o=j+c|0;a=e;}e=e-a|0;c=K.i2|0;K.i2=c-a|0;if((c|0)!==(a|0)){h=h+a|0;g=g;continue;}break;}break;}return 0|0;}else{a=0;e=0;h=0;g=nullArray;m=0;}L6:while(1){i=U.a5;c=e;e=0;while(1){if((c|0)===0){h=B[m].a0o;g=B[m].a0;e=B[m].i1|0;m=m+1|0;continue L6;}if((e|0)===0){o=E(g,h,10,c);p=oSlot;if(o.length===1&&o===nullArray&&p===0){t=c+1|0;e=1;}else{t=(p+1|0)-(h)|0;e=1;}}else{t=a;}r=c>>>0<t>>>0?c|0:t|0;a=i.i1|0;p=U.a0o;o=U.a0;w=i.a0o;v=i.a0;k=a+(U.i2|0)|0;if((r|0)>(k|0)&&p>w){if((k|0)!==0){if(h<p){a=k;while(1){a=a-1|0;o[p+a|0]=g[h+a|0]|0;if((a|0)!==0){continue;}break;}}else{a=0;while(1){o[p+a|0]=g[h+a|0]|0;a=a+1|0;if((k|0)!==(a|0)){continue;}break;}}}p=U.a0o;o=U.a0;U.a0=o;U.a0o=p+k|0;a=G(q,U)|0;if((a|0)!==0){break L2;}}else{if((r|0)<(a|0)){if((r|0)!==0){if(h<p){a=r;while(1){a=a-1|0;o[p+a|0]=g[h+a|0]|0;if((a|0)!==0){continue;}break;}}else{a=0;while(1){o[p+a|0]=g[h+a|0]|0;a=a+1|0;if((r|0)!==(a|0)){continue;}break;}}}U.i2=(U.i2|0)-r|0;p=U.a0o;o=U.a0;U.a0=o;U.a0o=p+r|0;k=r;}else{k=U.a10(q,U.a8,g,h,a)|0;if((k|0)<1){break L2;}}}a=t-k|0;if((t|0)===(k|0)){e=G(q,U)|0;if((e|0)===0){e=0;}else{break L2;}}c=c-k|0;t=K.i2|0;K.i2=t-k|0;if((t|0)!==(k|0)){h=h+k|0;g=g;continue;}break;}break;}return 0|0;}else{e=0;h=0;g=nullArray;m=0;}L7:while(1){while(1){if((e|0)===0){h=B[m].a0o;g=B[m].a0;e=B[m].i1|0;m=m+1|0;continue L7;}a=U.a10(q,U.a8,g,h,e>>>0<2147482624?e|0:2147482624|0)|0;if((a|0)>=1){e=e-a|0;c=K.i2|0;K.i2=c-a|0;if((c|0)!==(a|0)){h=h+a|0;g=g;continue;}return 0|0;}break;}break;}}U.i3=U.i3|64;return  -1|0;}function an(g){var a=null,c=0,e=0,k=null,i=0;a=g.a20;while(1){c=a.i1|0;if((c|0)>0){k=a.a2;e=0;while(1){if((k[e].i3&65535)>=2){if((k[e].i4&65535)!==65535){aw(g,k[e])|0;}}e=e+1|0;i=c-1|0;if((c|0)>1){c=i;continue;}break;}}a=a.a0;if(a!==null){continue;}break;}}function am(o,p,m,k,i){var a=null,c=0,g=null,e=0;a=[{a0:nullArray,a0o:0,i1:0}];a[0].a0=o;a[0].a0o=p;c=bg(k,m)|0;a[0].i1=c;g={a0:nullArray,i1:1,i2:0};g.i2=c;g.a0=a;if((q.i6|0)===0){x(q);}if(i===A){a=q.a1;}else{if(i===z){a=q.a2;}else{a=i===y?q.a3:i;}}e=a.i3|0;if((e&8192)===0){a.i3=e|8192;a.i22=a.i22& -8193;}e=ao(a,g)|0;if((e|0)===0){return k|0;}c=(c-(g.i2|0)>>>0)/(m>>>0)|0;return c|0;}function Y(g,h,e,c,a){var i=0;i=am(g,h,e,c,a)|0;return i|0;}function al(k,i){var c=0,m=0,e=0,a=null,g=null;e=i.i3|0;L1:if((e&2)===0){c=i.i4|0;if(c<<16>-65536&&(c&65535)<3){m=1;c=1024;}else{c=(e&128)!==0?64|0:1024|0;m=0;}i.i3=e|2048;a=new Uint8Array(c/1|0);if(a.length===1&&a===nullArray&&0===0){c=i.i3|0;if((c&512)===0){i.i3=c|2;i.a0=i.a16;i.a0o=3;a=i.a5;a.a0=i.a16;a.a0o=3;a.i1=1;break L1;}else{break L1;}}else{k.a10=Z;e=i.i3|0;i.i3=e|128;i.a0=a;i.a0o=0;g=i.a5;g.a0=a;g.a0o=0;g.i1=c;if((m|0)===0){break L1;}else{if((i.i4&65535)<4){i.i3=e|129;}else{break L1;}}}}else{i.a0=i.a16;i.a0o=3;a=i.a5;a.a0=i.a16;a.a0o=3;a.i1=1;}}function E(e,f,c,a){var i=0,g=0;if((a|0)===0){oSlot=0;return nullArray;}g=0;i=a;while(1){if((e[f+g|0]&255)===(c&255)){oSlot=f+g|0;return e;}g=g+1|0;i=i-1|0;if((i|0)!==0){continue;}break;}oSlot=0;return nullArray;}function D(i,g,e,f,c){var a=0,k=0,m=0;if((g.i22&8192|0)===0){if((c|0)===0){return 0|0;}else{a=0;}while(1){k=aj(i,e[f+a|0]<<24>>24,g)|0;if((k|0)===-1){return  -1|0;}a=a+1|0;if(a>>>0<c>>>0){continue;}break;}return 0|0;}k=c>>>2;if((k|0)===0){return 0|0;}a=0;while(1){m=ap(i,e[f+a|0]|0,g)|0;if((m|0)===-1){return  -1|0;}a=a+1|0;if(a>>>0<k>>>0){continue;}break;}return 0|0;}function aj(k,i,g){var a=0,c=0,e=null,f=0;c=g.i2|0;g.i2=c-1|0;if((c|0)>0){a=i&255;}else{a=i&255;if((a|0)===10||(c|0)<=(g.i6|0)){a=F(k,i,g)|0;return a|0;}}f=g.a0o;e=g.a0;g.a0=e;g.a0o=f+1|0;e[f]=i;return a|0;}function ai(K,I,J,B,C){var r=null,e=0,a=0,c=0,g=0,k=0,m=null,n=0,U=null,i=null,o=0,v=0,t=0;U=[nullObj];U[0]={d:B,o:C};i=new aX();if((q.i6|0)===0){x(q);}if(K===A){r=q.a1;}else{if(K===z){r=q.a2;}else{r=K===y?q.a3:K;}}L1:{if((r.i3&8)!==0){n=r.a5.a0o;m=r.a5.a0;if(m.length!==1||m!==nullArray||n!==0){break L1;}}e=N(q,r)|0;if((e|0)!==0){return  -1|0;}}i.i5=0;i.a7[0]=32;i.a8[0]=48;e=0;L2:while(1){a=e;while(1){c=I[J+a|0]|0;switch(c&255){case 0:case 37:{L3:{g=(J+a|0);k=(J+e|0);o=g-k|0;if((g|0)===(k|0)){e=c;}else{e=D(q,r,I,J+e|0,o)|0;if((e|0)===-1){break L3;}else{i.i5=(i.i5|0)+o|0;e=I[J+a|0]|0;}}if((e&255)!==0){i.i0=0;i.i3=0;i.i1=-1;i.i2=0;i.a9[40]=0;i.i11=0;c=a+1|0;m=E(aP,0,I[J+c|0]<<24>>24,5);n=oSlot;if(m.length===1&&m===nullArray&&n===0){g=a;a=c;c=g;e=0;}else{e=0;while(1){e=1<<((n)-(0)|0)|e;i.i0=e;a=a+2|0;m=E(aP,0,I[J+a|0]<<24>>24,5);n=oSlot;if(m.length!==1||m!==nullArray||n!==0){g=a;a=c;c=g;continue;}break;}if((e&16|0)!==0){i.a9[40]=32;}if((e&8|0)!==0){i.a9[40]=43;}}g=I[J+a|0]|0;if((g&255)===42){a=bF(U[0]);i.i3=a;if((a|0)<0){i.i3=-a|0;e=e|2;i.i0=e;}c=c+2|0;a=I[J+c|0]|0;}else{k=(g<<24>>24)-48|0;if(k>>>0<10){o=c;g=a;c=k;k=o;a=0;while(1){o=(bg(a,10)|0)+c|0;i.i3=o;v=k+2|0;a=I[J+v|0]|0;t=(a<<24>>24)-48|0;c=k+2|0;if(t>>>0<10){k=g;g=v;c=t;a=o;continue;}break;}}else{c=a;a=g;}}if((a&255)===46){g=c+1|0;if((I[J+g|0]&255)===42){a=bF(U[0]);i.i1=(a|0)>-1?a|0: -1|0;c=c+2|0;a=I[J+c|0]|0;}else{i.i1=0;a=I[J+g|0]|0;k=(a<<24>>24)-48|0;if(k>>>0<10){o=c;c=k;k=o;a=0;while(1){o=(bg(a,10)|0)+c|0;i.i1=o;v=k+2|0;a=I[J+v|0]|0;t=(a<<24>>24)-48|0;c=k+2|0;if(t>>>0<10){k=g;g=v;c=t;a=o;continue;}break;}}else{c=g;}}}m=E(aO,0,a<<24>>24,3);n=oSlot;if(m.length!==1||m!==nullArray||n!==0){g=c+1|0;k=(n)-(0)|0;a=64<<k;if((k|0)===1){if((I[J+g|0]&255)===108){c=c+2|0;a=512;}else{c=g;}}else{c=g;}i.i0=a|e;a=I[J+c|0]|0;}i.i6=a;m=E(aN,0,a<<24>>24,6);n=oSlot;if(m.length===1&&m===nullArray&&n===0){e=az(i,r,U[0])|0;if((e|0)===-1){break L3;}else{i.i5=(i.i5|0)+e|0;e=c+1|0;continue L2;}}ae();}}e=(r.i3&64)===0?i.i5|0: -1|0;return e|0;break;}default:{a=a+1|0;continue;break;}}break;}break;}}function aA(m,k,l,i){var a=0,c=0,g=null,e=0;a=m.i2|0;c=m.i4|0;a=(a|0)>(c|0)?a|0:c|0;k[l]=a;g=m.a9;if((g[40]|0)!==0){a=a+1|0;k[l]=a;}c=m.i0|0;if((c&32|0)!==0){a=a+2|0;k[l]=a;c=m.i0|0;}if((c&6|0)===0){if((m.i3|0)>(a|0)){a=0;while(1){c=D(q,i,m.a7,0,1)|0;if((c|0)===-1){return  -1|0;}a=a+1|0;if((a|0)<((m.i3|0)-(k[l]|0)|0)){continue;}break;}c=m.i0|0;}}e=g[40]|0;a=(e!==0?1:0)?1:0;if((c&32|0)!==0){g[e!==0?41|0:40|0]=48;a=e!==0?2|0:1|0;g[a+40|0]=g[42]|0;a=a+1|0;}a=D(q,i,g,40,a)|0;if((a|0)===-1){return  -1|0;}a=m.i3|0;c=k[l]|0;a=(a|0)<(c|0)||(m.i0&6|0)!==4?0|0:a-c|0;c=m.i2|0;e=m.i4|0;if((c|0)>(e|0)){a=(c-e|0)+a|0;}if((a|0)>0){c=0;while(1){e=D(q,i,m.a8,0,1)|0;if((e|0)===-1){return  -1|0;}c=c+1|0;if((c|0)<(a|0)){continue;}break;}return 0|0;}return 0|0;}function az(t,r,o){var e=null,f=0,a=0,c=0,g=0,k=0,m=null,i=null,j=0,v=0;L1:{L2:{L3:{L4:{L5:{L6:{a=t.i6|0;e=t.a9;m=t.a9;switch(a<<24>>24|0){case 115:{e=bF(o);a=t.i1|0;i=E(e.d,e.o,0,a);j=oSlot;if(i.length!==1||i!==nullArray||j!==0){a=(j)-(e.o)|0;t.i1=a;}t.i4=a;f=e.o;e=e.d;break;}case 110:{a=t.i0|0;if((a&512|0)===0){if((a&128|0)===0){c=t.i5|0;if((a&64|0)===0){e=bF(o);e.d[e.o]=c;break L2;}else{e=bF(o);e.d[e.o]=c;break L2;}}else{a=t.i5|0;e=bF(o);e.d[e.o]=a;break L2;}}else{a=t.i5|0;e=bF(o);e.d[e.o]=a>>31;e.d[e.o+1|0]=a;break L2;}break;}case 112:{t.i0=t.i0|32;break L6;break;}case 88:{m[42]=88;e=aL;break L5;break;}case 117:case 111:{a=t.i0|0;L7:if((a&512|0)===0){if((a&128|0)===0){c=bF(o);a=(a&64|0)===0?c|0:c&65535|0;c=0;break L7;}else{a=bF(o);c=0;}}else{e=bF(o);c=e.d[e.o]|0;a=e.d[e.o+1|0]|0;}g=(t.i6&255)===111?8|0:10|0;e=aL;break L4;break;}case 100:case 105:{c=t.i0|0;L8:if((c&512|0)===0){if((c&128|0)===0){a=bF(o);if((c&64|0)===0){c=a>>31;break L8;}else{c=a<<16;a=c>>16;c=c>>31;break L8;}}else{a=bF(o);c=a>>31;}}else{e=bF(o);c=e.d[e.o]|0;a=e.d[e.o+1|0]|0;}if((c|0)<0){c=(a|0)!==0?c^ -1|0:-c|0;m[40]=45;a=-a|0;e=aL;g=10;break L3;}else{e=aL;g=10;break L3;}break;}case 99:{a=bF(o);m[39]=a;t.i4=1;f=39;e=m;break;}case 120:{break L6;}case 0:{break L2;}default:{e[39]=a;t.i4=1;f=39;e=e;break;}}m[40]=0;break L1;}e[42]=120;e=aM;break L5;}a=t.i0|0;L9:if((a&512|0)===0){if((a&128|0)===0){c=bF(o);a=(a&64|0)===0?c|0:c&65535|0;c=0;break L9;}else{a=bF(o);c=0;}}else{i=bF(o);c=i.d[i.o]|0;a=i.d[i.o+1|0]|0;}g=t.i0|0;if((g&1|0)!==0){g=g|32;t.i0=g;}if((c|a|0)===0){t.i0=g& -33;g=16;}else{g=16;}}m[40]=0;break L3;}k=t.i1|0;t.i2=k;if((k|0)>-1){t.i0=t.i0& -5;}if((c|a|k|0)===0){a=0;}else{i=new Int32Array(2);k=c;c=a;a=0;while(1){aa(i,0,1,k,c,0,g);v=i[1]|0;a=a-1|0;m[40+a|0]=e[v]|0;aa(i,0,0,k,c,0,g);k=i[0]|0;c=i[1]|0;if((c|k|0)!==0){continue;}break;}}if((g|0)===8){if((t.i0&1|0)!==0){if((t.i1|0)<=(t.i4|0)){a=a-1|0;m[40+a|0]=48;}}}t.i4=(40)-(40+a|0)|0;f=40+a|0;e=m;break L1;}t.i4=0;f=40;e=m;break L1;}m=[0];a=aA(t,m,0,r)|0;if((a|0)===-1){return  -1|0;}a=D(q,r,e,f,t.i4|0)|0;if((a|0)===-1){return  -1|0;}a=t.i3|0;c=m[0]|0;if((t.i0&2|0)!==0&&(a|0)>(c|0)){a=0;while(1){g=D(q,r,t.a7,0,1)|0;if((g|0)===-1){return  -1|0;}g=t.i3|0;a=a+1|0;if((a|0)<(g-c|0)){continue;}else{a=g;}break;}}a=(a|0)>(c|0)?a|0:c|0;return a|0;}function R(i,g){var a=null,e=0,c=null,d=0;if((q.i6|0)===0){x(q);}if(g===A){a=q.a1;}else{if(g===z){a=q.a2;}else{a=g===y?q.a3:g;}}e=a.i2|0;a.i2=e-1|0;if((e|0)<1){if((e|0)>(a.i6|0)){d=a.a0o;c=a.a0;c[d]=i;d=a.a0o;c=a.a0;if((c[d]&255)===10){e=F(q,10,a)|0;return e|0;}a.a0=c;a.a0o=d+1|0;e=c[d]|0;return e&255|0;}e=F(q,i,a)|0;return e|0;}d=a.a0o;c=a.a0;c[d]=i;d=a.a0o;c=a.a0;a.a0=c;a.a0o=d+1|0;e=c[d]|0;return e&255|0;}function ay(g,e,c,d,a){e.i3=e.i3&61439;return  -1|0;}function ah(i,g,e,f,c){var a=null,k=0;a=g;a.i3=a.i3&61439;if((a.i4<<16>>16)-1>>>0<2){k=aB(e,f,c)|0;return k|0;}aF();}function ag(g,e,c,a){e.i3=e.i3&61439;return  -1|0;}function af(c,a){return  -1|0;}function F(k,i,g){var a=null,c=0,e=null,f=0,o=null,r=null,s=0,m=0;if(k!==null){if((k.i6|0)===0){x(k);}}if(g===A){a=k.a1;}else{if(g===z){a=k.a2;}else{if(g===y){a=k.a3;}else{a=g;}}}L1:{a.i2=a.i6|0;c=a.i3|0;if((c&8)!==0){f=a.a5.a0o;e=a.a5.a0;if(e.length!==1||e!==nullArray||f!==0){break L1;}}c=N(k,a)|0;if((c|0)===0){c=a.i3|0;}else{return  -1|0;}}if((c&8192)===0){a.i3=c|8192;a.i22=a.i22& -8193;}f=a.a0o;e=a.a0;o=a.a5;s=o.a0o;r=o.a0;c=(f)-(s)|0;if((c|0)>=(o.i1|0)){c=G(k,a)|0;if((c|0)===0){f=a.a0o;e=a.a0;c=0;}else{return  -1|0;}}L2:{a.i2=(a.i2|0)-1|0;a.a0=e;a.a0o=f+1|0;e[f]=i;m=i&255;if((c+1|0)!==(o.i1|0)){if(!((m|0)===10&&(a.i3&1)!==0)){break L2;}}c=G(k,a)|0;if((c|0)!==0){return  -1|0;}}return m|0;}function N(k,i){var c=null,a=0,e=0,g=null,h=0,m=null,n=0;if((q.i6|0)===0){x(q);}if(i===A){c=q.a1;}else{if(i===z){c=q.a2;}else{c=i===y?q.a3:i;}}a=c.i3|0;e=a<<16>>16;if((e&8|0)===0){if((e&16|0)===0){k.i0=9;c.i3=a|64;return  -1|0;}if((e&4|0)!==0){h=c.a13.a0o;g=c.a13.a0;if(g.length!==1||g!==nullArray||h!==0){c.a13.a0=nullArray;c.a13.a0o=0;}a=a&65499;c.i3=a;c.i1=0;h=c.a5.a0o;g=c.a5.a0;c.a0=g;c.a0o=h;}a=a|8;c.i3=a;}g=c.a5;n=g.a0o;m=g.a0;if(!(m.length!==1||m!==nullArray||n!==0||(a&640)===512)){al(k,c);a=c.i3|0;}e=a<<16>>16;if((e&1|0)===0){if((e&2|0)===0){e=c.a5.i1|0;}else{e=0;}c.i2=e;}else{c.i2=0;c.i6=-(g.i1|0)|0;}h=g.a0o;g=g.a0;if((a&128)===0||g.length!==1||g!==nullArray||h!==0){return 0|0;}c.i3=a|64;return  -1|0;}var A=new bb();var z=new bb();var y=new bb();var aW=new Uint8Array([67,0]);var q={i0:0,a1:A,a2:z,a3:y,i4:0,a5:null,i6:0,i7:0,a8:aW[0],a9:null,a10:null,i11:0,i12:0,a13:null,a14:null,a15:null,a16:null,a17:null,a18:null,a19:{a0:null,i1:0,a2:bz([],0,32,null),a3:null},a20:{a0:null,i1:0,a2:nullArray},a21:null,a22:null,a23:null};var aV=new Uint8Array([61,61,66,69,71,73,78,32,68,85,77,80,95,65,82,82,65,89,83,61,61,10,0]);var aU=new Uint8Array([98,101,103,105,110,32,100,117,109,112,58,32,37,115,0]);var aT=new Uint8Array([116,97,98,108,101,0]);var aS=new Uint8Array([37,100,32,0]);var aR=new Uint8Array([10,101,110,100,32,32,32,100,117,109,112,58,32,37,115,10,0]);var aQ=new Uint8Array([61,61,69,78,68,32,32,32,68,85,77,80,95,65,82,82,65,89,83,61,61,10,0]);var aP=new Uint8Array([35,45,48,43,32,0]);var aO=new Uint8Array([104,108,76,0]);var aN=new Uint8Array([101,102,103,69,70,71,0]);var aM=new Uint8Array([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0]);var aL=new Uint8Array([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0]);function aX(){this.i0=0;this.i1=0;this.i2=0;this.i3=0;this.i4=0;this.i5=0;this.i6=0;this.a7=[0];this.a8=[0];this.a9=new Uint8Array(50);this.d10=-0.;this.i11=0;}function bb(){this.a0=nullArray;this.a0o=0;this.i1=0;this.i2=0;this.i3=0;this.i4=0;this.a5={a0:nullArray,a0o:0,i1:0};this.i6=0;this.a7=null;this.a8=null;this.a9=null;this.a10=null;this.a11=null;this.a12=null;this.a13={a0:nullArray,a0o:0,i1:0};this.a14=null;this.i15=0;this.a16=new Uint8Array(4);this.a17={a0:nullArray,a0o:0,i1:0};this.i18=0;this.i19=0;this.i20=0;this.a21={i0:0,i1:0};this.i22=0;}function a$(){this.i0=0;this.a1=null;this.a2=null;this.a3=null;this.i4=0;this.a5=null;this.i6=0;this.i7=0;this.a8=null;this.a9=null;this.a10=null;this.i11=0;this.i12=0;this.a13=null;this.a14=null;this.a15=null;this.a16=null;this.a17=null;this.a18=null;this.a19={a0:null,i1:0,a2:bz([],0,32,null),a3:null};this.a20={a0:null,i1:0,a2:nullArray};this.a21=null;this.a22=null;this.a23=null;}function bz(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}function bF(ptr){var ret=ptr.d[ptr.o];ptr.o++;return ret;}bf();let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");