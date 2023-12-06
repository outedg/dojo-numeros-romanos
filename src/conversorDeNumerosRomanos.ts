export default class ConversorDeNumerosRomanos {
  private tabelaConvertida = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  converter(algarismoRomano: string): number {
    //TODO: Terminar as regras de repetir
    for (const key in this.tabelaConvertida) {
      const valorRegex = new RegExp(`${key}{4,}`);
      if (valorRegex.test(algarismoRomano)) throw new Error('erro de soma');
    }

    return this.tabelaConvertida[algarismoRomano];
  }
}
