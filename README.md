Benchmarking WebAssembly and JavaScript Programs
==

(Introduction here)

Dependencies
--

- Cheerp 2.0
- Python 2.7
- Google Chrome, stable version 79   
- Firefox, stable version 71
<!-- Chrome d8 7.4.1
- Spidermonkey js JavaScript-C71.0a1-->

Setup and Use Instructions
--

Download the whole repository, then follow instructions below to compile and run the experiment. 
Note that if you want to repeat the experiment in the paper, skip step 1. 
 
[Check compilation scripts.](compilation_scripts)

### 1. Experiment Preparation

#### a) Source Code Transformation  
Currently, there is not a universal solution to make every benchmark compatible with Cheerp. 
You can read modifications with comments in each benchmark to check what we have done, 
the purposes of these fixes, possible side effects and how we minimize them.  

[Check modified benchmarks.](modified_benchmarks)
#### b) Compilation to WebAssembly/JavaScript  
[Check compiled benchmarks.](compiled_benchmarks)
##### PolyBenchC

Take compilation 'correlation' benchmark as an example. Pay attention to three compile options:
```-cheerp-linear-heap-size=1024``` for enlarging WebAssembly maximum heap size to 1024 MiB,
```-DSMALL_DATASET``` for setting input size to 'S',
```-Oz``` for using optimization level ```-Oz```.

```
//Compile to JavaScript file
/opt/cheerp/bin/clang -target cheerp datamining/correlation/correlation.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -cheerp-linear-heap-size=1024 -DSMALL_DATASET -w -Oz -o poly/correlation/js/correlation_-DSMALL_DATASET_Oz.js	
```

```
//Compile to WebAssembly file
/opt/cheerp/bin/clang -target cheerp datamining/correlation/correlation.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -cheerp-linear-heap-size=1024 -cheerp-mode=wasm -DSMALL_DATASET -w -o poly/correlation/wasm/Oz/correlation_-DSMALL_DATASET_Oz.wasm -Oz -cheerp-wasm-loader=poly/correlation/wasm/Oz/correlation_-DSMALL_DATASET_Oz_load.js
```

It should be noted that there are three specific benchmarks in this suite that need to modify 
'utilities/polybench.c' to the corresponding type before compilation.

```
// [medley] deriche
//void* ret = (float*) malloc (val);
// [medley] floyd-warshall nussinov
//void* ret = (int*) malloc (val);
```

##### CHStone

Take compilation 'dfsin' benchmark as an example.

```
//Compile to JavaScript file
/opt/cheerp/bin/clang -target cheerp dfsin/dfsin.c -cheerp-linear-heap-size=1024 -DXXXL_DATASET -Oz -o chs/dfsin/js/dfsin_-DXXXL_DATASET_Oz.js
```

```
//Compile to WebAssembly file
/opt/cheerp/bin/clang -target cheerp dfsin/dfsin.c -cheerp-linear-heap-size=1024 -cheerp-mode=wasm -DXXXL_DATASET -o chs/dfsin/wasm/Oz/dfsin_-DXXXL_DATASET_Oz.wasm -Oz -cheerp-wasm-loader=chs/dfsin/wasm/Oz/dfsin_-DXXXL_DATASET_Oz_load.js
```

### 2. Experiment Process

#### a) Modify the HTML file to load the JavaScript/WebAssembly file:
JavaScript: replace the value of 'src' with the corresponding JavaScript file path, 
then save the following HTML code as 'test.html';
WebAssembly: replace the value of 'src' with the corresponding 'xx_load.js' file path, 
then save the following HTML code as 'test.html'.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script defer src="./XXX.js"></script>
</head>
<body></body>
</html>
```

#### b) Build a local server where 'test.html' locates.

It is fine to use Node.js or any other approach to set up a server. Below is a simple method
if you have python2 installed. 
```
//Works with python 2.7
python -m SimpleHTTPServer 
```

#### c) Clear the browser data, close all pages, and close any unnecessary programs.

#### d) Open the browser in incognito mode, enter ```localhost:8000/test.html```.

#### e) Wait until browser stop loading, open the developer tool of the browser, record the time output from the console.

#### f) Open the 'memory' page of the developer tool, collect the heap snapshot three times, take the last time for stability, (Chrome: switch to stats) to record all data.

#### g) Close the browser. Repeat d-f) for 4 more times. The execution time/memory is the average of 5 time/memory data collected.
 
#### h) Repeat steps d-g) for another benchmark. 

### 3. Statistics
[Check raw test data of the experiment in paper.](test_results)  

Findings
--

### RQ1  Program Input Size
[Detailed input size](input_size.md)

![Unable to display figure. Check browser settings.](figs/input_size.png)





### RQ2  Compiler Optimization





### RQ3  rowsers and Platforms





