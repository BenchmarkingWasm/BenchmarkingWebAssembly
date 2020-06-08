import os
import subprocess
def getfile(file_dir):
    paths =[]
    filenames = []   
    for root, dirs, files in os.walk(file_dir):  
        for file in files:  
            if  os.path.splitext(file)[1] == '.js':  
                paths.append(os.path.join(root, file))
                filenames.append(os.path.splitext(file)[0])
    return paths,filenames

#perf stat -x, -e cpu-cycles,instructions,cache-references,cache-misses,branch-instructions,\
# branch-misses,bus-cycles,stalled-cycles-frontend,stalled-cycles-backend,ref-cycles,\
# L1-dcache-load-misses,L1-dcache-loads,L1-dcache-stores,L1-dcache-store-misses,\
# L1-dcache-prefetches,L1-dcache-prefetch-misses,L1-icache-loads,L1-icache-prefetches,\
# L1-icache-prefetch-misses,L1-icache-load-misses,LLC-load-misses,LLC-loads,LLC-load-misses,\
# LLC-stores,LLC-store-misses,LLC-prefetch-misses,LLC-prefetches,dTLB-load-misses,dTLB-loads,\
# iTLB-load-misses,dTLB-stores,dTLB-store-misses,dTLB-prefetches,dTLB-prefetch-misses,iTLB-loads,\
# iTLB-load-misses,branch-load-misses,branch-loads ./d8 ./chs_adpcm.js &>result.txt

def autorun():
    cmdstr = "perf stat -x, -e cpu-cycles,instructions,cache-references,cache-misses,branch-instructions,branch-misses,bus-cycles,stalled-cycles-frontend,stalled-cycles-backend,ref-cycles,L1-dcache-load-misses,L1-dcache-loads,L1-dcache-stores,L1-dcache-store-misses,L1-dcache-prefetches,L1-dcache-prefetch-misses,L1-icache-loads,L1-icache-prefetches,L1-icache-prefetch-misses,L1-icache-load-misses,LLC-load-misses,LLC-loads,LLC-load-misses,LLC-stores,LLC-store-misses,LLC-prefetch-misses,LLC-prefetches,dTLB-load-misses,dTLB-loads,iTLB-load-misses,dTLB-stores,dTLB-store-misses,dTLB-prefetches,dTLB-prefetch-misses,iTLB-loads,iTLB-load-misses,branch-load-misses,branch-loads,r00c4,r00c5,r04c5,r01c5,r04c4,r01c4,r08c4,r01d1,r02d1,r04d1,r08d1,r10d1,r20d1,r81d0,r82d0,r412e,r4f2e,r1c0 "
    filepath = input("Please input the path to JS and wasm : \n")
    paths,filenames = getfile(filepath)
    print(paths)
    tool = input("Please input the path of the tool to run JS and wasm (Chrome or Firefox)\n")
    cmdstr += tool
    i = 0
    Errorfile = []
    for path in paths:
        if("d8"in tool):
            outputpaths=os.listdir("./")
            if "Chrome" not in outputpaths:  
                os.mkdir("./Chrome")
            ouputfile1= './Chrome/'+filenames[i]
        else:
            outputpaths=os.listdir("./")
            if "Firefox" not in outputpaths:  
                os.mkdir("./Firefox")
            ouputfile1= './Firefox/'+filenames[i]
        for j in range(5):
            ouputfile = ouputfile1+str(j)+".txt"
            output = open(ouputfile,'w+')
            cmd = cmdstr +" "+ path
            out= subprocess.getoutput(cmd)
            #print(rc)
            if "Error" in out or "error" in out:
                print("Error in "+ ouputfile)
                Errorfile.append(path)
            else:
                print("Writing to"+ ouputfile+"\n")
            output.write(str(out))
            output.close()
        i += 1
    print("Exist "+str(len(Errorfile))+"Errorfiles:\n")
    print(Errorfile)
autorun()