Input Size
==

[Back to README.md](README.md)

PolyBenchC
--

|Input Size |XS |S |M |L |XL |
|:--------------|-------------------------------------------------:| -------------------------------------------------:| ------------------------------------------------------:| ---------------------------------------------------------:| -----------------------------------------------------------:|
| Input size<br>in benchmarks               | MINI_DATASET                                      | SMALL_DATASET                                     | MEDIUM_DATASET                                         | LARGE_DATASET                                             | EXTRALARGE_DATASET                                          |
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

CHStone
-

|Input Size |XS |S |M |L |XL |
|:-------------------------------------------|-------------------------------------------------:| -------------------------------------------------:| ------------------------------------------------------:| ---------------------------------------------------------:| -----------------------------------------------------------:|
| Input size<br>in benchmarks               | MEDIUM_DATASET                                      | LARGE_DATASET                                     | EXTRALARGE_DATASET                                         | XXL_DATASET                                             | XXXL_DATASET                                          |
| ADPCM                         | SIZE=100<br>IN_END=100 | SIZE=200<br>IN_END=200 | SIZE=400<br>IN_END=400 | SIZE=800<br>IN_END=800 | SIZE=1600<br>IN_END=1600 |
| AES                           |                 128128 |                 128256 | 256256                 | 2LOOPS                 | 4LOOPS                   |
| BLOWFISH                      |           KEYSIZE=5200 |          KEYSIZE=10400 | KEYSIZE=20800          | KEYSIZE=41600          | KEYSIZE=83200            |
| DFADD                         |                   N=46 |                   N=92 | N=184                  | N=368                  | N=736                    |
| DFDIV                         | N=22                   | N=44                   | N=88                   | N=176                  | N=352                    |
| DFMUL                         | N=20                   | N=40                   | N=80                   | N=160                  | N=320                    |
| DFSIN                         | N=36                   | N=72                   | N=144                  | N=288                  | N=576                    |
| GSM                           | N=160                  | N=320                  | N=640                  | N=1280                 | N=2560                   |
| MIPS                          | 1LOOP                  | 2LOOPS                 | 4LOOPS                 | 8LOOPS                 | 16LOOPS                  |
| MOTION                        | 1LOOP                  | 2LOOPS                 | 4LOOPS                 | 8LOOPS                 | 16LOOPS                  |
| SHA                           | BLOCK_SIZE=8192        | BLOCK_SIZE=16384       | BLOCK_SIZE=32768       | BLOCK_SIZE=65536       | BLOCK_SIZE=131072        |


[Back to README.md](README.md)
