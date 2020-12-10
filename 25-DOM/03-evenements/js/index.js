function direBonjour(){
    console.log('Bonjour');
}

function creerLien() {
    let newAElt = document.createElement('a');

    newAElt.textContent = 'Dawan';
    newAElt.href = "https://dawan.fr";
    newAElt.style.display = 'block';

    let bodyElt = document.querySelector(
        'body'
    );
    bodyElt.appendChild(newAElt);
}

function afficherLettre(event) {
    // console.log(event);
    // console.log(event.data);
    console.log(event.target.value);
}