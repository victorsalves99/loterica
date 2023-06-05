document.querySelector("#soterar-lotofacil").addEventListener("click", () => {
  const listaNumeros = [];
  while (listaNumeros.length < 15) {
    let numero = parseInt(Math.random() * 25);
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
  document.querySelector("#lotofacil").innerText = "";
  listaNumeros.sort();
  listaNumeros.forEach((item) => {
    const numerosSorteados = document.querySelector("#lotofacil");
    const numero = document.createElement("p");
    numero.innerText = `${item}`;
    numero.className = "sorteado-lotofacil";
    numerosSorteados.appendChild(numero);
  });
});
