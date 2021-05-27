
import sys
# gcc linear-algebra/blas/gemm/gemm.c utilities/polybench.c -I utilities -o test -DPOLYBENCH_TIME -DMEDIUM_DATASET -w -O3
# /opt/cheerp/bin/clang -target cheerp linear-algebra/blas/gemm/gemm.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -DMEDIUM_DATASET -w -o pbc_gemm.js -O3
# /opt/cheerp/bin/clang -target cheerp linear-algebra/blas/gemm/gemm.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -DMEDIUM_DATASET -w -o pbc_gemm.wasm -O3 -cheerp-mode=wasm -cheerp-wasm-loader=pbc_gemm_loader.js
# strs = ["datamining/correlation/correlation.c"
# ,"datamining/covariance/covariance.c"
# ,"stencils/adi/adi.c"
# ,"stencils/fdtd-2d/fdtd-2d.c"
# ,"stencils/heat-3d/heat-3d.c"
# ,"stencils/jacobi-1d/jacobi-1d.c"
# ,"stencils/jacobi-2d/jacobi-2d.c"
# ,"stencils/seidel-2d/seidel-2d.c"
# ]
#strs = ["medley/deriche/deriche.c"]
strs = ["medley/floyd-warshall/floyd-warshall.c","medley/nussinov/nussinov.c"]

#O1 O3 Ofast Oz O.
#/opt/cheerp/bin/clang -target cheerp linear-algebra/solvers/trisolv/trisolv.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -DMEDIUM_DATASET -w -Oz -o solvers_Oz.js
#poly_result
for i in range(len(strs)):
    #print(strs[i])                                                                 /opt/cheerp/bin/clang -target cheerp dfsin/dfsin.c  -Oz -o dfsin/dfsin_Oz.js
    m_s1 = "cd poly"
    m_str1 = "mkdir " + strs[i].split('/')[1]
    m_str2 = "cd " + strs[i].split('/')[1]
    m_str3 = "mkdir js"
    m_str4 = "mkdir wasm"
    m_str5 = "cd wasm"
    m_str6 = "mkdir O1"
    m_str7 = "mkdir O2"
    m_str8 = "mkdir Ofast"
    m_str9 = "mkdir Oz"
    m_strA = "mkdir O"
    m_str10 = "cd ../"
    m_str11 = "cd ../"
    m_str12 = "cd ../"
    print(m_s1)
    print(m_str1)
    print(m_str2)
    print(m_str3)
    print(m_str4)
    print(m_str5)
    print(m_str6)
    print(m_str7)
    print(m_str8)
    print(m_str9)
    print(m_strA)
    print(m_str10)
    print(m_str11)
    print(m_str12)
    #/opt/cheerp/bin/clang -target cheerp linear-algebra/solvers/gramschmidt/gramschmidt.c utilities/polybench.c -I utilities -DPOLYBENCH_TIME -DMEDIUM_DATASET -w  -o gramschmidt/wasm/Ofast/gramschmidt.wasm -Ofast -cheerp-wasm-loader=gramschmidt/wasm/Ofast/gramschmidt_load.js
    time_str = "date +%s%N"
    str_size = [
                "-DMINI_DATASET",
                "-DSMALL_DATASET",
                "-DMEDIUM_DATASET",
                "-DLARGE_DATASET",
                "-DEXTRALARGE_DATASET",
                ]
    #str_size = ["-DLARGE_DATASET"]
    for j in range(len(str_size)):
        size_str0 = "/opt/cheerp/bin/clang -target cheerp  " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 " + str_size[j] + " -w -o " + "poly/" + strs[i].split('/')[1] + "/js/" + strs[i].split('/')[1] + "_"+ str_size[j] + "_O.js"
        size_str1 = "/opt/cheerp/bin/clang -target cheerp  " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 " + str_size[j] + " -w -O1 -o " + "poly/" + strs[i].split('/')[1] + "/js/" + strs[i].split('/')[1] + "_"+ str_size[j] + "_O1.js"
        size_str2 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 " + str_size[j] + " -w -O2 -o " + "poly/" + strs[i].split('/')[1] + "/js/" + strs[i].split('/')[1] + "_"+ str_size[j] + "_O2.js"
        size_str3 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 " + str_size[j] + " -w -Oz -o " + "poly/" + strs[i].split('/')[1] + "/js/" + strs[i].split('/')[1] + "_"+ str_size[j] + "_Oz.js"
        size_str4 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 " + str_size[j] + " -w -Ofast -o " + "poly/" + strs[i].split('/')[1] + "/js/" + strs[i].split('/')[1] + "_" + str_size[j] + "_Ofast.js"
        size_str5 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -w -o " + "poly/" + strs[i].split('/')[1] + "/wasm/Oz/" + strs[i].split('/')[1] + "_" + str_size[j] + "_Oz.wasm -Oz" + " -cheerp-wasm-loader=poly/" + strs[i].split('/')[1] + "/wasm/Oz/" + strs[i].split('/')[1] + "_" + str_size[j] +"_Oz_load.js"
        size_str6 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -w -o " + "poly/" + strs[i].split('/')[1] + "/wasm/O2/" + strs[i].split('/')[1] + "_" + str_size[j] + "_O2.wasm -O2" + " -cheerp-wasm-loader=poly/" + strs[i].split('/')[1] + "/wasm/O2/" + strs[i].split('/')[1] + "_" + str_size[j] + "_O2_load.js"
        size_str7 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -w -o " + "poly/" + strs[i].split('/')[1] + "/wasm/Ofast/" + strs[i].split('/')[1] + "_" + str_size[j] +  "_-Ofast.wasm -Ofast" + " -cheerp-wasm-loader=poly/" + strs[i].split('/')[1] + "/wasm/Ofast/" + strs[i].split('/')[1] + "_" + str_size[j] +"_Ofast_load.js"
        size_str8 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -w -o " + "poly/" + strs[i].split('/')[1] + "/wasm/O1/" + strs[i].split('/')[1] + "_" + str_size[j] + "_O1.wasm -O1" + " -cheerp-wasm-loader=poly/" + strs[i].split('/')[1] + "/wasm/O1/" + strs[i].split('/')[1] + "_" + str_size[j] +"_O1_load.js"
        size_str9 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " utilities/polybench.c -I utilities  -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -w -o " + "poly/" + strs[i].split('/')[1] + "/wasm/O/" + strs[i].split('/')[1] + "_" + str_size[j] + "_O.wasm " + " -cheerp-wasm-loader=poly/" + strs[i].split('/')[1] + "/wasm/O/" + strs[i].split('/')[1] + "_" + str_size[j] +"_O_load.js"
        name_str0 = strs[i].split('/')[1] + "_"+ str_size[j] + "_O.js"
        name_str1 = strs[i].split('/')[1] + "_"+ str_size[j] + "_O1.js"
        name_str2 = strs[i].split('/')[1] + "_"+ str_size[j] + "_O2.js"
        name_str3 = strs[i].split('/')[1] + "_"+ str_size[j] + "_Oz.js"
        name_str4 = strs[i].split('/')[1] + "_"+ str_size[j] + "_Ofast.js"
        name_str5 = strs[i].split('/')[1] + "_" + str_size[j] +"_Oz_load.js"
        name_str6 = strs[i].split('/')[1] + "_" + str_size[j] +"_O2_load.js"
        name_str7 = strs[i].split('/')[1] + "_" + str_size[j] +"_Ofast_load.js"
        name_str8 = strs[i].split('/')[1] + "_" + str_size[j] +"_O1_load.js"
        name_str9 = strs[i].split('/')[1] + "_" + str_size[j] +"_O_load.js"

        print("echo 'start'")
        print(time_str)
        print(size_str0)
        print("echo " + "'" + name_str0 + "'")
        print(time_str)
        print(size_str1)
        print("echo " + "'" + name_str1 + "'")
        print(time_str)
        print(size_str2)
        print("echo " + "'" + name_str2 + "'")
        print(time_str)
        print(size_str3)
        print("echo " + "'" + name_str3 + "'")
        print(time_str)
        print(size_str4)
        print("echo " + "'" + name_str4 + "'")
        print(time_str)
        print(size_str5)
        print("echo " + "'" + name_str5 + "'")
        print(time_str)
        print(size_str6)
        print("echo " + "'" + name_str6 + "'")
        print(time_str)
        print(size_str7)
        print("echo " + "'" + name_str7 + "'")
        print(time_str)
        print(size_str8)
        print("echo " + "'" + name_str8 + "'")
        print(time_str)
        print(size_str9)
        print("echo " + "'" + name_str9 + "'")
        print(time_str)
        print("echo 'end'")
