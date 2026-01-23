# print("Név: John\n Kor:23")

# print("Név: John\t Kor:23")

# print("alma", "banán", "cseresznye", sep=".")

# print("Első sor", end=" : ")

# print("Ez egy backslash: \\")

# print(f"kg\g")

# print("Egy időzőjel:")

#1. Feladat

# for i in range(5):
#     szam = int (input("Adj meg egy számot:"))
#     if szam % 2 != 0:
#         print(szam)

#2. Feladat
# osszeg=0
# hany_termek  = int(input("Hány terméket vásároltál:"))
# for i in range(hany_termek):
#     ar = int(input("Adj meg a termékek árát: "))
#     osszeg += ar

# atlag = osszeg/hany_termek

# if atlag >= 5000:
#     print(f"Drága")
# elif atlag >= 2000:
#     print(f"Közepesen drága")
# elif atlag < 2000:
#     print(f"Olcsó")

#3.1 Feladat

# helyes_kod = False
# probalkozas=0
# while not helyes_kod:
#     kod=input("Add meg a széf kodját: ")
#     if kod == "246":
#         print("Kinyilt a széf!")
#         helyes_kod=True
#     else:
#         print("A széf zárva maradt!")
#         probalkozas+=1
# print(f"Probálkozások száma:{probalkozas}")


#3.2 Feladat
# probalkozas=0
# for i in range(5):
#     kod=input("Add meg a széf kodját:")
#     if kod == "246":
#         print("Kinyilt a széf!")
#         break
#     else:
#         print("A széf zárva maradt!")
#         probalkozas+=1

# probalkozas(f"A probálkozások száma: {probalkozas}")

#4. Feladat

# for i in range(3):
#     pin=input("Add meg a pinkodot:")
#     if pin == "123":
#         print("Helyes PIN, belépés engedélyezve!")
#         break
#     else:
#         print("Túl sok hibás próbálkozás, a kártya zárolva!")

# i = 0
# while 1 <= 3:
#     pinkod = input("Add meg a pinkodot: ")
#     if pinkod=="123":
#         print("Helyes PIN, belépés engedélyezve!")
#         break
#     else:
#         i+= 1 
#         if i ==3:
#             print("Túl sok hibás próbálkozás, a kártya zárolva!")
#             break

#6. Feladat

# bekert0 = False
# osszeg = 0
# db = 0
# while not bekert0:
#     bekert_szam = int(input("Adj meg egy számot: "))
#     if bekert_szam == 0:
#         break
#     else:
#         osszeg+=bekert_szam
#         db+=1
# atlag = osszeg/db
# print(f"A számok: {osszeg}, átlag: {round(atlag)}")

# szamok=[]
# szamok.append(4)
# print(szamok[0])

# for i in range(5):
#     bekertszam = int(input("Adj meg egy számot:"))
#     szamok.append(bekertszam)


# for szam in szamok:
#     print(szam)

# nevek = []
# for i in range(5):
#     nev = input("Adj meg egy nevet:")
#     nevek.append(nev)
# for n in nevek:
#     print(n)

# print(nevek[2])
# print(nevek[-1])

# nevek.remove([0])

# for n in nevek:
#     print(n)