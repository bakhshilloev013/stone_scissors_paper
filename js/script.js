"use strict";

const btns = document.querySelectorAll(".left_side .btns button"),
      leftImage = document.querySelector(".left_side .image img"),
      rightImage = document.querySelector(".right_side .image img"),
      modal = document.querySelector(".modal_result");

const urls = ["../img/stone.png", "../img/scissors.png", "../img/paper.png"];

// Here will be choose results
let checking = {
    img1: null,
    img2: null
};

// Set event listeners on every btn of player
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        leftImage.src =`../img/${btn.value}.png`;
        checking.img1 = `../img/${btn.value}.png`;
        artificialIntelegence();
    })
});

// Choose of artifical intelegence
function artificialIntelegence() {
    let num = parseInt(Math.random()*10);
    if (num <= 2) {
        rightImage.src = urls[num]; 
        checking.img2 = urls[num];
        showResult();
    } else {
        artificialIntelegence();
    }

};

// Function for showinf results of game
function showResult() {
    if (checkFunc() == "equal") {
        showModal("Equal!");
    } else if (checkFunc()) {
        showModal("Congratulations!");
    } else {
        showModal("You have lost... Try again!");
    }
}

// Function of checking results
function checkFunc() {
    if (checking.img1.includes("paper") && checking.img2.includes("stone")) {
        return true;
    } else if (checking.img1.includes("stone") && checking.img2.includes("scissors")) {
        return true;
    } else if (checking.img1.includes("scissors") && checking.img2.includes("paper")) {
        return true;
    } else if (checking.img1 == checking.img2) {
      return "equal";
    }
}

// For close modal
modal.addEventListener("click", () => {
    modal.classList.remove("modal_active");
})

// For open modal
function showModal(result) {
    document.querySelector(".modal_title").textContent = result;
    modal.classList.add("modal_active");
}