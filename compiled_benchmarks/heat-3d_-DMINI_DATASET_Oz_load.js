let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var b3=Math.imul;var b4=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}function bj(){throw new Error("Abort called");}function bb(i,j,h){var f=null,g=0;f=ba(i,j,h);g=h-1|0;if((i[j+g|0]&255)===10){f=f.substr(0,g);f=String(f);console.log(f);return;}f=String(f);console.log(f);}function ba(q,r,p){var f=0,h=null,g=0,m=null,n=0,k=0,l=0,i=null;h=String();n=r;m=q;g=p;L1:while(1){while(1){if((g|0)!==0){k=m[n]|0;if((k&255)!==0){l=k&255;if(k<<24>-16777216){f=l;}else{if((k&255)<192){f=l&63|f<<6;}else{if((k&255)<224){f=l&31;}else{if((k&255)<240){f=l&15;}else{f=l&7;}}}}g=g-1|0;if((g|0)===0){g=0;}else{if((m[n+1|0]&192)===128){n=n+1|0;m=m;continue;}}if(f>>>0<65536){i=String.fromCharCode(f);i=String(i);h=h.concat(i);n=n+1|0;m=m;continue L1;}f=f-65536|0;i=String.fromCharCode((f>>>10)+55296|0);i=String(i);h=h.concat(i);i=String.fromCharCode((f&1023)+56320|0);i=String(i);h=h.concat(i);n=n+1|0;m=m;continue L1;}}break;}break;}return h;}function cn(bytes){var pages=(bytes+65535)>>16;try{__asm.cp.grow(pages);a=new Uint8Array(__asm.cp.buffer);b=new Uint16Array(__asm.cp.buffer);c=new Int32Array(__asm.cp.buffer);d=new Float32Array(__asm.cp.buffer);e=new Float64Array(__asm.cp.buffer);return pages<<16;}catch(e){return -1;}}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function _asm_bb(i,h){bb(a,i,h);}function co(){throw new Error('this should be unreachable');};fetchBuffer('heat-3d_-DMINI_DATASET_Oz.wasm').then(r=>WebAssembly.instantiate(r,{i:{bb:_asm_bb,bj:bj,cn:cn,}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.cp.buffer);b=new Uint16Array(i.exports.cp.buffer);c=new Int32Array(i.exports.cp.buffer);d=new Float32Array(i.exports.cp.buffer);e=new Float64Array(i.exports.cp.buffer);__asm=i.exports;__heap=i.exports.cp.buffer;i.exports.bY();},console.log,console.log);let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");