import { pokemonCard, updateClock } from './components/App.js';
document.getElementById('cards').appendChild(pokemonCard());

window.onload = updateClock;