// function vizsgal(){
//     let nev=document.getElementById("nev").value
//     let keresztnev=nev.split(" ")
//     // let szoveg = document.getElementById("szoveg").value
//     console.log(keresztnev[1]);

//     console.log("Monogram:" + keresztnev[0][0],keresztnev[1][0]);
    
//     let db =0
    
    
    // let kisbetüs=nev.toLowerCase()
    // for (let i = 0; i < kisbetüs.length; i++){        
    //     if (kisbetüs[i]=="c"){
    //     db++
    // }
    // }
    

    // console.log("Az (a) betű: " + db + " szerepel a névben.");
    
    // let ujszoveg=szoveg.replaceAll(" ","#")
    // console.log(ujszoveg);
    
    // alert("Szia " +keresztnev[1])
    
// }

// let dobasok=[]
// let osszeg=0

// for (let i=0; i < 100; i++){
//     let dob=Math.floor(Math.random()*6)+1
//     osszeg+=dob
//     dobasok.push(dob)
// }
// console.log(dobasok);
// let atlag=osszeg/dobasok.length
// console.log(atlag);
// let db=0
// for (let d=0;d<dobasok.length;d++){
//     if (dobasok[d]>atlag){
//         db++
//     }    
// }
// console.log(db + " db dobás van ami nagyobb mint az átlag: " + atlag);

let szamok=[]
let osszeg=0
for (let i=0; i<100; i++){
    let szam=Math.round(Math.random()* 100 - 50)
    osszeg+=szam
    szamok.push(szam)
}
console.log(szamok);
let legnagyobb=0

// for (let sz=0;sz<szamok.length;sz++){
//     if (szamok[sz]> legnagyobb){
//         legnagyobb=szamok[sz]
//     }
// }
// let legnagyobbIndex=
// console.log("legnagyobb szám: " +legnagyobbIndex);
parosdb=0
paratlandb=0
for (let sz=0;sz<szamok.length;sz++){
    if (szamok[sz]%2==0){
        parosdb++
    }
    else{
        paratlandb++
    }
    // if (szamok[sz]%7==0){
    //     console.log("Van benne 7-el osztható szám.");
        
    // }

    // if (sz > 0 && szamok[sz-1] < 0){
    //     console.log("A " + szamok[sz] + "előtti " + szamok[sz-1]);
        
    // }
    // if(sz < szamok.length -1 && szamok[sz+1] <0 ){
    //     console.log("A " + szamok[sz] + "utáni " + szamok[sz+1]);
    // }
}
// let hossz= szamok.length
// console.log(hossz);

// let oszthatoak=[]
// let db=0
// for (let h=hossz; h <= szamok.length;h--){
//     if (db >= 3){
//         break
//     }
//     if (szamok[h]%3==0 && szamok[h]%5 !=0){
//         oszthatoak.push(szamok[h])
//         db++
//     }
// }
// console.log("Az összeg: " + osszeg + " Páros: " + parosdb + " Páratlan: " + paratlandb);
// console.log(szamok);

// console.log(oszthatoak);
let megtalal
let db=0
for (let k=0; k<szamok.length;k++){
    if (db>= 3){
        break
    }
    if(szamok.includes(szamok[k])){
        megtalal=szamok[k]
        db++
    }
}
console.log(megtalal + "szám szerepel 3-szor a tömben.");