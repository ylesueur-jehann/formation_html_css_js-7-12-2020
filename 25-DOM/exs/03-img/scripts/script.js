

function creerImg() {
    let divElt = document.querySelector('#img-zone');
    let newImgElt = document.createElement('img');

    newImgElt.setAttribute('src', "https://source.unsplash.com/");
    newImgElt.width = "300";

    divElt.appendChild(newImgElt);
 }
 