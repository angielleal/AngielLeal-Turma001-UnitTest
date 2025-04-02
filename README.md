# 📊 Projeto: Análise de Dados com JavaScript

Este projeto implementa uma classe `AnaliseDeDados` para realizar diversas operações estatísticas sobre um conjunto de dados numéricos. Ele inclui cálculos como média, mediana, moda, variância, desvio padrão, entre outros.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** (versão >= 20.x)
- **Jest** (para testes unitários)
- **GitHub Actions** (para CI/CD)
- **SonarCloud** (para análise de qualidade do código)

---

## 📥 Instalação e Configuração

Para executar o projeto localmente, siga os passos abaixo:

1. **Instale o Node.js** (versão >= 20.x)
2. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```

---

## 🛠️ Como Executar os Testes

O projeto possui uma suíte de testes unitários para validar todas as operações da classe `AnaliseDeDados`. Para executar os testes:

```sh
npm run test
```

Para visualizar a cobertura dos testes:

```sh
npm run coverage
```

Os relatórios de cobertura serão gerados na pasta `./coverage`. Para removê-los:

```sh
npm run clean
```

---

## 📁 Estrutura do Projeto

```
📂 projeto
 ├── 📂 src                # Código-fonte principal
 │    ├── analiseDeDados.js # Implementação da classe
 │
 ├── 📂 test               # Testes unitários
 │    ├── analiseDeDados.test.js # Testes da classe AnaliseDeDados
 │
 ├── package.json          # Configuração do Node.js e dependências
 ├── README.md             # Documentação do projeto
```

---

## 📊 Funcionalidades da Classe `AnaliseDeDados`

A classe `AnaliseDeDados` implementa as seguintes operações estatísticas:

- **Manipulação de Dados:**
  - Adicionar novos valores ao conjunto de dados.
  - Remover outliers com base no intervalo interquartil.
  - Limpar o conjunto de dados.
  
- **Medições Estatísticas:**
  - Média, Mediana e Moda.
  - Variância e Desvio Padrão.
  - Amplitude, Soma e Produto.
  - Coeficiente de Variação.
  
- **Análises Avançadas:**
  - Normalização de dados.
  - Cálculo de Percentis.
  - Correlação entre dois conjuntos de dados.
  - Ordenação de dados.

---

## 🔬 Exemplo de Uso

```js
const AnaliseDeDados = require("./src/analiseDeDados");

const dados = new AnaliseDeDados([1, 2, 3, 4, 5, 5]);
console.log("Média:", dados.calcularMedia());
console.log("Mediana:", dados.calcularMediana());
console.log("Moda:", dados.calcularModa());
console.log("Variância:", dados.calcularVariancia());
console.log("Desvio Padrão:", dados.calcularDesvioPadrao());
```

Saída esperada:
```sh
Média: 3.33
Mediana: 3.5
Moda: [5]
Variância: 2.67
Desvio Padrão: 1.63
```

---

## ✅ Testes Unitários

O projeto conta com testes unitários para cada funcionalidade da classe `AnaliseDeDados`. Exemplo de um teste:

```js
test("deve calcular a média corretamente", () => {
  expect(analise.calcularMedia()).toBeCloseTo(3.33, 2);
});
```

---

## 📌 Contribuindo

Se quiser contribuir com melhorias, siga os passos:

1. **Crie um fork** do repositório.
2. **Crie uma nova branch:** `git checkout -b minha-feature`
3. **Faça as alterações e commit:** `git commit -m 'Adiciona nova funcionalidade'`
4. **Suba as alterações:** `git push origin minha-feature`
5. **Abra um Pull Request** no GitHub.

---

## 🔗 Links Úteis

- [Documentação do Node.js](https://nodejs.org/)
- [Jest - Testes em JavaScript](https://jestjs.io/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [SonarCloud](https://sonarcloud.io/)

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

