/** 
 * Exercice: 
 * Lorsque l'on clique sur le bouton "Publier", 
 * un événement se déclenche et, appelle une fonction 
 * prend en paramètre:
 *    1-la valeur du champ textarea qui à
 * pour nom: 'article',
 *    2-la valeur du champ input qui a pour nom size
 *    3-la valeur de champ input qui a pour nom couleur
 *  (ex: creePara(str, size, color) )
 * la fonction 'creePara' s'occupe de crée un paragraphe
 * <p></p> avec comme texte: 'str' , une taille de 'size'
 * et comme couleur 'couleur'.
 * le parahraphe sera affiché dans la balise <div id="blog">
 */






/* AIDE : */
/* 
 * 1) Ajouter un evenement de type submit à la balise formulaire
 * 2) Cet evenement execute la fonction submitForm(event)
 * 3) Dans la fonction submitForm(event):
 *    a) Récupérer ce que l'utilisateur a saisie dans le champ 'article' via la cible de l'evenement
 *    b) Récupérer ce que l'utilisateur a saisie dans le champ 'size' via la cible de l'evenement
 *    c) Récupérer ce que l'utilisateur a saisie dans le champ 'color' via la cible de l'evenement
 * 4) Creer une fonction avec 3 parametres 'str', 'size', 'color'  exemple: creePara(str, size, color)
   5) la fonction 'creePara(str, size, color)' doit:
     a) Récuperer l'article-area
     b) crée une balise <p></p>
     c) la balise aura pour texte, la valeur du parametre 'str'
     d) la balise aura pour couleur, la valeur du parametre 'color'
     e) la balise aura pour taille, la valeur du parametre 'size'
     f) ajouter la balise <p> dans article-area
 * 6) Il faudra supprimer le comportement par defaut de l'evenement pour
 *      eviter le rafraichissement de la page qui detruirait le paragraphe
 *          -> event.preventDefault();
 */

/* AIDE : */
/* 1) Récuperer la zone d'affichage & le textArea nommé 'article' dans le DOM
 * 2) On veut creer une fonction avec des parametre 'str', 'size', 'color' 
       --> creePara(str, size, color)
   3) la fonction 'creePara(str)' doit:
     a) crée une balise <p></p>
     b) la balise aura pour texte, la valeur du parametre 'str'
     c) le texte de la balise doit etre de taille 'size'
     d) le texte de la balise doit etre de couleur 'color'
     e) ajouter la balise <p> dans la balise <div></div>  
 * 4) On veut crée un évenement lorsque l'utilisateur clique sur le bouton 'Publier'.
 * 5) 
 */