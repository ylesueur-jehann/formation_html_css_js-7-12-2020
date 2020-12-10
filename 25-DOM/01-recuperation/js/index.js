/**
 * DOM: Document Object Model
 * Representation de notre page html,
 * sous forme d'objet javascript
 */

console.log( document );
console.log( document.URL );
console.log( document.links );

let h1Elt = document.getElementById('titre2');
// console.dir(h1Elt);
// console.log(h1Elt);

// console.warn('Salut');
// console.error('Salut');

// h1Elt.textContent = h1Elt.textContent + " - Salut !";
h1Elt.textContent += " - Salut !";
h1Elt.style.color = "red";

// querySelector() <- fonctionne avec un selecteur css
let divElt = document.querySelector('div');

// textContent le contenu text des balises
console.log('textContent: ', divElt.textContent);


// innerHTML tout le contenu de la div avec les balises
// transformer en texte
console.log("innerHTML: ", divElt.innerHTML);
h1Elt.textContent = "Salut !<a href='#'>A</a>";
h1Elt.innerHTML = " - Salut !<a href='#'>A</a>";

// innerText le texte visible dans la/les balises
console.log("innerText: ", divElt.innerText);

// document.getElementById('mon-id')
// document.getElementsByClassName('ma-classe')

let h2Elt = document.querySelector('#titre2');
console.log(h2Elt);

// Recupere le premier element trouvé
h2Elt = document.querySelector('.titres');
console.log(h2Elt);

// Recupere les elements trouvés sous forme de NodeList (tableau)
let titresElts = document.querySelectorAll('.titres');
console.log(titresElts);

for (const titre of titresElts) {
    titre.textContent += " - For of";
}

for (let i = 0; i < titresElts.length; i++) {
    titresElts[i].textContent += " - For classique";
}

titresElts.forEach(element => {
    element.textContent += " - Foreach";
});

