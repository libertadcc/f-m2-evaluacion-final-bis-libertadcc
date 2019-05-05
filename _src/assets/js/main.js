'use strict';
const url4 = 'https://raw.githubusercontent.com/Adalab/cards-data/master/4.json';

const btn = document.querySelector('.btn');
const card = document.querySelector('.card');
const input = document.querySelector('.input');
const chooseCards = document.querySelector('.chooseCards');

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');

// function show(){
//   fetch (url4)
//     .then(response=> response.json())
//     .then(data => {
//       for (let i = 0; i<data.length; i++){
//         card1.setAttribute('src', data[i].image);
//       }
//     });
// }

// card1.addEventListener('click', show);
function start(){
  chooseCards.innerHTML='';
  if(input.value === '4') {
    const card1 = document.createElement('img');
    card1.setAttribute('src', 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB');
    const card2 = document.createElement('img');
    card2.setAttribute('src', 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB');
    const card3 = document.createElement('img');
    card3.setAttribute('src', 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB');
    const card4 = document.createElement('img');
    card4.setAttribute('src', 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB');
    chooseCards.appendChild(card1);
    chooseCards.appendChild(card2);
    chooseCards.appendChild(card3);
    chooseCards.appendChild(card4);
  } else if(input.value === '6') {
    console.log('seis');
  } else{
    console.log('ocho');
  }
}

btn.addEventListener('click', start);
