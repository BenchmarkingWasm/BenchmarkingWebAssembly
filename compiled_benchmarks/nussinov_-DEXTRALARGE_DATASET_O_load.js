let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var be=Math.imul;var bf=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}function aN(){throw new Error("Abort called");}function aH(i,j,h){var f=null,g=0;f=aG(i,j,h);g=h-1|0;if((i[j+g|0]&255)===10){f=f.substr(0,g);f=String(f);console.log(f);return;}f=String(f);console.log(f);}function aG(s,t,p){var f=0,h=null,g=0,n=null,o=0,k=0,m=0,i=null;h=String();o=t;n=s;g=p;L1:while(1){while(1){if((g|0)!==0){k=n[o]|0;if((k&255)!==0){m=k&255;if(k<<24>-16777216){f=m;}else{if((k&255)<192){f=m&63|f<<6;}else{if((k&255)<224){f=m&31;}else{if((k&255)<240){f=m&15;}else{f=m&7;}}}}g=g-1|0;if((g|0)===0){g=0;}else{if((n[o+1|0]&192)===128){o=o+1|0;n=n;continue;}}if(f>>>0<65536){i=String.fromCharCode(f);i=String(i);h=h.concat(i);o=o+1|0;n=n;continue L1;}f=f-65536|0;i=String.fromCharCode((f>>>10)+55296|0);i=String(i);h=h.concat(i);i=String.fromCharCode((f&1023)+56320|0);i=String(i);h=h.concat(i);o=o+1|0;n=n;continue L1;}}break;}break;}return h;}function bA(bytes){var pages=(bytes+65535)>>16;try{__asm.bC.grow(pages);a=new Uint8Array(__asm.bC.buffer);b=new Uint16Array(__asm.bC.buffer);c=new Int32Array(__asm.bC.buffer);d=new Float32Array(__asm.bC.buffer);e=new Float64Array(__asm.bC.buffer);return pages<<16;}catch(e){return -1;}}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function _asm_aH(i,h){aH(a,i,h);}function bB(){throw new Error('this should be unreachable');};fetchBuffer('nussinov_-DEXTRALARGE_DATASET_O.wasm').then(r=>WebAssembly.instantiate(r,{i:{aH:_asm_aH,am:bB,aN:aN,bA:bA,}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.bC.buffer);b=new Uint16Array(i.exports.bC.buffer);c=new Int32Array(i.exports.bC.buffer);d=new Float32Array(i.exports.bC.buffer);e=new Float64Array(i.exports.bC.buffer);__asm=i.exports;__heap=i.exports.bC.buffer;i.exports.a_();},console.log,console.log);let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");