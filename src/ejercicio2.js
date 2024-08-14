class contador {
  constructor(counter) {
    this.counter = counter
  }

  incrementar(){
    this.counter++
    return `Contador ${this.counter}  `
  }
}

const total = new contador(0)

console.log(total.incrementar());

// export { instancia };
