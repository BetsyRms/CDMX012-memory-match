import pokemon from '../data/pokemon/pokemon.js';

const pokemon1 = pokemon.items;
const pokemon2 = pokemon.items;
let pokemonJoin= pokemon1.concat(pokemon2);
pokemonJoin.sort(function(){return Math.random() - 0.5 });

let previous = null;
let pokeballClick = null;
let clicks = [];

export const pokemonCard = () => {
  const cardsConteiner = document.createElement('div');
  cardsConteiner.className = 'cards-conteiner';
  pokemonJoin.forEach(element => {
    const div = document.createElement('div');
    div.className ='pokeballs-pokemons';
    const pokemons = document.createElement('img');
    pokemons.className ='pokemons';
    pokemons.src = element.image;
    const pokeball = document.createElement('img');
    pokeball.className ='pokeball';
    pokeball.src = 'pokeball.png';
    pokeball.id = element.id
    pokeball.style.visibility = "hidden"
    pokeball.addEventListener("click", (event) => {
      clicks.push(event);
      console.log('clicks',clicks);
      if(clicks.length<3){
        if(previous===null){
        console.log('primer click');
        previous = element;
        pokeballClick = pokeball;
        console.log(pokeballClick);
        pokeball.style.visibility = "hidden"
        }else if(previous!=null){
        console.log('segundo click');
        pokeball.style.visibility = "hidden"
        if(previous.id===element.id){
          console.log('match');
          pokeballClick.style.visibility = "hidden"
          pokeball.style.visibility = "hidden"
          }else if(previous.id!=element.id){
          console.log('noMatch');
          console.log({previous});
          console.log({pokeballClick});
          setTimeout(()=>{
            pokeballClick.style.visibility = "visible"; 
            pokeballClick=null;
            clicks=0;
            pokeball.style.visibility = "visible"
          }, 1500);
        }
        previous=null;
        }
       console.log(previous);
      }
    });
    div.appendChild(pokemons);
    div.appendChild(pokeball);
    cardsConteiner.appendChild(div);
    window.onload = setTimeout(()=>{pokeball.style.visibility = "visible"}, 1000);
  });
  return cardsConteiner;
};