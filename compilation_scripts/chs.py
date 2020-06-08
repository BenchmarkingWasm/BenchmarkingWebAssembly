

# chs_stone
# /opt/cheerp/bin/clang -target cheerp mips/mips.c -o chs_mips.js -O3
# /opt/cheerp/bin/clang -target cheerp mips/mips/mips.c -O0 -o nussinov_O0.js
strs = ["mips/mips.c"
,"motion/mpeg2.c"
,"gsm/gsm.c"
,"adpcm/adpcm.c"
,"aes/aes.c"
,"blowfish/bf.c"
,"sha/sha_driver.c"
,"dfadd/dfadd.c"
,"dfmul/dfmul.c"
,"dfdiv/dfdiv.c"
,"dfsin/dfsin.c"]
# strs = ["dfsin/dfsin.c"]
# /opt/cheerp/bin/clang -target cheerp gsm/gsm.c -o chs_gsm.wasm -O3  -cheerp-wasm-loader=chs_gsm_loader.js
# /opt/cheerp/bin/clang -target cheerp dfsin/dfsin.c  -Oz -o dfsin/dfsin_Oz.js
for i in range(len(strs)):
    #print(strs[i])chs_result
    m_s1 = "cd chs"
    m_str1 = "mkdir " + strs[i].split('/')[0]
    m_str2 = "cd " + strs[i].split('/')[0]
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
    str_size = [
                    "-DMEDIUM_DATASET",
                    "-DLARGE_DATASET",
                    "-DEXTRALARGE_DATASET",
                    "-DXXL_DATASET",
                    "-DXXXL_DATASET"
                    ]
    #str_size = ["-DLARGE_DATASET"]
    for j in range(len(str_size)):
        # modify_str1 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -O1 -o " + "chs_result/" + \
        #               strs[i].split('/')[0] + "/js/" + strs[i].split('/')[0] + "_O1.js"
        # modify_str5 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + "   -o " + "chs_result/" + strs[i].split('/')[
        #     0] + "/wasm/O2/" + strs[i].split('/')[
        #                   0] + "_O2.wasm -O2 -cheerp-mode=wasm " + " -cheerp-wasm-loader=chs_result/" + \
        #               strs[i].split('/')[0] + "/wasm/O2/" + strs[i].split('/')[0] + "_O2_load.js"
        # time_str1 = "l_date=`date +%s%N`"
        # time_str2 = "r_date=`date +%s%N`"
        # time_str3 = "date=`expr $r_date - $l_date`"
        # time_str4 = "echo ${date}"
        # print(time_str1)
        # print(time_str2)
        # print(time_str3)
        # print(time_str4)
        time_str = "date +%s%N"
        size_str0 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 " + str_size[j] + "  -o " + "chs/" + strs[i].split('/')[0] + "/js/" + strs[i].split('/')[0] + "_"+ str_size[j] + "_O.js"
        size_str1 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 " + str_size[j] + " -O1 -o " + "chs/" + strs[i].split('/')[0] + "/js/" + strs[i].split('/')[0] + "_"+ str_size[j] + "_O1.js"
        size_str2 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 " + str_size[j] + " -O2 -o " + "chs/" + strs[i].split('/')[0] + "/js/" + strs[i].split('/')[0] + "_"+ str_size[j] + "_O2.js"
        size_str3 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 " + str_size[j] + " -Oz -o " + "chs/" + strs[i].split('/')[0] + "/js/" + strs[i].split('/')[0] + "_"+ str_size[j] + "_Oz.js"
        size_str4 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 " + str_size[j] + " -Ofast -o " + "chs/" + strs[i].split('/')[0] + "/js/" + strs[i].split('/')[0] + "_" + str_size[j] + "_Ofast.js"
        size_str5 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -o " + "chs/" + strs[i].split('/')[0] + "/wasm/Oz/" + strs[i].split('/')[0] + "_" + str_size[j] + "_Oz.wasm -Oz" + " -cheerp-wasm-loader=chs/" + strs[i].split('/')[0] + "/wasm/Oz/" + strs[i].split('/')[0] + "_" + str_size[j] +"_Oz_load.js"
        size_str6 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -o " + "chs/" + strs[i].split('/')[0] + "/wasm/O2/" + strs[i].split('/')[0] + "_" + str_size[j] + "_O2.wasm -O2" + " -cheerp-wasm-loader=chs/" + strs[i].split('/')[0] + "/wasm/O2/" + strs[i].split('/')[0] + "_" + str_size[j] + "_O2_load.js"
        size_str7 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -o " + "chs/" + strs[i].split('/')[0] + "/wasm/Ofast/" + strs[i].split('/')[0] + "_" + str_size[j] +  "_-Ofast.wasm -Ofast" + " -cheerp-wasm-loader=chs/" + strs[i].split('/')[0] + "/wasm/Ofast/" + strs[i].split('/')[0] + "_" + str_size[j] +"_Ofast_load.js"
        size_str8 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -o " + "chs/" + strs[i].split('/')[0] + "/wasm/O1/" + strs[i].split('/')[0] + "_" + str_size[j] + "_O1.wasm -O1" + " -cheerp-wasm-loader=chs/" + strs[i].split('/')[0] + "/wasm/O1/" + strs[i].split('/')[0] + "_" + str_size[j] +"_O1_load.js"
        size_str9 = "/opt/cheerp/bin/clang -target cheerp " + strs[i] + " -cheerp-linear-heap-size=1024 -cheerp-mode=wasm " + str_size[j] + " -o " + "chs/" + strs[i].split('/')[0] + "/wasm/O/" + strs[i].split('/')[0] + "_" + str_size[j] + "_O.wasm " + " -cheerp-wasm-loader=chs/" + strs[i].split('/')[0] + "/wasm/O/" + strs[i].split('/')[0] + "_" + str_size[j] +"_O_load.js"
        name_str0 = strs[i].split('/')[0] + "_"+ str_size[j] + "_O.js"
        name_str1 = strs[i].split('/')[0] + "_"+ str_size[j] + "_O1.js"
        name_str2 = strs[i].split('/')[0] + "_"+ str_size[j] + "_O2.js"
        name_str3 = strs[i].split('/')[0] + "_"+ str_size[j] + "_Oz.js"
        name_str4 = strs[i].split('/')[0] + "_" + str_size[j] + "_Ofast.js"
        name_str5 = strs[i].split('/')[0] + "_" + str_size[j] +"_Oz_load.js"
        name_str6 = strs[i].split('/')[0] + "_" + str_size[j] + "_O2_load.js"
        name_str7 = strs[i].split('/')[0] + "_" + str_size[j] +"_Ofast_load.js"
        name_str8 = strs[i].split('/')[0] + "_" + str_size[j] +"_O1_load.js"
        name_str9 = strs[i].split('/')[0] + "_" + str_size[j] + "_O_load.js"


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


