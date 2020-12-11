/** 
 * Exercice: 
 * Lorsque l'on clique sur le bouton "création bouton", 
 * un événement se declenche et, appelle une fonction nommée creerBtn().
 * la fonction creerBtn appellera une fonction ajouterXBouton()
 * qui prend en parametre un nombre. 
 * la fonction ajouterXBouton s'occupe de créer autant de boutons que la variable
 * 'combien' 
 * qui seront affichés dans la balise <div id="boutons"> 
 * /!\ On veut une fonction createBtn par exemple
 */

 function ajouterXBouton(combien) {
    // let linkDivElt = document.getElementById('link'); 
    let btnDivElt = document.querySelector('#boutons');
    
    for (let i = 1; i <= combien; i++) {
        let newBtnElt = document.createElement('button');
        
        newBtnElt.textContent = "Bouton " + i;
        newBtnElt.style.display = 'block';
        
        btnDivElt.appendChild(newBtnElt); 
    }
 }

 function creerBtn() {
    ajouterXBouton(20);
 }

/* AIDE : */
/* 1) Récuperer la zone d'affichage
 * 2) Ajouter un événement sur la balise HTML button
 * 3) L'événement appelera une fonction creerBtn()
 * 4) La fonction creerBtn appellera une fonction ajouterXBouton
 * 5) ajouterXBouton est une fonction avec un parametre 'combien' --> ajouterXBouton(combien)
 * 6) Dans cette fonction, on veut faire autant de fois que le paramètre 'combien':
 *  a) créer un element HTML <button></button>
 *  b) ajouter un texte (par: Button 1, Button 2 ... ) 
 *  c) ajouter le nouveau boutton à la balise <div></div>
 */