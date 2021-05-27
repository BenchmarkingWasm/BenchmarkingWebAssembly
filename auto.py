# coding=utf-8

from selenium import webdriver
from selenium.common.exceptions import TimeoutException as SeleniumTimeoutException
from selenium.common.exceptions import NoSuchElementException as SeleniumNoSuchElementException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
import os
import wmi
import copy

HTML_PREFIX = '<script defer src="'
HTML_POSTFIX = '"></script>'

WEB_DRIVER_PATH = ''

ENABLE_DEBUG = 1
DEBUG_HEADLESS = 0

order_pbc = ["covariance", "correlation", "gemm", "gemver", "gesummv", "symm", "syrk", "syr2k", "trmm", "2mm",
             "3mm", "atax", "bicg", "doitgen", "mvt", "cholesky", "durbin", "gramschmidt", "lu", 'ludcmp', "trisolv",
             "deriche", "floyd-warshall", "nussinov", 'adi', "fdtd-2d", 'heat-3d', "jacobi-1d", "jacobi-2d",
             "seidel-2d"]

order_chs = ['adpcm', 'aes', 'blowfish', 'dfadd', 'dfdiv', 'dfmul', 'dfsin', 'gsm',
             'mips', 'motion', 'sha']

benchmark_list = order_pbc + order_chs

BENCHMARK_JS_POSTFIX = '_-DMEDIUM_DATASET_O2.js'
BENCHMARK_WASM_POSTFIX = '_-DMEDIUM_DATASET_O2_load.js'


html_file_path = 'test.html'
log_file_path = 'log.txt'


def currTime():
    return time.strftime("%m-%d %H:%M:%S", time.localtime())


def killChromeAndChromedriver_win32(onlyKillChromedriver=False):
    wmiHandler = wmi.WMI()
    try:
        if not onlyKillChromedriver:
            for process in wmiHandler.Win32_Process(name="chrome.exe"):
                process.Terminate()
                if ENABLE_DEBUG:
                    print('[W]chrome.exe killed')
        for process in wmiHandler.Win32_Process(name=WEB_DRIVER_PATH):
            process.Terminate()
            if ENABLE_DEBUG:
                print('[W]chromedriver.exe killed')
    except:
        pass


def DesktopInit(type):
    desired = DesiredCapabilities().CHROME
    #desired["pageLoadStrategy"] = "normal"  # complete load
    desired['goog:loggingPrefs'] = {'browser': 'ALL'}

    desktopOptions = webdriver.ChromeOptions()
    if ENABLE_DEBUG and DEBUG_HEADLESS:
        desktopOptions.add_argument("--headless")

    desktopOptions.add_argument('--incognito')

    if type == 0:
        pass
    else:
        raise Exception('Unknown type: ' + str(type))

    browser = webdriver.Chrome(executable_path=WEB_DRIVER_PATH, options=desktopOptions, desired_capabilities=desired)

    return browser


def DesktopMain():
    killChromeAndChromedriver_win32()
    TimeUsed = [0, 0, 0, 0, 0]
    skipCount = 0
    for i in range(5):
        browser = DesktopInit(0)
        browser.delete_all_cookies()
        domain = 'http://localhost:8000/test.html'
        browser.get(domain)
        time.sleep(1)
        data = browser.get_log('browser')
        #time.sleep(0.5)
        print(data)
        if data:
            if (data[0]['message'].split(' ')[2].replace('"', '') == 'ReferenceError:'):
                TimeUsed[i] = -1
                skipCount += 1
                if skipCount >= 3:
                    print(str(i + 1) + ' iteration(s) done - ' + str(TimeUsed[i]))
                    browser.quit()
                    killChromeAndChromedriver_win32()
                    break
            else:
                TimeUsed[i] = float(data[0]['message'].split(' ')[2].replace('"', ''))
        print(str(i+1) + ' iteration(s) done - ' + str(TimeUsed[i]))
        browser.quit()
        killChromeAndChromedriver_win32()
    print(TimeUsed)

    sum = 0
    cnt = 0
    for i in range(len(TimeUsed)):
        if TimeUsed[i] != 0:
            sum += TimeUsed[i]
            cnt += 1
    if not cnt:
        print("avg: 0")
    else:
        print('avg from ' + str(cnt) + ':')
        print(str(sum / cnt))
    fil = open(log_file_path, 'a')
    fil.write('Normal:')
    for i in range(len(TimeUsed)):
        fil.write(str(TimeUsed[i])+',')
    fil.write('\n')
    fil.write('avg from ' + str(cnt) + ':\n')
    fil.write(str(sum / cnt) + '\n')
    fil.close()

    print('---\n' + currTime())


def main():
    offset = 0
    for i in range(offset, len(benchmark_list)):
        fil = open(html_file_path, 'w')
        fil.write(HTML_PREFIX+benchmark_list[i]+BENCHMARK_JS_POSTFIX+HTML_POSTFIX)
        fil.close()
        fil = open(log_file_path, 'a')
        fil.write(benchmark_list[i]+BENCHMARK_JS_POSTFIX + '\n')
        fil.close()
        print(benchmark_list[i]+BENCHMARK_JS_POSTFIX)
        DesktopMain()
        fil = open(html_file_path, 'w')
        fil.write(HTML_PREFIX+benchmark_list[i]+BENCHMARK_WASM_POSTFIX+HTML_POSTFIX)
        fil.close()
        print(benchmark_list[i]+BENCHMARK_WASM_POSTFIX)
        fil = open(log_file_path, 'a')
        fil.write(benchmark_list[i]+BENCHMARK_WASM_POSTFIX + '\n')
        fil.close()
        DesktopMain()


if __name__ == '__main__':
    main()
