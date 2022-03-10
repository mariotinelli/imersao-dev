
function fahrenheitToCelsius(temperatura) {
  return (temperatura - 32) * (5/9)
}
function fahrenheitToKelvin(temperatura) {
  return (temperatura - 32) * (5/9) + 273.15;
}
function celsiusToFahrenheit(temperatura) {
  return (temperatura * (9/5)) + 32
}
function celsiusToKelvin(temperatura) {
  return temperatura + 273.15
}
function kelvinToCelsius(temperatura) {
  return temperatura - 273.15
}
function kelvinToFahrenheit(temperatura) {
  return (temperatura - 273.15) * (9/5) + 32
}

function toString(converter, resultado, convertido){
  return `A conversão de ${converter} resultou em ${resultado.toFixed(3)} ${convertido}`
}

var valorElementoConvertido = document.getElementById("valorConvertido");

var nomeTemperatura = ["fahrenheit", "kelvin", "celsius"];

var selectConverter = document.getElementById("converter");
var selectConvertido = document.getElementById("convertido");

nomeTemperatura.map( (nome) => {
  var option = [document.createElement("option"), document.createElement("option")];

  option[0].value = nome;
  option[0].innerHTML = nome.charAt(0).toUpperCase() + nome.substring(1);

  option[1].value = nome;
  option[1].innerHTML = nome.charAt(0).toUpperCase() + nome.substring(1);

  selectConverter.appendChild(option[0]);
  selectConvertido.appendChild(option[1]);
});

function converter() {

  var valorTemperatura = parseFloat(document.getElementById("temperatura").value);
  var selectConverter = document.getElementById("converter").value;
  var selectConvertido = document.getElementById("convertido").value;

  if (selectConverter === "fahrenheit") {
    if (selectConvertido === "kelvin") {
      valorElementoConvertido.innerHTML = toString(selectConverter, fahrenheitToKelvin(valorTemperatura), selectConvertido)
    }
    if (selectConvertido === "celsius") {
      valorElementoConvertido.innerHTML = toString(selectConverter, fahrenheitToCelsius(valorTemperatura), selectConvertido)
    }
  }
  else if (selectConverter === "celsius") {
    if (selectConvertido === "kelvin") {
      valorElementoConvertido.innerHTML = toString(selectConverter, celsiusToKelvin(valorTemperatura), selectConvertido)
    }
    if (selectConvertido === "fahrenheit") {
      valorElementoConvertido.innerHTML = toString(selectConverter, celsiusToFahrenheit(valorTemperatura), selectConvertido)
    }
  }
  else if(selectConverter === "kelvin") {
    if (selectConvertido === "fahrenheit") {
      valorElementoConvertido.innerHTML = toString(selectConverter, kelvinToFahrenheit(valorTemperatura), selectConvertido)
    }
    if (selectConvertido === "celsius") {
      valorElementoConvertido.innerHTML = toString(selectConverter, kelvinToCelsius(valorTemperatura), selectConvertido)
    }
  }

}