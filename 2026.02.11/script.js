let feltetel=50
let osszeg=0
let dobasok=[]
while (osszeg < feltetel){    
    let dob = Math.round(Math.random()*6)
    
    if (osszeg + dob > feltetel){
        break
    }

    osszeg += dob
    dobasok.push(dob)
}

let gep = Math.round(Math.random()*10)
let probak = 0
const maxProbak = 3

function jatek(){

    if (probak >= maxProbak){
        document.getElementById("kiir").innerHTML =
        "Vége a játéknak! Elfogytak a próbálkozások."
        return
    }

    let jatekos = Number(document.getElementById("szam").value)
    probak++

    if (jatekos == gep){
        document.getElementById("kiir").innerHTML =
        "Győztél! Találatok száma: " + probak
    }
    else if (jatekos < gep){
        document.getElementById("kiir").innerHTML =
        "Nagyobb számra gondoltam! (" + probak + "/3)"
    }
    else if (jatekos > gep){
        document.getElementById("kiir").innerHTML =
        "Kisebb számra gondoltam! (" + probak + "/3)"
    }
    else{
        document.getElementById("kiir").innerHTML =
        "Nem számot adtál meg!"
    }
}
