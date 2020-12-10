function inner() {
    let zone = document.getElementById("created");
    console.time("document.innerHTML : ");

    for (let i = 0; i < 1_000; i++) {
        zone.innerHTML += `
            <p>
                <a href="https://dawan.fr" title="lien vers dawan">Dawan</a>
            </p>
        `;
    }

    console.timeEnd("document.innerHTML : ");;
}

function create() {
    
    let zone = document.getElementById("created");
    console.time("document.createElement() : ");

    for (let i = 0; i < 1_000; i++) {
        let aElt = document.createElement("a");
        aElt.textContent = "Dawan";
        aElt.setAttribute("href", "http://dawan.fr");
        aElt.setAttribute("title", "Lien vers dawan.fr");

        let pElt = document.createElement("p");
        pElt.appendChild(aElt);
        zone.appendChild(pElt);
    }

    console.timeEnd("document.createElement() : ");
}