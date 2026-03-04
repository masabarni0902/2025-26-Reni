// let users=[]

// function register(){
// let nev=document.getElementById("nev").value
// let pass =document.getElementById("pass").value

// let user={
//     nev_key:nev,
//     pass_key:pass
// }

// users.push(user)
// console.log(users);
// }

//termekek nevü tömböt hozzatok létre
//Objtum létrehozása, tartalma: 
//Objektum neve legyen termek
// kategoria,
// termek_nev,
// ar,
// eladott_db,
// raktar_db

let termekek=[]
let tenylegesRaktar=[]
function termekekMegad(){
    let kategoria=document.getElementById("kategoria").value
    let termek_nev=document.getElementById("termek_nev").value
    let ar=Number(document.getElementById("ar").value)
    let eladott_db = Number(document.getElementById("eladott_db").value)
    let raktar_db = Number(document.getElementById("raktar_db").value)


    let termek = {
        kategoria:kategoria,
        termek_nev:termek_nev,
        ar:ar,
        eladott_db:eladott_db,
        raktar_db:raktar_db
}
termekek.push(termek)
console.log(termekek);

const table = document.getElementById("adatok")
table.innerHTML=`
    <th>
        <td>Kategória</td>
        <td>Termék név</td>
        <td>Ár</td>
        <td>Eladott termékek(db)</td>
        <td>Raktáron lévő termékek(db)</td>
    </th>
`
let bevetel=0

let tenyleges_db=0

termekek.forEach(termek => {
    table.innerHTML += `
    <tr>
        <td>${termek.kategoria}</td>
        <td>${termek.termek_nev}</td>
        <td>${termek.ar} Ft</td>
        <td>${termek.eladott_db}</td>
        <td>${termek.raktar_db}</td>
    </tr>`

    let osszeg=termek.ar*termek.eladott_db
    bevetel+=osszeg 

    tenyleges_db=raktar_db-eladott_db

    
    
    
})
return [termek.termek_nev,tenyleges_db]

}
let adatok=termekekMegad()
let nev=adatok[0]
console.log(nev);

let tenyleges=adatok[1]
console.log(tenyleges);

let t_raktar={
    nev:nev,
    tenyleges:tenyleges
}
tenylegesRaktar.push(t_raktar)
console.log(tenylegesRaktar);

//Adott termékből hány termék maradt ténylegesen a raktáron
//pl Telefon - 3 db