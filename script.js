function processarTexto() {
  var entradaTexto = document.getElementById("entradaTexto").value;
  var operacao = document.getElementById("operacao").value;
  var saidaTexto = "";

  if (operacao === "criptografar") {
    saidaTexto = criptografarTexto(entradaTexto.toLowerCase());
  } else if (operacao === "descriptografar") {
    saidaTexto = descriptografarTexto(entradaTexto.toLowerCase());
  }

  document.getElementById("saidaTexto").value = saidaTexto;
}

function criptografarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiarTexto() {
  var saidaTexto = document.getElementById("saidaTexto");
  saidaTexto.select();
  document.execCommand("copy");
  var caixaDeAlerta = document.getElementById("alerta");
  caixaDeAlerta.textContent = "Texto copiado para a área de transferência!";
  caixaDeAlerta.style.display = "block";
  setTimeout(function () {
    caixaDeAlerta.style.display = "none";
  }, 3000);
}

function limparTexto() {
  document.getElementById("entradaTexto").value = "";
  document.getElementById("saidaTexto").value = "";
}

function limparPlaceholder(element) {
  element.placeholder = "";
}

// Bloqueia caracteres especiais no input texto
let entrada = document.querySelector("#entradaTexto");
entrada.addEventListener("keypress", function (e) {
  if (!verificarTexto(e)) {
    e.preventDefault();
  }
});

function verificarTexto(e) {
  let texto = String.fromCharCode(e.keyCode);

  let pattern = "[a-zA-Z0-9]";
  if (texto.match(pattern)) {
    return true;
  }
}
