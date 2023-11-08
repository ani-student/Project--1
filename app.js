

let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let pE1 = document.querySelector("p");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }

});

function levelUp() {
    userseq = [];
    level++;
    pE1.innerText = `level ${level}`;
    let rendTdx = Math.floor(Math.random() * 4)
    let rendColor = btns[rendTdx];
    let randbtn = document.querySelector(`.${rendColor}`);

    gameseq.push(rendColor)
    // console.log(rendColor)
    gameFlash(randbtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250)
}

function btnPress() {
    console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);

}

function checkAns(idx) {


    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000)
        }
    }
    else {
        pE1.innerHTML = `Game over! your score was <b> ${level}</b> <br> Press key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset() {
    started = false
    gameseq = [];
    userseq = [];
    level = 0;

}
let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}