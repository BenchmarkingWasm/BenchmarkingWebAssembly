let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var cy=Math.imul;var cz=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}function bU(){throw new Error("Abort called");}function bN(i,j,h){var f=null,g=0;f=bM(i,j,h);g=h-1|0;if((i[j+g|0]&255)===10){f=f.substr(0,g);f=String(f);console.log(f);return;}f=String(f);console.log(f);}function bM(q,r,p){var f=0,h=null,g=0,m=null,n=0,k=0,l=0,i=null;h=String();n=r;m=q;g=p;L1:while(1){while(1){if((g|0)!==0){k=m[n]|0;if((k&255)!==0){l=k&255;if(k<<24>-16777216){f=l;}else{if((k&255)<192){f=l&63|f<<6;}else{if((k&255)<224){f=l&31;}else{if((k&255)<240){f=l&15;}else{f=l&7;}}}}g=g-1|0;if((g|0)===0){g=0;}else{if((m[n+1|0]&192)===128){n=n+1|0;m=m;continue;}}if(f>>>0<65536){i=String.fromCharCode(f);i=String(i);h=h.concat(i);n=n+1|0;m=m;continue L1;}f=f-65536|0;i=String.fromCharCode((f>>>10)+55296|0);i=String(i);h=h.concat(i);i=String.fromCharCode((f&1023)+56320|0);i=String(i);h=h.concat(i);n=n+1|0;m=m;continue L1;}}break;}break;}return h;}function cU(bytes){var pages=(bytes+65535)>>16;try{__asm.cW.grow(pages);a=new Uint8Array(__asm.cW.buffer);b=new Uint16Array(__asm.cW.buffer);c=new Int32Array(__asm.cW.buffer);d=new Float32Array(__asm.cW.buffer);e=new Float64Array(__asm.cW.buffer);return pages<<16;}catch(e){return -1;}}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function _asm_bN(i,h){bN(a,i,h);}function cV(){throw new Error('this should be unreachable');};fetchBuffer('gramschmidt_-DMINI_DATASET_-Ofast.wasm').then(r=>WebAssembly.instantiate(r,{i:{bN:_asm_bN,bU:bU,cU:cU,}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.cW.buffer);b=new Uint16Array(i.exports.cW.buffer);c=new Int32Array(i.exports.cW.buffer);d=new Float32Array(i.exports.cW.buffer);e=new Float64Array(i.exports.cW.buffer);__asm=i.exports;__heap=i.exports.cW.buffer;i.exports.ct();},console.log,console.log);let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");