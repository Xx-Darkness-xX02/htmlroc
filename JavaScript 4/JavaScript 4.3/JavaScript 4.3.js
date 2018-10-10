var plaatjes =  [1,2,3];
var teller = 0;
var Haar = document.getElementById("Haar");
var Gezicht = document.getElementById("Gezicht");
var Mond = document.getElementById("Mond");

Haar.style.backgroundImage = "url('Img/Haar1.png')";
Haar.addEventListener("click", function () {
    Haar.style.backgroundImage = "url('Img/Haar" + getHaar() +".png ')";

});

Gezicht.style.backgroundImage = "url('Img/Gezicht1.jpg')";
Gezicht.addEventListener("click", function () {
    Gezicht.style.backgroundImage = "url('Img/Gezicht" + getHaar() + ".jpg')";
});

Mond.style.backgroundImage = "url('Img/Mond1.jpg')";
Mond.addEventListener("click", function () {
    Mond.style.backgroundImage = "url('Img/Mond" + getHaar() + ".jpg')";
});



function getHaar(){
    if(teller >= plaatjes.length) {
        teller = 1;
    }else {
        teller ++;
    }
    console.log(teller);
    return teller;

}



