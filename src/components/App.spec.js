import {pokemonCard} from './App.js';

describe('vericar el tipo de funcion', () => {
  test('conocer el tipo de funcion', () => {
  expect(typeof pokemonCard).toBe('function');
  });
});

describe('pokemonCard', () => {
  it('should render without crashing', () => {
    const image = pokemonCard();
    expect(image instanceof HTMLElement).toBe(true);
  });
});