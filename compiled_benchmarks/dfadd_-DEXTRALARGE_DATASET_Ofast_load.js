let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var M=Math.imul;var N=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function ai(){throw new Error('this should be unreachable');};fetchBuffer('dfadd_-DEXTRALARGE_DATASET_-Ofast.wasm').then(r=>WebAssembly.instantiate(r,{i:{}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.aj.buffer);b=new Uint16Array(i.exports.aj.buffer);c=new Int32Array(i.exports.aj.buffer);d=new Float32Array(i.exports.aj.buffer);e=new Float64Array(i.exports.aj.buffer);__asm=i.exports;__heap=i.exports.aj.buffer;i.exports.J();},console.log,console.log);let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");