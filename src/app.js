function sumar(...numeros){
    return numeros.reduce((acumulador, valorActual) => {
       return acumulador + valorActual 
    }, 0)
}

console.log(sumar(5, 5, 10, 5))