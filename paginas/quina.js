document.querySelector("#soterar-quina").addEventListener("click",() => {
    const listaNumeros = []
    while (listaNumeros.length < 5) {
      let numero = parseInt(Math.random() * 80);
      if (numero !== 0 && !listaNumeros.includes(numero)) {
        if (numero < 10) {
          listaNumeros.push(numero);
        } else {
          listaNumeros.push(numero);
        }
      }
    }
    listaNumeros.sort((a,b) => a - b)
    document.querySelector("#quina").innerText = ""
    listaNumeros.forEach((item) => {
        const numerosSorteados = document.querySelector("#quina")
        const numero = document.createElement("p")
        numero.innerText = `${item}`
        numero.className = "sorteado-quina"
        numerosSorteados.appendChild(numero)
    })

})