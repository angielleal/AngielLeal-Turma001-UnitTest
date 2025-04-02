const AnaliseDeDados = require("../src/analiseDeDados");

describe("AnaliseDeDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 3, 4, 5, 5]);
  });

  test("deve adicionar novos dados ao array", () => {
    analise.adicionarDados([6, 7, 8]);
    expect(analise.dados).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 8]);
  });

  test("deve limpar os dados", () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test("deve ordenar os dados corretamente", () => {
    expect(analise.ordenarDados()).toEqual([1, 2, 3, 4, 5, 5]);
  });

  test("deve calcular a média corretamente", () => {
    expect(analise.calcularMedia()).toBeCloseTo(3.33, 2);
  });

  test("deve calcular a mediana corretamente", () => {
    expect(analise.calcularMediana()).toBe(3.5);
  });

  test("deve calcular a moda corretamente", () => {
    expect(analise.calcularModa()).toEqual([5]);
  });

  test("deve calcular a variância corretamente", () => {
    expect(analise.calcularVariancia()).toBeCloseTo(2.2222222222222223, 2);
  });

  test("deve calcular o desvio padrão corretamente", () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.4907119849998598, 2);
  });

  test("deve encontrar o valor mínimo", () => {
    expect(analise.encontrarMinimo()).toBe(1);
  });

  test("deve encontrar o valor máximo", () => {
    expect(analise.encontrarMaximo()).toBe(5);
  });

  test("deve normalizar os dados corretamente", () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1, 1]);
  });

  test("deve calcular o percentil corretamente", () => {
    expect(analise.calcularPercentil(50)).toBe(3.5);
  });

  test("deve calcular a soma corretamente", () => {
    expect(analise.calcularSoma()).toBe(20);
  });

  test("deve calcular o produto corretamente", () => {
    expect(analise.calcularProduto()).toBe(600);
  });

  test("deve calcular a amplitude corretamente", () => {
    expect(analise.calcularAmplitude()).toBe(4);
  });

  test("deve calcular o coeficiente de variação corretamente", () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(44.721359549995796, 2);
  });

  test("deve remover outliers corretamente", () => {
    analise.adicionarDados([100]);
    analise.removerOutliers();
    expect(analise.dados).not.toContain(100);
  });

  test("deve calcular a correlação corretamente", () => {
    expect(analise.calcularCorrelacao([2, 4, 6, 8, 10, 10])).toBeCloseTo(1);
  });
});