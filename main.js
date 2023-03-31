let generateBtn = document.querySelector(".g-btn");
let range = document.querySelector(".in-range");
let selLength = document.querySelector(".sel-length");
let generatedPassSpan = document.querySelector(".pass");
let checkUpeer = document.getElementById("upper");
let checkLower = document.getElementById("lower");
let checkNumber = document.getElementById("number");
let checkSymbols = document.getElementById("symbol");
//
let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let loCase = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let symb = "~!@#$%^&*()_-+";

//to know the needed password range
let neededLength = "";
selLength.innerHTML = range.value;
//on change
range.onchange = function () {
  neededLength = range.value;
  selLength.innerHTML = neededLength;
};

// know th pass content
let passContent = [];
let checkboxes = document.querySelectorAll("input[type=checkbox]");
console.log(checkboxes);

function passText(array) {
  array.forEach((ele) => {
    if (ele.checked == true) {
      passContent.push(ele.dataset.text);
    }
  });
}

//strength
let strength = document.querySelector(".str");
let sp1 = document.querySelector(".SP1");
let sp2 = document.querySelector(".SP2");
let sp3 = document.querySelector(".SP3");
let sp4 = document.querySelector(".SP4");

function strenthttype(array) {
  if (array.length == 1) {
    strength.innerHTML = "Very Weak";
    sp1.classList.add("active");
  } else if (array.length == 2) {
    strength.innerHTML = "Weak";
    sp1.classList.add("active");
    sp2.classList.add("active");
  } else if (array.length == 3) {
    strength.innerHTML = "Medium";
    sp1.classList.add("active");
    sp2.classList.add("active");
    sp3.classList.add("active");
  } else if (array.length == 4) {
    strength.innerHTML = "Good";
    sp1.classList.add("active");
    sp2.classList.add("active");
    sp3.classList.add("active");
    sp4.classList.add("active");
  }
}
//generate btn onclick
let generatedPass = "";
passGeneration();
function passGeneration() {
  generateBtn.onclick = function () {
    passText(checkboxes);
    console.log(passContent);
    let gLength = selLength.innerHTML;
    for (i = 0; i < gLength; i++) {
      let randomElement = Math.floor(Math.random() * passContent.length);
      let xx = passContent[randomElement].length;
      let randomvalue = Math.floor(Math.random() * xx);
      let randomPassvalue = passContent[randomElement][randomvalue];
      generatedPass += randomPassvalue;
      generatedPassSpan.innerHTML = generatedPass;
    }
    strenthttype(passContent);
    checkboxes.forEach((ele) => {
      ele.checked == false;
    });
    passContent = [];
    generatedPass = "";
    sp1.classList.remove("active");
    sp2.classList.remove("active");
    sp3.classList.remove("active");
    sp4.classList.remove("active");
  };
}
