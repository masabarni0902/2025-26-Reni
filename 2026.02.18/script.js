// let termekek = new Map([
//     ['telefon', 150000]
// ])

// let telefonok = new Map()

// console.log(termekek.get('telefon'));
// termekek.set('laptop',210000)
// console.log(termekek.get('laptop'));
// console.log("Map mérete: " + termekek.size);
// termekek.set('egér',5000)
// console.log("Map mérete: " + termekek.size);
// termekek.delete('telefon')
// console.log("Map mérete: " + termekek.size);
// // termekek.clear()
// // console.log("Map mérete: " + termekek.size);
// console.log(termekek.has('laptop'));

// termekek.set('gamerszék',50000)

// termekek.forEach(function(value,key){
//     console.log(key + "=" +value);    
// })

// for (let termek of termekek.entries()){
//     console.log(termek);
// }
// for (let t of termekek.keys()){
//     console.log(t);    
// }
// for (let t of termekek.values()){
//     console.log(t);    
// }

//1.Feladat
// let etlap = new Map()
// etlap.set('főétel','pizza')
// etlap.set('főétel','hamburger')
// etlap.set('főétel','lasagne')
// etlap.set('leves','paradicsomleves')
// etlap.set('desszert','palacsinta')
// etlap.set('italok','cappy')
// console.log(etlap.get('leves'));
// console.log("A Map hossza: " + etlap.size);
// etlap.delete('főétel')
// etlap.clear()
// if (etlap.size<= 0){
//     console.log("Üres: " + etlap.size);    
// }
// else{
//     console.log("A Map hossza: " + etlap.size);
// }

let szovegek = new Map()
szovegek.set('alma',0)
szovegek.set('dinnye',0)
function bekuld(){
    let szoveg=document.getElementById("szo").value
    let szoveghossza = szoveg.length
    if(!szovegek.has(szoveg,szoveghossza)){
    szovegek.set(szoveg,szoveghossza)
    console.log("Sikeresen a Map-hez lett adva az elem.");    
}
else{
    console.log("Már létezik ilyen elem a Map-ben.");    
}
for (sz of szovegek.entries()){
   document.getElementById("kiiras").innerHTML=sz
   console.log(sz);
   
    
}

}

function modositas(){
    let mszo = document.getElementById("mszo").value
    let modositott = document.getElementById("modositott").value
    let modositotth =modositott.length

    if (szovegek.has(mszo)){
        szovegek.delete(mszo)
        szovegek.set(modositott,modositotth)
    }
    else{
        console.log("Nincs ilyen szó.");
        
    }
    for (sz of szovegek.entries()){
    console.log(sz);
   
    
}
}
// console.log(szovegek.get('alma'));
// function hosszusagszamol(){
//     let osszeg=0
//     for (sz of szovegek.entries()){
//     sz[1]=sz[0].length
//     console.log(sz); 
//     osszeg+=sz[1] 
//     console.log("Hosszúságok összege: " + osszeg);   
// }
// }
// hosszusagszamol()



