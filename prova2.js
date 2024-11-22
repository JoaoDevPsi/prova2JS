function calcularIMC() {

    const nome = prompt("Digite o seu nome:");
    const alturaEmCm = parseFloat(prompt("Digite a sua altura em centímetros:"));
    const peso = parseFloat(prompt("Digite o seu peso em quilogramas:"));
  
    const alturaEmMetros = alturaEmCm / 100;

    const imc = peso / (alturaEmMetros * alturaEmMetros);
  
    let condicao;
    if (imc < 16) {
      condicao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc <= 16.99) {
      condicao = "Baixo peso grave";
    } else if (imc >= 17 && imc <= 18.49) {
      condicao = "Baixo peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
      condicao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
      condicao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.99) {
      condicao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.99) {
      condicao = "Obesidade grau II";
    } else {
      condicao = "Obesidade grau III";
    }
  
    console.log("Nome:", nome);
    console.log("IMC:", imc.toFixed(2));
    console.log("Classificação:", condicao);
    alert(`${nome}, seu IMC é:, ${imc}, e sua condição atual é:, ${condicao}`)
  }
  
  calcularIMC();