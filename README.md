Benchmarking WebAssembly and JavaScript Programs
==

(Introduction here)

Dependencies
--

- Cheerp 2.0
- Python 2.7 /3.7
- Google Chrome, stable version 79   
- Firefox, stable version 71
- Chrome d8 7.4.1
- Spidermonkey js JavaScript-C71.0a1

Setup and Use Instructions
--

Download the whole repository, then follow instructions below. 

#### 1. First complete the compilation of each benchmark

1) polybench-c

​	Take compilation correlation as an example,and other documents including examples need to compile five different inputsizes and five different optimization parameters

```
//Compile to js file
/opt/cheerp/bin/clang -target cheerp datamining/correlation/correlation.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -cheerp-linear-heap-size=1024 -DSMALL_DATASET -w -Oz -o poly/correlation/js/correlation_-DSMALL_DATASET_Oz.js	
```

```
//Compile into wasm file
/opt/cheerp/bin/clang -target cheerp datamining/correlation/correlation.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -cheerp-linear-heap-size=1024 -cheerp-mode=wasm -DSMALL_DATASET -w -o poly/correlation/wasm/Oz/correlation_-DSMALL_DATASET_Oz.wasm -Oz -cheerp-wasm-loader=poly/correlation/wasm/Oz/correlation_-DSMALL_DATASET_Oz_load.js
```



It should be noted that there are three specific files that need to be modified to the corresponding type during compilation

```
  // [medley] deriche
  //void* ret = (float*) malloc (val);
  // [medley] floyd-warshall nussinov
  //void* ret = (int*) malloc (val);
  // Original implementation -------
  // void* ret = xmalloc (val);
```

2) CHStone

​	Take compilation dfsin as an example,and other documents including examples need to compile five different inputsizes and five different optimization parameters

```
//Compile to js file
/opt/cheerp/bin/clang -target cheerp dfsin/dfsin.c -cheerp-linear-heap-size=1024 -DXXXL_DATASET -Oz -o chs/dfsin/js/dfsin_-DXXXL_DATASET_Oz.js
```

```
//Compile into wasm file
/opt/cheerp/bin/clang -target cheerp dfsin/dfsin.c -cheerp-linear-heap-size=1024 -cheerp-mode=wasm -DXXXL_DATASET -o chs/dfsin/wasm/Oz/dfsin_-DXXXL_DATASET_Oz.wasm -Oz -cheerp-wasm-loader=chs/dfsin/wasm/Oz/dfsin_-DXXXL_DATASET_Oz_load.js
```



#### 2. Use html to run these files

1) The test methods of the two programs are similar,Replace the src with the corresponding js file, and the wasm file with the corresponding load.js file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>PolyBenchC Test</title>
    <script defer src="./adpcm_-DEXTRALARGE_DATASET_O.js"></script>
</head>
<body>
    <h1 id="main"> - JS/WASM Test - adpcm_-DEXTRALARGE_DATASET_O.js - </h1>
    <h1 id="pagetitle">Open the console log to read the output.</h1>
</body>
</html>
```

2) After the replacement is complete, use python to build a local server.

```
//Works with python2.7
python -m SimpleHTTPServer 
```

3)

#### 3. 

1) 
2) 

#### 4. 

Findings
--

### RQ1  Program Input Size

![Unable to display figure1. Check browser settings.](figs/figure.png)


### RQ2  Compiler Optimization


### RQ3  rowsers and Platforms
