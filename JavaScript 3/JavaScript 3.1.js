var plaatjes = document.getElementsByTagName("Img");
console.log(plaatjes);

var random = 0;

var RandomNumbers = [];


while (RandomNumbers.length < 9){
    random = Math.floor(Math.random() * 9) + 1;
    if(RandomNumbers.lastIndexOf(random) == -1) {
        RandomNumbers.push(random);
    }
}
random = 0;
for(var plaatje in plaatjes) {
    plaatjes[plaatje].src = "Img/aap" + RandomNumbers[random] + ".jpg";
    random++;
}
