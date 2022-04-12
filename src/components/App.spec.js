import {webdevCard} from './App.js';

describe('vericar el tipo de funcion', () => {
  test('conocer el tipo de funcion', () => {
  expect(typeof webdevCard).toBe('function');
  });
});

describe('webdevCard', () => {
  it('should render without crashing', () => {
    const image = webdevCard();
    expect(image instanceof HTMLElement).toBe(true);
  });
});