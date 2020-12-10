/***
 *  La variable stock une valeur
 *  La fonction stock un ensemble d'instructions, permet de factoriser du code
 */

console.log("____ fonction sans parametres ____")
//  function maFonction() { //.... }
 function sayHello() {
    // traitement/ instructions
    console.log("Bonjour");
    console.log("Tout");
    console.log("Le");
    console.log("Monde");
}

sayHello();
//... 
sayHello();

//Si on imagine le cas d'un eleve puni beaucoup de fois, 
//Au lieu de copier/coller des boucles plusieurs fois, on pourrait les mettre 
// dans une fonction. 

function fairePunitionSimple() {
    let index = 1;
    while (index <= 10) {
        console.log(`Ligne ${index}: Je ne dois pas ...`);
        index++;
    }
}

fairePunitionSimple();
// ...
fairePunitionSimple();

console.log("____ fonction avec parametres ____");
//Si on imagine le cas d'un eleve puni beaucoup trop, 
// et que cette fois c'est pas 10 mais 100 lignes a recopier.

// fairePunitionSimple();
// fairePunitionSimple();
// fairePunitionSimple();
// fairePunitionSimple();
// ...
function fairePunition(combienDeFois) {
    console.log(`combienDeFois: ${combienDeFois}`);
    let index = 1;
    // index <= 10
    // index <= 25
    // index <= 100
    while (index <= combienDeFois) {
        console.log(`Ligne ${index}: Je ne dois pas ...`);
        index++;
    }
}

// fairePunition(let combienDeFois = 10);
fairePunition(10);
// fairePunition(let combienDeFois = 25);
fairePunition(25);
// fairePunition(let combienDeFois = 100);
fairePunition(100);

// let nombre = +prompt('Nombre de fois a copier ? ');
let nombre = 4;

// fairePunition(let combienDeFois = nombre);
// fairePunition(let combienDeFois = 3);
fairePunition(nombre);

function fairePunitionV2(combienDeFois, message) {
    let index = 1;
    while (index <= combienDeFois) {
        console.log(`Ligne ${index}: ${message}`);
        index++;
    }
}

// fairePunition(let combienDeFois = 3, let message = "Je ne dois pas faire ça");
fairePunitionV2(3, "Je ne dois pas faire ça");
fairePunitionV2(7, "Je ne dois pas faire ci");


function afficherTable(nombre, max) {
    for(let i = 0; i <= max; i++) {
        // let resultat = nombre * i;
        // console.log(`${nombre} x ${i} = ${resultat}`)
        console.log(`${nombre} x ${i} = ${nombre * i}`)
    }
}

afficherTable(5, 20);
afficherTable(8, 10);

console.log("___ Parametre avec valeur par defaut ____ ");

function afficherTable(nombre, max=10) {
    for(let i = 0; i <= max; i++) {
        let resultat = nombre * i;
        console.log(`${nombre} x ${i} = ${resultat}`)
    }
}
afficherTable(5, 20);
afficherTable(8);


console.log("_____ Renvoie d'une valeur ______");
 
function carre(nombre) {
    var resultat = nombre * nombre; // 5 * 5
    return resultat; // 25
}

carre(5); // 25

// let nombre2 = 25; 
let nombre2 = carre(5);
console.log( carre(25) );

// console.log(resultat); <- resultat n'existe que dans la fonction carre
console.log(`nombre2 = ${nombre2}`);

// nombre = prompt('Message a afficher'); <- fonction qui renvoie une valeur
// alert('Salut !'); <- fonction qui ne renvoie rien.

console.log("Fonction anonymes");

// multiplication(5, 3);
// fonction declarée, elle sera disponible partout
//  dans notre script

// function multiplication(nombre, nombre2) {
//     let resultat = nombre * nombre2;
//     console.log("Resultat: " + resultat);
// }

// Cette fonction n'existe qu'a partir d'ici
let multiplication = function(nombre, nombre2) {
    let resultat = nombre * nombre2;
    console.log("Resultat: " + resultat);
}
multiplication(5, 3);

// Fonction fléchée
let multiplicationFlechee = (nombre, nombre2) => {
    let resultat = nombre * nombre2;
    console.log("Resultat: " + resultat);
}

// Si un seul parametre on peut supprimé les parenthses
// si une seule instruction on peut supprimer les accolades
let afficherPrenom = prenom => console.log(prenom);
afficherPrenom('John');



function affichePrenom(nom) {
    console.log(nom);
}

function inverserPrenom(nom) {
    let tableauLettre = nom.split('');
    let tableauInverse = tableauLettre.reverse();
    let nomJoin = tableauInverse.join('');
    console.log(nomJoin);
}
// affichePrenom('John');

function faireQqChoseAvecPrenom(uneFonction) {
    prenom = "Yohann";
    uneFonction(prenom);
}

// faireQqChoseAvecPrenom(uneFonction = affichePrenom)
faireQqChoseAvecPrenom(affichePrenom);
// faireQqChoseAvecPrenom(uneFonction = inverserPrenom)
faireQqChoseAvecPrenom(inverserPrenom);

// fonction "jetable"
// afficherTable(5)
// afficherTable(nombre)
faireQqChoseAvecPrenom(function(nom) {
    console.log(nom);
})

faireQqChoseAvecPrenom((nom) => { 
    console.log( nom.toUpperCase() );
})

faireQqChoseAvecPrenom(nom => console.log(nom));


let prenoms = ["Maude", "John", "Ella", "Sarah", "abe", "z", "Christophe"];
prenoms.sort();
console.log(prenoms);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
prenoms.sort(function(s1, s2) {
    // si le resultat est inferieur a 0, s1 sera placé 
    // avant s2 dans le tableaux
    // "Maude"(5) - "John"(4) = -1 donc Maude est placée apres
    let resultat = s1.length - s2.length;
    return resultat;
})
prenoms.sort((s1, s2) => s1.length - s2.length);

console.log(prenoms);
