document.querySelector("#soterar-quina").addEventListener("click",() => {
    const listaNumeros = []
    while (listaNumeros.length < 5) {
       let numero =  parseInt(Math.random()*80)
       if (numero !== 0) {
        console.log(listaNumeros)
        console.log(numero)
        console.log(listaNumeros.includes(numero))
      if (listaNumeros.includes(numero)) {
      } else {
        if (numero < 10) {
          listaNumeros.push(`0${numero}`);
        } else {
          listaNumeros.push(numero);
        }
      }
    }
    }
    document.querySelector("#quina").innerText = ""
    listaNumeros.sort()
    listaNumeros.forEach((item) => {
        const numerosSorteados = document.querySelector("#quina")
        const numero = document.createElement("p")
        numero.innerText = `${item}`
        numero.className = "sorteado-quina"
        numerosSorteados.appendChild(numero)
    })

})