import random

# with open("proba.txt",'w', encoding='utf-8') as f:
#     f.write("Első sor.")
#     f.write("Második sor.")
#     f.write("Harmadik sor.")


#     with open("proba.txt","r",encoding='utf-8') as file:
#         kiir=file.readline()
#         print(kiir)
#         print(type(kiir))


# with open("proba.txt" , "r" , encoding='utf-8') as file:
#     kiir=file.readline()
#     print(kiir)
#     print(type(kiir))


# with open("proba.txt","r",encoding='utf-8') as file:
#     kiir=file.readlines()
#     print(kiir)
#     print(type(kiir))


veletlen_szamok = []

for i in range(1,101):
    szam = random.randint(1,500)
    veletlen_szamok.append(szam)

# print(',' .join(str(i1) for i1 in veletlen_szamok))
with open("Veletlen_szamok.txt","w",encoding='utf-8') as fajl:
    fajl.write(',' .join(str(i1) for i1 in veletlen_szamok))
print("Sikeres volt a fájlbairás.")

with open("veletlen_szamok.txt","r",encoding='utf-8') as f:
    kiir=f.readlines()
    #print(kiir)
    #print(type(kiir)) 

szamok=[]
for i  in kiir:
    szam=i.split(';')
    szamok.append(szam)

print(len(szamok))  