let t0 = performance.now();"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var N=Math.imul;var O=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function aj(){throw new Error('this should be unreachable');};fetchBuffer('dfadd_-DXXXL_DATASET_O1.wasm').then(r=>WebAssembly.instantiate(r,{i:{}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.ak.buffer);b=new Uint16Array(i.exports.ak.buffer);c=new Int32Array(i.exports.ak.buffer);d=new Float32Array(i.exports.ak.buffer);e=new Float64Array(i.exports.ak.buffer);__asm=i.exports;__heap=i.exports.ak.buffer;i.exports.K();},console.log,console.log);let t1 = performance.now();console.log(((t1 - t0)/1000).toFixed(6));console.log("File Ver 200531 2200");