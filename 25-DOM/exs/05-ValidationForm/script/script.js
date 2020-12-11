/**
 * Formulaire d'ajout de contact
 * 
 * Le formulaire devra comporté au moins 3 champs (nom, prénom, email)
 * Faire en sorte que les champs ne puissent pas être vide à l'envoie du formulaire
 * Si un champ est vide il devras être mit en rouge et vert si OK
 * Il ne sera pas possible d'envoyer le formulaire avec un champ vide.
 * 
 * Une fois que tout est ok, on envoi le formulaire et le contact apparaitra en dessous 
 */ 

let formElt = document.querySelector("form");

formElt.addEventListener("submit", (event) => {
    let firstName = event.target.firstName;
    let lastName = event.target.lastName;
    let email = event.target.email;

    resetColorFields(firstName, lastName, email);
    
    let error = checkBlankFields(firstName, lastName, email);
    // console.log("firtName", firstName);
    if (error <= 0) {
        let errorDiv = document.getElementById("error-msg");
        errorDiv.innerHTML = '';
        let contactDivElt = document.getElementById("display-contact");
        contactDivElt.innerHTML += `
        <div class="fiche">
            <h4>${firstName.value} ${lastName.value.toUpperCase()}</h4>
            <p>${email.value}</p>
        </div>
        `;
        event.target.reset();
    }
    event.preventDefault();
})

function checkBlankFields(...inputs) {
    let error = 0;

    let errorDiv = document.getElementById("error-msg");
    errorDiv.innerHTML = '';
    for (let input of inputs) {
        console.log(input);
        if (input.value.length < 1) {
            error++;
            let errorElt = document.createElement("p");
            // input.previousElementSibling.textContent -> <label></label>
            errorElt.textContent = "Erreur: " + input.previousElementSibling.textContent + " est vide.";
            errorDiv.appendChild(errorElt);
            input.style.border = "solid 2px red";   
        } else {
            input.style.border = "solid 2px green"
        }
    }
    return error;
}

function resetColorFields(...inputs) {
    for(let input of inputs) {
        input.style.border = "1px solid black"; 
    }
}





/**
 * AIDE: 
 * 
 * 1) On recupere le formulaire ou les elements un par un du DOM
 * 2) Lorsque que l'utilisateur clique sur le bouton, on verifie
 *      que la valeur des champs ont une taille > a 0
 */