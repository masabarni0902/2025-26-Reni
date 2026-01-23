# #Szöveges string
# nev = "Béla"
# kor = 26
# print(nev)

# #Egész szám int adat
# szam = 5
# szam1 = 10
# print(szam)

# #Lebegöpotos adat
# #pi = 3.14
# #print(pi)

# #Logikai adat
# draga = True

# print(type(szam + szam1))
# print(f"Név:{nev} Kor:{kor}")
# print(f"Béla  születési éve:{2025-kor}")
# print(f"Az ösztás eredménye:{szam1/szam}")
# print(f"A szorzás eredméyne:{szam1*szam}")

# bekert_nev = input("Add meg a neved:")
# print(f"Szia {bekert_nev}")
# bekert_kor = int(input("Hány éves vagy?"))
# szuletesi_ev = 2025-bekert_kor
# print(f"Születési éved:{szuletesi_ev}")

# sz1 = int(input("Add meg az első számot:"))
# sz2 = int(input("Add meg az második számot:"))
# eredmeny = sz1 + sz2
# print(f"Öszeadás eredménye:{eredmeny}")


# sz1 = int(input("Add meg az első számot:"))
# sz2 = int(input("Add meg az második számot:"))
# eredmeny = sz1 -  sz2
# print(f"Kivonás eredménye:{eredmeny}")

# print("Valutaváltó")
# euro = int(input("Add meg átváltandó euró öszegét:"))
# atvaltas = 400
# osszeg =euro * atvaltas
# print(f"Az összeg: {osszeg} Ft")

# print("Valutaváltó")
# forint = int(input("Add meg az átvaltandó összeget:"))
# atvaltas2 = 392
# osszeg = forint / atvaltas2
# print(f"Az összeg: {osszeg} euro")

# szam = 10
# eletkor = 10
# if szam > 5:
#     print("A szám naygobb mint 5.")

# eletkor = int(input("Add meg a korod:"))
# if eletkor >= 18:
#     print("Nagykorú vagy")
# elif eletkor < 18:
#     print("Kiskorú vagy.")

#Mozi jegy vásárlás.

# jegy = input("Milyen jegyet vásárolsz(diák,felnőt,gyerek):")
# jegyek_szama = (int(input("Add meg a jegyek számát:")))

# if jegy == "diák":
#     print(f"A fizetendő összeg: {2000 * jegyek_szama} Ft")
# elif jegy == "felnőt":
#     print(f"A fizetendő összeg: {2800 * jegyek_szama} Ft")
# else:
#     print(f"A fizetendő összeg: {500 * jegyek_szama} Ft")


#Pizza rendelés

# pizza_meret = input("Milyen méretü leygen a pizza (S,M,L):").upper
# pizzak_szama = (int(input("Add meg a pizzák számát:")))

# if pizza_meret == "S":
#     ar = 2000*pizzak_szama
# elif pizza_meret == "M":
#     ar = 3500*pizzak_szama
#     ar = 5000*pizzak_szama

# extra_feltet = input("Kérsz valammilye feltétet (igen/nem):").upper

# if extra_feltet == "igen":
#     feltet = input("Milyen feltétet szeretne(sonka/sajt):").upper
#     if feltet== "sajt":
#         arf=600
#     elif feltet == "sonka":
#         arf=550
#         print(f"A fizetendő: {ar+arf} Ft.")

# elif extra_feltet == "nem":

#     print(f"A fizetendő összeg:{ar} Ft.")


#Szorgalmi feladat
# Autó Bérlés
#Előszőr kérjétek be a felhasználó nevét
#Felhasználotól meg kell kérdezni, hogy milyen autót szeretne bérelni.(Audi,BMW,Toyota) legyen az áruk külümbőző.
#Kérdezzétek meg hogy hány napra szeretnék bérelni
# A konzolra irjauk ki a felhasználo nevét milyen kocsit ,hány napra és mennyit fizit.