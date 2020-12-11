function openP(index) {
    let article = document.querySelector('article:nth-child('+ index +')');
    article.classList.toggle('p-open');
}

