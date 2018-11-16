pics = document.getElementById("pics");

createPicsHolders();
createAapImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "aappicture";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImages() {
    pictureHolders = document.getElementsByClassName("aappicture");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "img/afbeelding" + (i + 1) + ".jpg";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener("click", function () {
            maakfavoriet(this.id);
        });


        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(aapPlaatje);


    }
}

function maakfavoriet(id) {
    console.log("maak mij favoriet! het gat om aap..." + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i <notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }


    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage= "url('img/heart.png')"
}
