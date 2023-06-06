document.querySelector("#soterar-Mega").addEventListener("click",() => {
    const listaNumeros = []
    while (listaNumeros.length < 6) {
      let numero = parseInt(Math.random() * 60);
      if (numero !== 0 && !listaNumeros.includes(numero)) {
        if (numero < 10) {
          listaNumeros.push(numero);
        } else {
          listaNumeros.push(numero);
        }
      }
    }
    listaNumeros.sort((a,b) => a - b)
    document.querySelector("#mega").innerText = ""
    listaNumeros.forEach((item) => {
        const numerosSorteados = document.querySelector("#mega")
        const numero = document.createElement("p")
        numero.innerText = `${item}`
        numero.className = "sorteado-mega"
        numerosSorteados.appendChild(numero)
    })

})