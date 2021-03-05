// Recupere la valeur initial de score
let scoreTxt = document.getElementById("score").textContent;
let score = 2000; //parseInt(scoreTxt);
let displayScore = () => {
        document.getElementById("score").innerHTML = `${score}`;
    }
    // function arrow permettant de gérer le click
let click = 1;
let clicker = () => {
    score += click;
}
document.getElementById("click").addEventListener("click", () => {

    clicker();
    displayScore();
});
// function arrow permettant de  gérer l'auto click 
let auto = 1;
let autoClick = () => {
    score += auto;
    console.log(score);
    displayScore();
}
document.getElementById("autoclick").addEventListener("click", () => {
    if (score >= (auto * 1) * 25) {
        score = score - ((auto * 1) * 25);
        console.log((auto * 1) * 25);
        multiply();
        document.getElementById("costAutoclick").innerHTML = `</br><p>cost : ${((auto * 1) * 25).toFixed(0)} </p>`;
        setInterval(() => {
            autoClick();
        }, 1000);

    } else {
        score = score;
    }

});

let bonus = 1;
let multiply = () => {
    //auto++;
    //click++;
    //click *= 2;
    auto *= 2;
    //bonus *= 2;
    console.log(click);

}
document.getElementById("multiply").addEventListener("click", () => {

    if (score >= (bonus * 1) * 100) {
        score = score - ((bonus * 1) * 100);
        console.log((bonus * 1) * 100);
        bonus++;
        document.getElementById("costBonus").innerHTML = `</br><p> cost : ${((bonus * 1) * 1000).toFixed(0)} </p>`;

    } else {
        score = score;
    }



});