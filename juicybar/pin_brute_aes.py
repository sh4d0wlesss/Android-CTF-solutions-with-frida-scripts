from Crypto.Cipher import AES
import hashlib
import base64

def decrypt(encrypted,key,iv):   
  cipher = AES.new(key, AES.MODE_CBC, iv)
  decryptedtext = cipher.decrypt(base64.b64decode(encrypted))
  #print(decryptedtext)   
  decryptedtextP = decryptedtext.rstrip(b'\0').decode("UTF-8")  
  print(decryptedtextP) 
  return decryptedtextP


code = '4e2NkIxZ7rYo+ycMiXdqpUwmILL/QkMys4qaSPTr8E4='
#key = "The pin for decryption is: " + str + "!"
#key = hashlib.sha256(key.encode('utf-8')).digest()              
       
for i in range(10000):
    try:
        pin = '{0:04}'.format(i)
        key = "The pin for decryption is: " + pin + "!"
        iv = "0123456789abcdef"
        decrypted = decrypt(code,key,iv)
        print(decrypted) 
    except:
       pass