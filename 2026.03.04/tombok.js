/*1.Feladat
Hozz létre, egy hőmérséklet nevű tömböt, 
Kérj be 5 adatott a felhasználótól
Viszont a konzolra, úgy kell kiirni, hogy ami korábban páros volt ahhoz hozzá kell adni, 3 fokot.
*/

// let homerseklet = [];

// for (let i = 0; i < 5; i++) {
//     let szam = Number(prompt("Adj meg egy hőmérsékletett."))
//     homerseklet.push(szam)
// }

// let ujhomersekletek=[]
// for (let h=0;h<homerseklet.length;i++)
// {
//     if(homerseklet[h] % 2 == 0)
//     {
//         let ujhomersekletek= homerseklet[h] +3
//         ujhomersekletek.push(ujhomersekletek)
//     }
//     else
//     {
//         ujhomersekletek.push(homerseklet[h])
//     }
// }

// console.log(homerseklet)
// console.log(ujhomersekletek)


/*2.Feladat
Kérjetek be a felhasználótól szavakat, adátok hozzá egy tömbhöz
Irjátok ki, hogy az adott szó milyen hosszú pl: alma - 4
Vizsgáljátok meg a szavak hoszát és adjátok össze öket.
*/ 

// let szavak = [];

// for (let i=0; i < 3;i++)
// {
//     let szo = prompt("Adj meg egy szót:")
//     szavak.push(szo)
// }

// let szohossza=0
// for (let sz = 0;sz<szavak.length;sz++)
// {
//     let hossz = szavak[sz].length
//     szohossza+=hossz
// }

// console.log("A szavak öszz hossza: " + szohossza);


/*3.Véletlen szám*/

// function veletlenszam(min,max){
//     return Math.floor(Math.random() * (max-min +1) +min)
// }

// let szam=veletlenszam(1,100)

// let szamok = []
// while(szamok.length!=szam)
// {
//     let veletlenszam=Math.floor(Math.random()*50)
//     szamok.push(veletlenszam)
// }

// console.log(szamok)
/*
Melyik a legnagyobb és melyik a legkissebb szám a tömben?
 */

// let maximum=Math.max (...szamok)
// console.log("Legnagyobb szám: " + maximum)

// let minimum=Math.min (...szamok)
// console.log("Legkissebb szám: " + minimum)


