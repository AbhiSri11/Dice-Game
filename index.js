//for 1st dice

var random1 = Math.random();
random1 = random1 * 6;
random1 = random1 + 1;
random1 = Math.floor(random1);

//  since hamara random number generate ho rha hai 1-6 tk hamara img ka name bhi dice(1-6).png hai to agar hum 
//  dice+random1+.png karenge to hamesha hamara random img generate hoga 1-6 kr beech me
var randomDice = "dice" + random1 + ".png";

// since jo hamara html me img ka src hai usme syntax hoga image/dice(1-6).png issilye hum image/ ko jod diye 
// hai taki dikkat na aaye
var randomImgSource = "images/" + randomDice;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSource);

//for 2nd dice

var random2 = Math.random();
random2 = random2 * 6;
random2 = random2 + 1;
random2 = Math.floor(random2);

var randomDice2 = "dice" + random2 + ".png";

var randomImgSource2 = "images/" + randomDice2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImgSource2);

//result

if(random1>random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}