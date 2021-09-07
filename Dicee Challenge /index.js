var r1 = Math.floor(Math.random() * 6 + 1);
var r2 = Math.floor(Math.random() * 6 + 1);

var i1 = document.getElementsByClassName("img1")[0];
var i2 = document.getElementsByClassName("img2")[0];
var h = document.querySelector('h1');

var n1 = "images/dice" + r1 + ".png";
var n2 = "images/dice" + r2 + ".png";
document.write(i1 + " <br>" + i2);
i1.setAttribute("src", n1);
i2.setAttribute("src", n2);

if (n1 > n2) {
    h.innerHTML = "🚩Player 1 Won";
} else if (n2 > n1) {
    h.innerHTML = "Player 2 Won 🚩";
} else {
    h.innerHTML = "DRAW";
}