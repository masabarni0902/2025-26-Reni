# szam =int(input("Kérem adjon meg egy számot:"))

# if szam % 5 == 0 and szam % 2 == 0:
#     print("MInd két szám osztható!")
# elif szam % 5 == 0:
#     print("A szám osztható 5-vel")
# elif szam % 2 == 0:
#     print("A szám osztható 2-vel")
# else:
#     print("A szám egyike sem osztható")


# szam =int(input("Kérem adjon meg egy számot:"))

# if szam % 4 == 0 and  szam < 100:
#     print("A szám osztható 4-el de kissebb mint 100")
# elif szam % 4 == 0 and szam > 100:
#     print("A szám ozstható 4-el de nagyobb mint 100")
# elif szam % 4 != 0:
#     print("A szám nem osztató 4-el.")


# szamok = [10, 24, 12, 34, 20]
# Kérd be hány darab uj elemet akarsz hozzáadni a meglévő listához.
# ujszam = int(input("Kérem adja meg hány elemt adjon hozzá a listához."))
# Ezt követöen ennyiszer ismételve kérj be felhasználotól adatgokat
# szamlalo = 1
# for szamok in range(0,ujszam):
#     print(f"{szamlalo}.szam: ")
#     beolvasott = int(input())
#     szamok.append(beolvasott)
#     szamlalo += 1
# Jelenitse meg a konzolon, hogy összesen hány elem található a listában bővités utén (count)
# print(len(szamok))
#Jellenisd meg a listát egy más mellé
# for i in range(len(szamok)):
#     if i == len(szamok) -1:
#         print(szamok[i])
#     else:
#         print(szamok[i], end=";")
#Rendezd a listát növekvő sorrendbe majd jelenisd meg az első elemet
# szamok.sort()
#Távolisd el a listábol a legutolsó elemet
# szamok.pop()


# print(f"Az első elem a listába: {szamok[0]}")
# print(f"Az első elem a listába:{szamok[-1]}")


# import random
# orszagok = ["anglia", "franciaország","spanyolország","portugália","görögország","lenygelország","svédország","finnország"]

#Kérj be a felhasználotol egy országot.
# bekert = input("Kérem adjon meg egy országot.")

#Ellenörizze hogy adott ország szerepel-e a listába.

# if bekert in orszagok:
#     print("Benne van az osrszág a listában.")
# else:
#     print("Nincs benne az ország a listában.")

#Számoild meg hogy hány ország van.

# print(f"Országok száma:{len(orszagok)}")

#Ird ki a listát ABCÉ sorendben.

# print("ABCÉ:")
# orszagok.sort()

# for orszag in orszagok:
#     print(f"- {orszag}")

#Importáld a random modult és kevert meg a listát.

# print("RANDOM")
# random.shuffle(orszagok)

# for orszag in orszagok:
#     print(f"- {orszag}")

#Ird ki a megkevert lista első és utolsó elemét. 
# print(f"Az első elem a listába: {orszagok[0]}")