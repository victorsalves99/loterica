document.querySelector("#soterar-lotofacil").addEventListener("click", () => {
  const listaNumeros = [];
  while (listaNumeros.length < 15) {
    let numero = parseInt(Math.random() * 25);
    if (numero !== 0 && !listaNumeros.includes(numero)) {
      if (numero < 10) {
        listaNumeros.push(numero);
      } else {
        listaNumeros.push(numero);
      }
    }
  }
  listaNumeros.sort((a,b) => a - b)
  document.querySelector("#lotofacil").innerText = "";

  listaNumeros.forEach((item) => {
    const numerosSorteados = document.querySelector("#lotofacil");
    const numero = document.createElement("p");
    numero.innerText = `${item}`;
    numero.className = "sorteado-lotofacil";
    numerosSorteados.appendChild(numero);
  });
});
