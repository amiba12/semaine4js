/* JavaScript (semaine2.js) */
function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    document.getElementById('image').innerText = previewPic.alt;
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerText = "Passez la souris sur une image ci-dessous pour l'afficher ici.";
}

function onFocusFunction(element) {
    console.log(`Focus on ${element.alt}`);
}

function onBlurFunction(element) {
    console.log(`Blur on ${element.alt}`);
}

window.onload = addTabindex;

function addTabindex() {
    var images = document.querySelectorAll('.preview');
    for (var i = 0; i < images.length; i++) {
        images[i].tabIndex = i + 1;
    }
}
