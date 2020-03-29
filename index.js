"use strict";

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector(`button[data-action="start"]`);
const stopBtn = document.querySelector(`button[data-action="stop"]`);
const body = document.querySelector('body');
let tidspunkt = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


startBtn.addEventListener("click", () => {
    tidspunkt = setInterval(() => {
        const num = randomIntegerFromInterval(0, colors.length);
        console.log(num);
        const color = colors[num - 1];
        body.setAttribute('style', `background-color: ${color}`)
    }, 1000);
    startBtn.setAttribute('disabled', 'true')
});

stopBtn.addEventListener("click", () => {
    clearInterval(tidspunkt);
    startBtn.removeAttribute('disabled')
});