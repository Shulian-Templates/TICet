import { describe, it, expect } from 'vitest';
import { generarLorem } from '../src/manija.ts';

describe('TICet (manija) - generarLorem', () => {
  it('generarLorem(1) devuelve "Lorem Ipsum."', () => {
    expect(generarLorem(1)).toBe('Lorem Ipsum.');
  });

  it('generarLorem(2) devuelve "Lorem Ipsum Lorem Ipsum."', () => {
    expect(generarLorem(2)).toBe('Lorem Ipsum Lorem Ipsum.');
  });

  it('generarLorem(5) devuelve "Lorem Ipsum" repetido 5 veces con punto final', () => {
    expect(generarLorem(5)).toBe(
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',
    );
  });

  it('generarLorem(10) termina con punto y tiene 10 repeticiones', () => {
    const resultado = generarLorem(10);
    expect(resultado.endsWith('.')).toBe(true);
    expect(resultado.split('Lorem Ipsum').length - 1).toBe(10);
  });
});
