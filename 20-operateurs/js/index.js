"use strict"

let a = '2';
let b = '3';

// string + string = concatenation
// number + string  = concatenation
// number + number = addition
let c = a + b;
console.log("c: " + c);

/**
 * Number(maVariable) : convertit une chaine
 * de caractere en nombre si c'est possible
 * Sinon on obtient un 
 * NaN: Not A Number
 * */ 
let nombre = Number(a);
console.log(
    nombre + " est de type " + typeof(nombre)
);

// +maVariable fait la même chose que Number()
let nombre2 = +b;
console.log(nombre2);

console.log("_____ Addition _____ ");

let resultat = nombre + nombre2;
console.log("Résultat: " + resultat);

// let resultat2 = resultat + 5;

// resultat = 5 + 5;
// resultat = 10;
resultat = resultat + 5;
console.log("Résultat: " + resultat);

// resultat = resultat + 2;
// resultat = 10 + 2;
resultat += 2; // 12
console.log("Résultat: " + resultat);

// resultat += 1;
resultat++; // <- on ne peut pas faire resultat++2
console.log("Résultat: " + resultat);

console.log("_____ Soustraction _____ ");

resultat = nombre - nombre2;
console.log("Résultat: " + resultat);

// resultat = -1 - 5;
// resultat = -6;
resultat = resultat - 5;
console.log("Résultat: " + resultat);

// resultat = resultat - 2;
// resultat = -6 - 2;
resultat -= 2; // -8
console.log("Résultat: " + resultat);

// resultat -= 1;
resultat--; // <- on ne peut pas faire resultat--2
console.log("Résultat: " + resultat);

console.log("_____ Multiplication _____ ");

resultat = nombre * nombre2;
console.log("Résultat: " + resultat);

resultat = resultat * 5;
console.log("Résultat: " + resultat);

resultat *= 2;
console.log("Résultat: " + resultat);

// resultat**; <- erreur, revient a faire x1 donc inutile

console.log("_____ Division _____ ");

resultat = nombre / nombre2;
console.log("Résultat: " + resultat);

resultat = resultat / 5;
console.log("Résultat: " + resultat);

resultat /= 2;
console.log("Résultat: " + resultat);

// resultat//; <- erreur, revient a faire x1 donc inutile

// 5.9 ou 5.1 arrondi à l'entier inférieur donc 5
let division_entiere = Math.floor( 5 / 2 );
console.log(division_entiere)


console.log("_____ Modulo _____ ");

// Permet de recupérer le reste d'une division entière

// 5 / 2 = 2 et il reste 1 <- c'est le modulo
// 14 / 3 = 4 et il reste 2
resultat = 5 % 2;
console.log("Résultat: " + resultat);

resultat = resultat % 5;
console.log("Résultat: " + resultat);

resultat %= 2;
console.log("Résultat: " + resultat);

// 12 % 2 = 6 et il reste 0
// 13 % 2 = 6 et il reste 1
// 14 % 2 = 7 et il reste 0

nombre = 12;
nombre2 = 12;

// strictement supérieur
resultat = nombre > nombre2;
console.log(resultat);

resultat = nombre >= nombre2;
console.log(resultat);

resultat = nombre <= nombre2;
console.log(resultat);

resultat = nombre < nombre2;
console.log(resultat);

// Egalité
resultat = nombre == nombre2;
console.log(resultat);

// nombre different de nombre2
resultat = nombre != nombre2;
console.log(resultat);

let prenom = 'John';
let prenom2 = 'Maude';

resultat = (prenom == prenom2);
console.log(
    prenom + " est égal à " + prenom2 + '? ' + resultat
);

nombre = '2';
nombre2 = 2;

// Compare les valeurs
resultat = (nombre2 == nombre)
console.log("Egalité: " +  resultat);

// Compare les valeurs + le type
resultat = (nombre2 === nombre)
console.log("Egalité stricte: " +  resultat);

/***
 * Si l'age de l'utilisateur est inferieur a 18 
 * alors on affiche un message: 'Vous ne pouvez pas louer de voiture'
 */

let age = 17;
// if (boolean) {}
if (age < 18) {
    // Si c'est vrai, on entre ici
    console.log("Vous ne pouvez louer de voiture");
}

if (age < 18) {
    console.log("Vous ne pouvez louer de voiture");
} else {
    console.log("Quel modèle voulez-vous ? ");
}

age = 25;
if (age < 18) {
    console.log("Vous ne pouvez louer de voiture");
} else if(age === 25) {
    console.log("Faire autre chose");
} else {
    console.log("Quel modèle voulez-vous ? ");
}


let choix = 4;
if (choix == 1) {
    console.log("Convertir des heures");
} else if(choix == 2) {
    console.log("Convertir des euros");
} else if(choix == 3) {
    console.log("Convertir des metres");
} else {
    console.log("quitter");
}

choix = 4;
// switch(variableATester)
switch(choix){
    // if (choix === 1)
    case 1:
        console.log("Convertir des heures");
        break;
    case 2:
        console.log("Convertir des euros");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Convertir des metres");
        break;
    default:
        console.log("quitter");
        break;
}


age = 19;
// && (ET): Il faut que les deux tests soient vrais pour que le resultat
// soit vrai
resultat = (age >= 18 && age <= 25);
console.log(resultat);

age = 37
// true && false = false
resultat = (age >= 18 && age <= 25);
console.log(resultat);

// si age est compris entre 18 et 25, on applique la reduction jeune
if (age >= 18 && age <= 25) {
    console.log("Vous avez la réduction jeune");
} else {
    console.log("Vous n'avez pas la réduction jeune");
}

// || (OU): Il faut qu'au moins un des deux tests soient vrais pour que 
// le resultat soit vrai
let derogation = false;
age = 19
resultat = (age >= 18 || derogation == true);
console.log(resultat);

derogation = true;
age = 17
resultat = (age >= 18 || derogation == true);
console.log(resultat);

if (age >= 18 || derogation == true) {
    console.log("Vous avez au moins 18 ans ou une dérogation");
} else {
    console.log("Vous n'avez pas 18 ans et pas de dérogation");
}


// prompt(' ') : affiche une boite de dialogue dans laquelle l'utilisteur
// peut saisir quelque chose.
// Ce que l'utilisateur saisit est toujours une chaine de caracteres

// nombre = prompt('Saisir un nombre: ');
nombre = 5;
console.log("Nombre: " + nombre);
console.log("Type de la variable nombre: " + typeof(nombre));

// nombre = Number('12')
// nombre = 12
nombre = Number(nombre);
// nombre = +nombre;
console.log("Type de la variable nombre: " + typeof(nombre));

if ( (nombre % 2) === 0) {
    console.log(nombre + " est pair");
} else {
    console.log(nombre + " est impair");
}

/*
    1h45 + 30minutes = 2h15
 */
let heures = prompt('Saisir une heure: ');
heures = Number(heures);

let minutes = Number(prompt('Saisir des minutes: '));

let ajout = +prompt('Saisir des minutes a ajouter: ');

// minutes = 45 + 30 = 75
minutes = minutes + ajout

//  75 / 60 = 1 et il reste 15
heures = heures + Math.floor(minutes / 60); // 1 + 1
minutes = minutes % 60 // 75 % 60 = 15

console.log("Resultat: " + heures + "h" + minutes);


// '', "", `` (ALTGR + 7)
// Litteraux de gabarit
console.log(`Resultat: ${heures}h${minutes}`);

