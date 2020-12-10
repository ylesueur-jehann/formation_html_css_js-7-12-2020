/***
 * Les boucles permettent de repeter un traitement, 
 * une suite d'instructions
 */

// console.log('Je ne dois pas ...');
// console.log('Je ne dois pas ...');

// généralement nommé index ou i
let compteur = 1;
while (compteur <= 10) {
    // ...
    // console.log('Ligne ' + compteur + ': Je ne dois pas ...');
    console.log(`Ligne ${compteur}: Je ne dois pas ...`);
    compteur = compteur + 1;
    // compteur += 1
    // compteur++
}

// compteur = 0;
console.log(compteur); // 11
do {
    console.log("Je passe ici au moins un fois");
    compteur++;
} while(compteur < 5);

// for(initialisation; condition; incrementation) {}
for (let index = 1; index <= 10; index++) {
    console.log(`Ligne ${index}: Je ne dois pas ... avec un for`);
}

