#Szorgalmi feladat

# Autó Bérlés
#Előszőr kérjétek be a felhasználó nevét
#Felhasználotól meg kell kérdezni, hogy milyen autót szeretne bérelni.(Audi,BMW,Toyota) legyen az áruk külümbőző.
#Kérdezzétek meg hogy hány napra szeretnék bérelni
# A konzolra irjauk ki a felhasználo nevét milyen kocsit ,hány napra és mennyit fizit.

berlo_neve = input("Milyen névre lesz az autó:")
auto = input("Melyik auto legyen(Audi,BMW,Toyota)")
ido = int(input("Hány napra szeretmé bérelni az autot:"))

if auto == "Audi":
     ar = 60000*ido
elif auto == "BMW":
     ar = 50000*ido
elif auto == "Toyota":
     ar = 20000*ido

print (f"Kedves {berlo_neve} az autó {ido} napora lesz nálad és össze {ar} Ft-ot kell fizetned.")