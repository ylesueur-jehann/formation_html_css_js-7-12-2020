/***
 *  La variable stock une valeur
 *  La fonction stock un ensemble d'instructions,
 *           permet de factoriser du code
 *  L'objet stock des variables(Propriétés) et des fonctions(méthodes).
 *  Une classe est le "moule" qui permet de "fabriquer"(Instancier) les objets.
 */

function freinage() {
    console.log("Vitesse --");
}

// objet litteral
let voiture = {
    couleur: 'rouge',
    nbPorte: 4,
    vitesse: 0,
    nbRoue: 4,
    accelerer: function() {
        console.log("Vitesse ++");
    },
    freiner: freinage
};

freinage();
// accelerer();  <- erreur, la fonction 'accelerer' n'existe 
//                  qu'a l'interieur de l'objet voiture.
// freiner();    <- erreur, la fonction 'freiner' n'existe 
//                  qu'a l'interieur de l'objet voiture.

console.log(voiture);
console.log(voiture.couleur);
console.log(`Ma voiture est ${voiture.couleur}`);

voiture.couleur = "bleue";
console.log(`Ma voiture est ${voiture.couleur}`);

voiture.accelerer();
voiture.freiner();



// convention de nommage: PascalCase
// MaPersonne
class Personne {
    // nom obligatoire
    constructor(p_nom, p_prenom) {
        this.nom = p_nom;
        this.prenom = p_prenom;
    }

    description() {
        console.log(`Je suis ${this.nom} ${this.prenom}`);
    }
}

// let p1 = new Personne.constructor();
let p1 = new Personne("Doe", "John");
console.log(p1)
// console.log(p1.nom)

// Dans la methode description: this = p1  (this.nom = p1.nom)
p1.description();

// p2 est une instance de la classe Personne
let p2 = new Personne("Zarella", "Maude");
console.log(p2)
// console.log(p2.prenom)

// this = p2
p2.description();
