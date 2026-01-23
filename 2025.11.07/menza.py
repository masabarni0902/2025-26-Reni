menza_adatok = []
with open ("menza.txt", "r",encoding='utf-8') as f:
    sorok = f.readline()

    for s in sorok[1:]:
        sor = s.strip()
        adat = sor.split(';')

        osztaly= adat[0]
        letszam = int(adat[1])
        honap = adat[2]
        ar =int([3])
        nagycs_szama =int (adat[4]) 
        menza_adatok.append([osztaly,letszam,honap,ar,nagycs_szama])

for a in menza_adatok:
    # print(f"{a[0]} ; {a[1]} ; {a[2]} ; {a[3]} ;{a[4]}")

    if a[2]=="Április":
        print(f"{a[0]} ; {a[1]} ; {a[2]} ; {a[3]} ;{a[4]}")