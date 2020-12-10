function direBonjour(){
    console.log('Bonjour');
}

function creerLien() {
    let newAElt = document.createElement('a');

    newAElt.textContent = 'Dawan';
    newAElt.href = "https://dawan.fr";
    newAElt.style.display = 'block';

    let bodyElt = document.querySelector(
        'body'
    );
    bodyElt.appendChild(newAElt);
}

function afficherLettre(event) {
    // console.log(event);
    // console.log(event.data);
    console.log(event.target.value);
};

// let btnElt = document.querySelector('#btn1');
// btnElt.addEventListener("click", function(){
//     alert('Bonjour');
// })

window.addEventListener("load", function (){

    let btnElt = document.querySelector('#btn1');
    btnElt.addEventListener("click", function(){
        alert('Bonjour');
    });
    
});