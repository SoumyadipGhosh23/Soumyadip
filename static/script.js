let progressBar = document.querySelector(".circular-progress")

let valueContainer = document.querySelector(".value-container")



let progressValue = 0;
let progressEndValue = 80;
let speed = 30;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient( #219F94 ${progressValue * 3.6}deg, #fff ${progressValue * 3.6}deg)`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
},speed);

let progressBar1 = document.querySelector(".circular-progress1")

let valueContainer1 = document.querySelector(".value-container1")



let progressValue1 = 0;
let progressEndValue1 = 75;
let speed1 = 30;

let progress1 = setInterval(() => {
    progressValue1++;
    valueContainer1.textContent = `${progressValue1}%`;
    progressBar1.style.background = `conic-gradient( #219F94 ${progressValue1 * 3.6}deg, #fff ${progressValue1 * 3.6}deg)`;
    if (progressValue1 == progressEndValue1) {
        clearInterval(progress1);
    }
},speed1);

let progressBar2 = document.querySelector(".circular-progress2")

let valueContainer2 = document.querySelector(".value-container2")



let progressValue2 = 0;
let progressEndValue2 = 50;
let speed2 = 30;

let progress2 = setInterval(() => {
    progressValue2++;
    valueContainer2.textContent = `${progressValue2}%`;
    progressBar2.style.background = `conic-gradient( #219F94 ${progressValue2 * 3.6}deg, #fff ${progressValue2 * 3.6}deg)`;
    if (progressValue2 == progressEndValue2) {
        clearInterval(progress2);
    }
},speed2);



let progressBar3 = document.querySelector(".circular-progress3")

let valueContainer3 = document.querySelector(".value-container3")

let progressValue3 = 0;
let progressEndValue3 = 95;
let speed3 = 30;

let progress3 = setInterval(() => {
    progressValue3++;
    valueContainer3.textContent = `${progressValue3}%`;
    progressBar3.style.background = `conic-gradient( #219F94 ${progressValue3 * 3.6}deg, #fff ${progressValue3 * 3.6}deg)`;
    if (progressValue3 == progressEndValue3) {
        clearInterval(progress3);
    }
},speed3);


let progressBar4 = document.querySelector(".circular-progress4")

let valueContainer4 = document.querySelector(".value-container4")

let progressValue4 = 0;
let progressEndValue4 = 85;
let speed4 = 30;

let progress4 = setInterval(() => {
    progressValue4++;
    valueContainer4.textContent = `${progressValue4}%`;
    progressBar4.style.background = `conic-gradient( #219F94 ${progressValue4 * 3.6}deg, #fff ${progressValue4 * 3.6}deg)`;
    if (progressValue4 == progressEndValue4) {
        clearInterval(progress4);
    }
},speed4);



let progressBar5 = document.querySelector(".circular-progress5")

let valueContainer5 = document.querySelector(".value-container5")

let progressValue5 = 0;
let progressEndValue5 = 65;
let speed5 = 30;

let progress5 = setInterval(() => {
    progressValue5++;
    valueContainer5.textContent = `${progressValue5}%`;
    progressBar5.style.background = `conic-gradient( #219F94 ${progressValue5 * 3.6}deg, #fff ${progressValue5 * 3.6}deg)`;
    if (progressValue5 == progressEndValue5) {
        clearInterval(progress5);
    }
},speed5);
