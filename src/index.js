class calculadora {
  constructor(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
  }

  sumar() {
    return this.valor1 + this.valor2;
  }

  restar() {
    return this.valor1 - this.valor2;
  }

  dividir() {
    if (this.valor2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return this.valor1 / this.valor2;
  }

  multiplicar() {
    return this.valor1 * this.valor2;
  }
}

export { calculadora };
