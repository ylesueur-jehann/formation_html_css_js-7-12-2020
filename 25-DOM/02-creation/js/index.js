/**
 * Etape 1: Création de l'objet 
 */
//  createElement('nomDeLaBaliseHTML')
let newLiElt = document.createElement('li'); 
// <li></li>
console.log(newLiElt);

/**
 * Etape 2: Personnalisation
 */
// <li>Abricot</li>
newLiElt.textContent = "Abricot";
newLiElt.style.color = "orange";

/**
 * Etape 3: Insertion dans le DOM
 */
let ulElt = document.querySelector('ul');
// Ajoute l'élément en dernière position
ulElt.appendChild(newLiElt);


/***************************** */
/* <a href="https://dawan.fr" title="Lien vers dawan.fr">
        Lien vers Dawan
   </a> 
*/

/* <a></a> */
let newAElt = document.createElement('a');

newAElt.textContent = "Lien vers Dawan";
newAElt.href = "https://dawan.fr";
// setAttribute('attrHTML', valeur)
newAElt.setAttribute('title', 'Lien vers dawan.fr');
newAElt.setAttribute('target', '_blank');
newAElt.setAttribute('id', 'super-id');
// console.log( newAElt.getAttribute('href') );
// newAElt.removeAttribute('title');

let bodyElt = document.querySelector('body');
bodyElt.appendChild(newAElt);

// https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentElement
// bodyElt.insertAdjacentElement('afterbegin', newLiElt);


// Très peu performant
bodyElt.innerHTML += '<br/><a href="">Lien dawan</a>'

