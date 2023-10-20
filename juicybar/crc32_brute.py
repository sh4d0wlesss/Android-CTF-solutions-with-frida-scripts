import zlib
import itertools
from string import ascii_letters,digits


keywords = [''.join(i) for i in itertools.product(ascii_letters, repeat = 4)]

for i in keywords:
    rezult = hex(zlib.crc32(i.encode()) & 0xffffffff)
    if rezult == '0x2ffbab17':
        print(i, rezult)