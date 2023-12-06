import ConversorDeNumerosRomanos from './conversorDeNumerosRomanos';

describe('conversor algarismos romanos', () => {
  let conversorDeNumerosRomanos;

  beforeEach(() => {
    conversorDeNumerosRomanos = new ConversorDeNumerosRomanos();
  });

  it.each([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])(`Ao receber %s deve retornar %s `, (numeroRomano, numeroEsperado) => {
    const numeroRomanoConvertido =
      conversorDeNumerosRomanos.converter(numeroRomano);

    expect(numeroRomanoConvertido).toEqual(numeroEsperado);
  });

  it('"I" não pode repetir mais que maximo tres vezes', () => {
    const numeroRomano = 'IIII';

    expect(() => conversorDeNumerosRomanos.converter(numeroRomano)).toThrow(
      'erro de soma',
    );
  });
  it('"X" não pode repetir mais que maximo tres vezes', () => {
    const numeroRomano = 'XXXX';

    expect(() => conversorDeNumerosRomanos.converter(numeroRomano)).toThrow(
      'erro de soma',
    );
  });
});
