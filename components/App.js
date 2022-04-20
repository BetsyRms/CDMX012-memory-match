import pokemon from '../data/pokemon/pokemon.js';

const pokemon1 = pokemon.items;
const pokemon2 = pokemon.items;
let pokemonJoin = pokemon1.concat(pokemon2);
pokemonJoin.sort(function () { return Math.random() - 0.5 });

let previous = null;
let pokeballClick = null;
let clicks = [];
let win = null;
let pokeballs = [];

let totalTime = 60; 

export const pokemonCard = () => {
  const cardsConteiner = document.createElement('div');
  cardsConteiner.className = 'cards-conteiner';
  pokemonJoin.forEach(element => {
    const div = document.createElement('div');
    div.className = 'pokeballs-pokemons';
    const pokemons = document.createElement('img');
    pokemons.className = 'pokemons';
    pokemons.src = element.image;
    const pokeball = document.createElement('img');
    pokeball.className = 'pokeball';
    pokeball.src = 'pokeball.png';
    pokeball.id = element.id
    pokeball.style.visibility = "hidden"
    pokeballs.push(pokeball);
    console.log('pokeballs', pokeballs)
    pokeball.addEventListener("click", (event) => {
      clicks.push(event);
      console.log('clicks', clicks);
      if (clicks.length < 3) {
        if (previous === null) {
          console.log('primer click');
          previous = element;
          pokeballClick = pokeball;
          console.log(pokeballClick);
          pokeball.style.visibility = "hidden"
        } else if (previous != null) {
          console.log('segundo click');
          pokeball.style.visibility = "hidden"
          if (previous.id === element.id) {
            console.log('match');
            win += 1
            pokeballClick.style.visibility = "hidden"
            pokeball.style.visibility = "hidden"
            clicks = [];
          } else if (previous.id != element.id) {
            console.log('noMatch');
            console.log({ previous });
            console.log({ pokeballClick });
            setTimeout(() => {
              pokeballClick.style.visibility = "visible";
              pokeball.style.visibility = "visible"
              clicks = [];
              pokeballClick = null;
              console.log('setTimeout');
            }, 1000);
          }
          previous = null;
          console.log('win',win);
        }
        console.log(previous);
      }
    });
    div.appendChild(pokemons);
    div.appendChild(pokeball);
    cardsConteiner.appendChild(div);
    window.onload = setTimeout(() => { pokeball.style.visibility = "visible" }, 1000);
  });
  return cardsConteiner;
};

export function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  if(totalTime==0){
    document.getElementById('countdown').innerHTML = `Loser`;
    pokeballs.forEach(current =>{current.style.visibility = "hidden"}) 
  }else{
      if(win===9){
        totalTime=totalTime;
        document.getElementById("overlay").style.display = "block";
      }else{
      totalTime-=1;
      setTimeout(updateClock, 1000);
      }
    }
}

// let totalTime = 60;
// let tiempo = setTimeout( () => {
//   document.getElementById('countdown').innerHTML = totalTime;
//   if(totalTime==0){
//     document.getElementById('countdown').innerHTML = `Loser`
//   }
// })