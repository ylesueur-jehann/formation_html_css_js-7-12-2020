// window.onscroll = function() {

// };

// function myFunction() {
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;
//   document.getElementById("p-bar").style.width = scrolled + "%";
// }


window.addEventListener('scroll', () => {
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    const tracker = document.querySelector('#p-bar');

    // hauteur d'un élément par rapport à la mise en page
    // https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/offsetHeight
    const mainHeight = main.offsetHeight;
    const headerHeight = header.offsetHeight;
    const scrollableY = mainHeight - window.innerHeight - headerHeight
    /* window.ScrollY -> nombre de pixel qu'on a défilé en scrollant sur la page
            https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY */
    /* window.innerHeight -> hauteur en pixels de la partie visible de la fenêtre de navigation
            https://developer.mozilla.org/fr/docs/Web/API/Window/innerHeight
    */
//    on peut donc obtenir le % qu'on a scrollé
//  par exemple si on a scrollé 800px sur 1800 -> 800/1800 = 0.444*100 = 44%
//  on retire de la hauteur totale de la page, la hauteur de notre main et du header
    const scrollPercentage = (window.scrollY) / (scrollableY);

    // en javascript on peut modifier directement le css d'un élément. 
    tracker.style.width = scrollPercentage * 100 + '%';
    // width: 40%;
})

