#1 feladat

termek_nev = input("Add meg a termék nevét:")
termek_ar = int(input("Add meg a termék árát:"))

if termek_ar > 20000:
    fizettendo = termek_ar*0.7
elif termek_ar >= 10000:
    fizettendo = termek_ar*0.85
elif termek_ar < 10000:
    fizettendo = termek_ar

print(f"A termék neve: {termek_nev}, és a termék ára: {round(fizettendo)} Ft.")

#2 Feladat

mertekegyseg = input("Add meg a cél mértékegységet (kg/g):")
atvaltando = float(input("Add meg az átváltandó mennyiség:"))

if mertekegyseg =="kg":
    eredmeny = atvaltando/1000
    mertek = "kg"
elif mertekegyseg =="g":
    eredmeny = atvaltando*1000
    mertek = "g"

print(f"Az átváltás eredménye:{eredmeny} {round(eredmeny)} {mertek}")

#3 Feladat

nev = input("Add meg a neved:")
kor = int(input("Add meg a korodat:"))
diak = input("Vam diákod:")

jegy = 2500
if kor < 6:
    jegy = 0
elif kor >= 18 and diak == "igen" and kor < 65:
    fizetendo = jegy*0.5
elif kor >= 18 and diak == "nem" and kor < 65:
    fizetendo = jegy
elif kor >= 65:
    fizetendo = jegy*0.2

print(f"Név: {nev} \n Kor: {kor} \n A belépő jegy ára: {round(fizetendo)} Ft.")

#8 Feladat

szamok = input("Írjál be 5 számot, szóközzel elválasztva: ").split()

for i in szamok:
    szam = int(i)
    if szam >= 1 and szam <= 10:
        db+=1

print(f"{db} 1 és 10 között van.") 

#9 Feladat

etelek = []
for i  in range(1,6):
    etel = input("Add meg a kedvenc ételed:")
    etelek.append(etel)

print(etelek)
for e in etelek:
    print(e,end=",")

#10 Feladat

lista = [17,74,33,28,67,12,42,63]
print(lista[0])
print(lista[-1])

oszthato7el = 0
for l in lista:
    if l % 7 == 0:
        oszthato7el = l
        break
keresettindex = lista.index(oszthato7el)
print(f"Keresett szám: {oszthato7el},{keresettindex} indexen van")

keresettszam = 0 
for i in lista:
    if i >= 60 and i <= 70:
        keresettszam = i 
        break
index = lista.index(keresettszam)
print(f"A szám: {keresettszam}, index {index}")