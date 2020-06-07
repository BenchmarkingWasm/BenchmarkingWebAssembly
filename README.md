Benchmarking WebAssembly and JavaScript Programs
==
(Introduction here)

Dependencies
--
- Cheerp 2.0
- Python 2.7 /3.7
- Python2 library: 
- Google Chrome, stable version 79   
- Firefox, stable version 71
- Chrome d8 7.4.1
- Spidermonkey js JavaScript-C71.0a1

Setup and Use Instructions
--
Download the whole repository, then follow instructions below. 

#### 1. First complete the compilation of each benchmark
1) polybench-c

​	Take compilation correlation as an example

```
/opt/cheerp/bin/clang -target cheerp datamining/correlation/correlation.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -cheerp-linear-heap-size=1024 -DSMALL_DATASET -w -Oz -o poly/correlation/js/correlation_-DSMALL_DATASET_Oz.js
```



2) 

#### 2. 
1) 
2) 
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
