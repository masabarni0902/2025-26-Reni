// Gomb kiválasztása
const magicBtn = document.getElementById('magic-btn');

// Eseményfigyelő hozzáadása kattintásra
magicBtn.addEventListener('click', function() {
    createEggRain();
});

function createEggRain() {
    // Kellemes pasztell színek palettája
    const colors = ['#ff9a9e', '#a18cd1', '#fbc2eb', '#84fab0', '#8fd3f4', '#fccb90', '#ffffd1'];

    // 30 db tojás generálása
    for (let i = 0; i < 30; i++) {
        // Késleltetjük a tojások létrejöttét, hogy ne egyszerre essenek
        setTimeout(() => {
            const egg = document.createElement('div');
            egg.classList.add('falling-egg');

            // Véletlenszerű X pozíció (vízszintesen a képernyőn)
            const leftPosition = Math.random() * 100;
            
            // Véletlenszerű szín a palettáról
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Véletlenszerű esési sebesség (2 és 5 másodperc között)
            const duration = Math.random() * 3 + 2; 

            // Stílusok alkalmazása az egyedi tojásra
            egg.style.left = leftPosition + 'vw';
            egg.style.top = '-50px';
            egg.style.background = randomColor;
            egg.style.animationDuration = duration + 's';

            // Hozzáadás a HTML dokumentumhoz
            document.body.appendChild(egg);

            // Takarítás: A memóriaszivárgás elkerülése végett töröljük a tojást, ha leesett
            setTimeout(() => {
                egg.remove();
            }, duration * 1000);

        }, i * 100); // 100 milliszekundumonként indul egy újabb tojás
    }
}