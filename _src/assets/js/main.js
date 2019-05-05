'use strict';

const btn = document.querySelector('.btn');
const card = document.querySelector('.card');
const back = document.querySelector('.back');

function show(){
  fetch ('https://raw.githubusercontent.com/Adalab/cards-data/master/4.json')
    .then(response=> response.json())
    .then(data => {
      for (let i = 0; i<data.length; i++){
        console.log(data[i].name);
        back.setAttribute('src', data[i].image);
      }
    });
}

back.addEventListener('click', show);
