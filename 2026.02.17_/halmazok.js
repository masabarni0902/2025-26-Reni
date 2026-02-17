// let betuk = new Set(['a','b','c','d'])

// for (let elem of betuk) {
// console.log(elem);
// }

// console.log(betuk.size);

// if (betuk.has('c')) {
// console.log('Ez az elem a halmazban van!');
// }

// let iterator = betuk.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// let szamok = new Set();
// while (szamok.size != 5) {
// szamok.add(Math.floor(Math.random() * 90 + 1));
// }
// console.log(szamok);


let A = new Set()
let B = new Set()

while(A.size != 20 )
{
    A.add(Math.floor(Math.random() *100 + 1 ))
}

while(B.size != 20 )
{
    B.add(Math.floor(Math.random() *100 + 1 ))
}

let = ujhalmaz = new Set()
let = kozosek = new Set()
let = teljes = new Set()
for(let elem of A)
{
    if(!B.has(elem))
    {
        ujhalmaz.add(elem)
    }
    else
    {
        kozosek.add(elem)
    }
}

console.log(A)
console.log(B)
console.log(ujhalmaz)
console.log(kozosek)
console.log(teljes)