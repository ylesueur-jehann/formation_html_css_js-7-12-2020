// tableau vide
let nombres = [];
console.log(nombres);

// Dans un tableau on peut melanger les types
// let notes = [5, 6, 2, 7, "salut", true];
let notes = [5, 6, 2, 7];
console.log(notes);

// Un tableau commence toujours a 0
// Pour acceder a une valeur de ce tableau on utilise les []
console.log(`notes[0] = ${ notes[0] }`);
console.log(`notes[2] = ${ notes[2] }`);

nombres[0] = 12;
nombres[1] = 27;
console.log(nombres);

console.log(`Nombre d'élément dans notes: ${ notes.length }`);

let tailleNotes = notes.length; // 4  
// console.log(`Derniere notes: ${ notes[tailleNotes] }`); <- notes[4] est undefined
// notes[4 - 1]
// notes[3]
console.log(`Derniere notes: ${ notes[tailleNotes - 1] }`);


// console.log(notes[0])
// console.log(notes[1])
// console.log(notes[2])


console.log("_____ while _____");

let index = 0;
let notesLength = notes.length;
// while (index < notes.length) {
while (index < notesLength) {
    console.log(notes[index]);
    index++;
    // index += 1;
}

console.log("_____ For _____");
for (let i = 0; i < notes.length; i++) {
    // const note = notes[i];
    console.log(notes[i]);
}

// Le for of determine automatiquement la taille du tableau
// Incremente automatiquement un index interne
console.log("_____ For ... of _____");
// for (let i = 0; i < notes.length; i++) { const note = notes[i]}
for(const note of notes){
    console.log(note * 2);
}


let prenoms = ["Maude", "John", "Ella", "Sarah"];
console.log(prenoms);

prenoms.push('Rick');
console.log(prenoms);


//Supprimer le premier élément du tableau du tableau
// let prenom = prenoms.shift();
// console.log(prenom);
prenoms.shift();

/* inserer un élément à la premiere position du tableau */
prenoms.unshift('Yohann');
console.log(prenoms);

/* Trouver l'index d'un element dans un tableau */
let position = prenoms.indexOf('Ella');
console.log(position);
console.log(prenoms[position]);

// Inverser l'ordre du tableau
prenoms.reverse();
console.log(prenoms);

// Trié le tableau par ordre alphabétique
prenoms.sort();
console.log(prenoms);

// Ajouter à l'index 2, un nouveau tableau contenant 3 valeurs
prenoms.splice(2, 0, [2,6,9]);
console.log(prenoms);

prenoms.splice(3, 5);
console.log(prenoms);


console.log("_____ For ... of _____");
for(const note of notes){
    console.log(note * 2);
}

console.log("_____ forEach _____");
notes.forEach(function (note) {
    console.log(note * 2);
});


class MyArray {
    // regroupes tous les arguments/parametres sous forme 
    //      de tableau
    // spread operator
    constructor(...nombres) {
        // console.log("nombres: ", nombres); <- tableau
        this.arr = nombres;
    }

    myForEach(notreFonction) {
        for(const note of this.arr){
            notreFonction(note);
        }
    }

    myFilter(uneAutreFonction) {
        // La fonction filter creer un nouveau tableau vide
        let newTableau = [];

        // On parcourt le tableau
        for (let i = 0; i < this.arr.length; i++) {
            /**
             * uneAutreFonction doit renvoyer vrai ou faux
             */
            let isTrue = uneAutreFonction(this.arr[i]);
            // Si isTrue est vrai, il faut ajouter la valeur
            // dans le nouveau tableau
            if (isTrue == true) {
                newTableau.push(this.arr[i]);
            }
        }
        return newTableau;
    }
}
{
    console.log("___ Méthode Foreach ____");

    nombres = new MyArray(5,6,8,9,15);
    
    // myForEach(notreFonction = function (note) {
    //  console.log(note * 2);
    // })
    nombres.myForEach(function (note) {
        console.log(note * 2);
    })
    nombres.myForEach(note => console.log(note * 2));
    
    console.log("___ Méthode Filter ____");
    
    console.log('Notes: ', notes);
    let newNotes = notes.filter(function(note) {
        return (note > 3);
    })
    console.log('New Notes: ', newNotes);
}
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
const words = new MyArray(
    'spray', 
    'limit', 
    'elite', 
    'exuberant', 
    'destruction', 
    'present'
);
// console.log(words);

let newTableau = words.myFilter(function(word) {
    let resultat = word.length > 6; //true ou false
    return resultat;
});
console.log(newTableau);

result = words.myFilter((word) => {
    return (word.length > 6);
});
console.log(result);

result = words.myFilter(word => word.length > 6);
console.log(result);
