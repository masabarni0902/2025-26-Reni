#Random importálás

import random

# Véletlen_szám = random.randint(1, 100)
# print("A véletlen szám:", Véletlen_szám)

# szamok =[]
# lista_hossza=random.randint(1,21)
# print(f"A lista hossza: {lista_hossza}")
# for i in range(lista_hossza):
#     szamok.append(i)

# print(",".join(str(sz) for sz in szamok))

# print(f"A random modullal generált hosz: {lista_hossza}")
# for i in range(lista_hossza):
#     szam=random.randint(100,1001)
#     szamok.append(szam)

# print(",".join(str(sz) for sz in szamok))
# lhosz=len(szamok)
# print(f"A lista hossza: {lhosz}")

# hetnapjai=["hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap"]
# valasztott=random.choice(hetnapjai)
# probalkozas=0
# eltalatta=False
# while not eltalatta:
#     nap=input("Mondj egy napot:")
#     if nap == valasztott:
#         print(f"Eltaláltad: {valasztott}, probálkozások száma:{probalkozas}.")
#         eltalatta=True
#     else:
#         print("Nem találtad el, próbáld újra.")
#         probalkozas+=1

# lehetosegek=["F","I"]
# dobasok=[]

# for i in range(5):
#     dob=random.choice(lehetosegek)
#     dobasok.append(dob)

# print(",".join(d for d in dobasok))
# tipp=input("Tippeld meg az 5 dobás eredményét (F/I):")
# dobas=random.choices(lehetosegek)
# print(f"A tipp {tipp}, a dobás eredménye: {dobas}")
# if tipp==dobas:
#     print("Eltaláltad!")
# else:
#     print("Nem találtad el.")

# hetnapjai=["hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap"]
# with open("hétnajai.txt","w", encoding="utf-8") as file:
#     file.write(",".join(n for n in hetnapjai))
# print("Sikeres volt a fájlbairás.")

szamok=[]
for i in range(1, 100):
    szam=random.randint(1, 101)
    szamok.append(szam)
szamok.sort()
szamok.reverse()
with open("szamok.txt","w") as fajl:
    fajl.write(",".join(str(sz) for sz in szamok))
print("Sikeres fájlírás.")