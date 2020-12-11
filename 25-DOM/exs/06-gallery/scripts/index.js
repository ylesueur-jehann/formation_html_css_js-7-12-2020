let currentIndexImg = 1;
const MAX = 5;

function changeImg(index) {
    let imgActiveElement = document.querySelector("#img-active");
    switch(index) {
        case 1:
            imgActiveElement.src = "assets/e-planner_640.jpg";
            break;
        case 2:
            imgActiveElement.src = "assets/foodtruck_640.jpg";
            break;
        case 3:
            imgActiveElement.src = "assets/panda_640.jpg";
            break;
        case 4:
            imgActiveElement.src = "assets/pfc_640.jpg";
            break;
        case 5:
            imgActiveElement.src = "assets/pyzne_640.jpg";
            break;
    }
    currentIndexImg = index;
}

function arrowSwitch(index) {
    currentIndexImg += index;
    if (currentIndexImg <= 1 ) {
        currentIndexImg = 1;
    } else if (currentIndexImg >= MAX) {
        currentIndexImg = MAX;
    }
    changeImg(currentIndexImg);
}