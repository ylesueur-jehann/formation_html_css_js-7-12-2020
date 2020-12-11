/** 
 * Exercice: 
 * Lorsque l'on clique sur le bouton "creation lien", 
 * un evenement se déclenche et, crée 10 liens 
 * qui seront affichés dans la balise <div id="link"> 
 */

function creerLiens() {

    // let linkDivElt = document.getElementById('link'); 
    let linkDivElt = document.querySelector('#link');
    
    for (let i = 1; i <= 10; i++) {
        let newAElt = document.createElement('a');
        let newBrElt = document.createElement('br');
        
        newAElt.textContent = "Lien " + i;
        newAElt.setAttribute('href', "#");
        // newAElt.style.display = 'block';
        
        linkDivElt.appendChild(newBrElt); 
        linkDivElt.appendChild(newAElt); 
    }
}

/* AIDE : */
/* 1) Récuperer la zone d'affichage
 * 2) On veut crée un évenement lorsque l'utilisateur clique sur le bouton. 
 * 3) Cet evenement appellera une fonction 'creerLien()' par exemple
 * 3) Dans cette fonction on veut créer 10 liens
 *  3a) On veut créer un élément HTML <a></a>
 *  3b) On veut lui ajouter un texte (par exemple: Lien 1, Lien2 ... )
 *  3c) On veut ajouter le nouveau lien à la balise <div></div> 
 */
