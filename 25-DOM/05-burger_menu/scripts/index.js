function openMenu() {
    let menuElt = document.querySelector('.lines');
    // toggle:  Si la classe 'opened' est presente, on la supprime
    //          Si la classe 'opened' n'est pas presente, on l'ajoute
    console.log(menuElt.classList.toggle('opened'));
}