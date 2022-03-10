var elementoValorConvertido = document.getElementById("valorConvertido");
var elementoValorConvertidoBitoin = document.getElementById("valorConvertidoBitcoin");
var valorElemento;
const DOLAR = 5.04;
const EURO = 5.55;
const BITCOIN = 198186.12; // 198.186,12

function getElementoValor(){
  return valorElemento = parseFloat(document.getElementById("valor").value);
}

function setTextoResultado (texto, valor) {
  return texto + valor;
}

function converterEmDolar() {
  
  var valorEmDolar = getElementoValor() * DOLAR;
  var valorEmBitcoin = getElementoValor() / BITCOIN;
  
  elementoValorConvertido.innerHTML = setTextoResultado("O resultado em dolar é U$ ", valorEmDolar);
  elementoValorConvertidoBitoin.innerHTML = setTextoResultado("O resultado em Bitcoins é ", valorEmBitcoin);
  
}

function converterEmEuro() {

  var valorEmEuro = getElementoValor() * EURO;
  var valorEmBitcoin = getElementoValor() / BITCOIN;

  elementoValorConvertido.innerHTML = setTextoResultado("O resultado em euro é ", valorEmEuro);
  elementoValorConvertidoBitoin.innerHTML = setTextoResultado("O resultado em Bitcoins é ", valorEmBitcoin);
  
}
