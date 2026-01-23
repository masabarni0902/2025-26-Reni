flottak=[]
evek=[]
uzamanyag_tipusok=[]

with open("flotta.txt","r",encoding='utf-8') as f:
    sorok=f.readlines()

    for sor in sorok[1:]:
        s=sor.strip()
        adat=s.split()

        marka=adat[0]
        modell=adat[1]
        ev=int(adat[2])
        fogyasztas=float(adat[3])
        uzemanyag=adat[4]
        flottak.append([marka,modell,ev,fogyasztas,uzemanyag])


legregebbi_modell=""
legregebbi_marka=""
for flot in flottak:
    evek.append(flot[2])

legrebbi_ev=min(evek)
db=0
for flo in flottak:
    if flo[4]=="Benzin":
        db+=1

    if flo[4] not in uzamanyag_tipusok:
        uzamanyag_tipusok.append(flo[4])

    if flo[2]==legrebbi_ev:
        legregebbi_marka=flo[0]
        legregebbi_modell=flo[1]
print(f"A legöregebb jármű: {legregebbi_marka} {legregebbi_modell} {legrebbi_ev}")
    # print(f"{flot[0]} {flot[1]} {flot[2]} {flot[3]} {flot[4]}")
uzamanyag_tipusok.sort()
print(f"Benzin üzemanyagú autók száma: {db}")
print(";".join(i for i in uzamanyag_tipusok))

with open("uzemanyagtípusok.txt","w",encoding='utf-8') as fajl:
    fajl.write(";".join(i for i in uzamanyag_tipusok))