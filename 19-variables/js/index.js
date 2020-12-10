// alert('Hello !')
/* 
    plusieurs lignes en commentaire.
*/

// mot-clé nomDeLaVariable = valeur
var prenom = "John";
let nom = 'Doe';
const age = 15;
let email;

console.log(email); // undefined 
email = "j.doe@exemple.fr";

console.log(prenom);
console.log(nom);
console.log(age);

/* 
    pas besoin de let,var ou const car notre variable est déjà créée
    (délarée) ligne 7 
*/
prenom = "Rick";
console.log(prenom);
// document.write(prenom);

// age = 22; // <- on ne pas changer la valeur d'une constante

// concatenation: Ajoute une chaine de caractere a la fin d'une autre
// "Bonjour" + 'tout le monde'
// "Bonjourtout le monde"
console.log("Bonjour " + 'tout le monde');

// "Variable prenom: " + 'Rick'
// "Variable prenom: Rick"
console.log("Variable prenom: " + prenom);


// Nommage d'une variable
/**
 *  1- Le nom d'une variable ne peut contenir que des lettres, des chiffres
 *      un $ ou un _ (underscore).
 *  2- Le nom d'une variable ne peut pas commencer par un chiffre
 *  3- Les espaces ne sont pas autorisés dans le nom d'une variable
 *  4- Sensible au majuscule/minuscule. age, Age et AgE ne seront pas les
 *      memes variables
 *  
 *  Convention de nommage:
 *      au lieu de mettre des espaces, on utilisera le camelCase
 *          nomDeLaVariable
 */

//let mon-age = 5; <- erreur
let v5a6r66iable = 5;
let Age = 5;
console.log(age);
console.log(Age);

// Types de variables: 
//      boolean, number, null, string, undefined

console.log( typeof(age) );
console.log( typeof prenom );

// echapper un caractère: \
console.log('c\'est \\ un mot');

// En JS on peut "changer" le type d'une variable
//  lors de l'affectation.
Age = "Salut";
console.log(Age);


// variable globale: var
// variable locale: let

let c = "ciao";

if (true) {
    let a = "Salut";
    const z = 5;
    var b = "Hola";
    console.log("let a : " + a);
    console.log("let c : " + c);
}

// console.log(a); <- n'existe plus a la fin du bloc d'instruction 
// du if
console.log(b);
console.log(c);
// console.log(z); // <- n'existe plus a la fin du bloc d'instruction 
// du if