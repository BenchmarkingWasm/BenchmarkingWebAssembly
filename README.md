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

3)Clear the browser data, close all pages, and close all other unnecessary programs.

4)Open the browser in incognito mode, enter localhost:8000, and select the corresponding html.

5)Open the developer tool and record the time output by the console.

6)Open the memory page of the developer tool, collect the heap snapshot three times, take the last time, (Chrome: switch to stats) to record all data.

7)Close the browser and repeat steps 4-6 for other tests. Five tests per benchmark. Record 5 time data, memory data should be recorded for the first time.





#### 3. 

1) 
2) 

#### 4. 

Findings
--

### RQ1  Program Input Size

![Unable to display figure1. Check browser settings.](figs/figure.png)

polybench-c

|                | MINI_DATASET                                      | SMALL_DATASET                                     | MEDIUM_DATASET                                         | LARGE_DATASET                                             | EXTRALARGE_DATASET                                          |
| -------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------- |
| CORRELATION    | M=28 <br />N =32                                  | M=80<br />N=100                                   | M=240<br />N=260                                       | M=1200<br />N=1400                                        | M=2600<br />N=3000                                          |
| COVARIANCE     | M=28 <br />N =32                                  | M=80<br />N=100                                   | M=240<br />N=260                                       | M=1200<br />N=1400                                        | M=2600<br />N=3000                                          |
| GEMM           | NI=20<br />NJ=25<br />NK=30                       | NI=60<br />NJ=70<br />NK=80                       | NI=200<br />NJ=220<br />NK=240                         | NI=1000<br />NJ=1100<br />NK=1200                         | NI=2000<br />NJ=2300<br />NK=2600                           |
| GEMVER         | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| GESUMMV        | N=30                                              | N=90                                              | N=250                                                  | N=1300                                                    | N=2800                                                      |
| SYMM           | M=20<br />N=30                                    | M=60<br />N=80                                    | M=200<br />N=240                                       | M=1000<br />N=1200                                        | M=2000<br />N=2600                                          |
| SYR2K          | M=20<br />N=30                                    | M=60<br />N=80                                    | M=200<br />N=240                                       | M=1000<br />N=1200                                        | M=2000<br />N=2600                                          |
| SYRK           | M=20<br />N=30                                    | M=60<br />N=80                                    | M=200<br />N=240                                       | M=1000<br />N=1200                                        | M=2000<br />N=2600                                          |
| TRMM           | M=20<br />N=30                                    | M=60<br />N=80                                    | M=200<br />N=240                                       | M=1000<br />N=1200                                        | M=2000<br />N=2600                                          |
| 2MM            | NI=16<br />NJ=18<br />NK=22<br />NL=24            | NI=40<br />NJ=50<br />NK=70<br />NL=80            | NI=180<br />NJ=190<br />NK=210<br />NL=220             | NI=800<br />NJ=900<br />NK=1100<br />NL=1200              | NI=1600<br />NJ=1800<br />NK=2200<br />NL=2400              |
| 3MM            | NI=16<br />NJ=18<br />NK=20<br />NL=22<br />NM=24 | NI=40<br />NJ=50<br />NK=60<br />NL=70<br />NM=80 | NI=180<br />NJ=190<br />NK=200<br />NL=210<br />NM=220 | NI=800<br />NJ=900<br />NK=1000<br />NL=1100<br />NM=1200 | NI=1600<br />NJ=1800<br />NK=2000<br />NL=2200<br />NM=2400 |
| ATAX           | M=38<br />N=42                                    | M=116<br />N=124                                  | M=390<br />N=410                                       | M=1900<br />N=2100                                        | M=1800<br />N=2200                                          |
| BICG           | M=38<br />N=42                                    | M=116<br />N=124                                  | M=390<br />N=410                                       | M=1900<br />N=2100                                        | M=1800<br />N=2200                                          |
| DOITGEN        | NQ=8<br />NR=10<br />NP=12                        | NQ=20<br />NR=25<br />NP=30                       | NQ=40<br />NR=50<br />NP=60                            | NQ=140<br />NR=150<br />NP=160                            | NQ=220<br />NR=250<br />NP=270                              |
| MVT            | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| CHOLESKY       | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| DURBIN         | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| GRAMSCHMIDT    | M=20<br />N=30                                    | M=60<br />N=80                                    | M=200<br />N=240                                       | M=1000<br />N=1200                                        | M=2000<br />N=2600                                          |
| LU             | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| LUDCMP         | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| TRISOLV        | N=40                                              | N=120                                             | N=400                                                  | N=2000                                                    | N=4000                                                      |
| DERICHE        | W=64<br />H=64                                    | W=192<br />H=128                                  | W=720<br />H=480                                       | W=4096<br />H=2160                                        | W=7680<br />H=4320                                          |
| FLOYD_WARSHALL | N=60                                              | N=180                                             | N=500                                                  | N=2800                                                    | N=5600                                                      |
| NUSSINOV       | N=60                                              | N=180                                             | N=500                                                  | N=2500                                                    | N=5500                                                      |
| ADI            | TSTEPS=20<br />N=20                               | TSTEPS=40<br />N=60                               | TSTEPS=100<br />N=200                                  | TSTEPS=500<br />N=1000                                    | TSTEPS=1000<br />N=2000                                     |
| FDTD_2D        | TMAX=20<br />NX=20<br />NY=30                     | TMAX=40<br />NX=60<br />NY=80                     | TMAX=100<br />NX=200<br />NY=240                       | TMAX=500<br />NX=1000<br />NY=1200                        | TMAX=1000<br />NX=2000<br />NY=2600                         |
| HEAT_3D        | TSTEPS=20<br />N=10                               | TSTEPS=40<br />N=20                               | TSTEPS=100<br />N=40                                   | TSTEPS=500<br />N=120                                     | TSTEPS=1000<br />N=200                                      |
| JACOBI_1D      | TSTEPS=20<br />N=30                               | TSTEPS=40<br />N=120                              | TSTEPS=100<br />N=400                                  | TSTEPS=500<br />N=2000                                    | TSTEPS=1000<br />N=4000                                     |
| JACOBI_2D      | TSTEPS=20<br />N=30                               | TSTEPS=40<br />N=90                               | TSTEPS=100<br />N=250                                  | TSTEPS=500<br />N=1300                                    | TSTEPS=1000<br />N=2800                                     |
| SEIDEL_2D      | TSTEPS=20<br />N=40                               | TSTEPS=40<br />N=120                              | TSTEPS=100<br />N=400                                  | TSTEPS=500<br />N=2000                                    | TSTEPS=1000<br />N=4000                                     |




### RQ2  Compiler Optimization


### RQ3  rowsers and Platforms
