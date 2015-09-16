function converter() {
  var numero = document.conversor.numero.value;
  var base = document.conversor.base.value;
  var digito = [];
  var i = 0;

  document.conversor.resultado.value = '';

  if (base == '' || isNaN(numero) || numero.indexOf(".") > -1) {
    console.log('Numero invalido');
    document.conversor.numero.value = '';
    return false;
  } else if (base == 1 || base > 20) {
    console.log('Base invalida');
    document.conversor.base.value = '';
    return false;
  };

  while (numero != 0) {
    i++;
    digito[i] = numero % base;
    numero = Math.floor(numero / base);
  }

  while (i >= 1) with (document.conversor.resultado) {
    switch (digito[i]) {
      case 10: { value += "A"; break }
      case 11: { value += "B"; break }
      case 12: { value += "C"; break }
      case 13: { value += "D"; break }
      case 14: { value += "E"; break }
      case 15: { value += "F"; break }
      case 16: { value += "G"; break }
      case 17: { value += "H"; break }
      case 18: { value += "I"; break }
      case 19: { value += "J"; break }
      default: { value += digito[i]; break }
    }
    i--;
  }
}

document.getElementById('base').addEventListener('keyup', function () {
  converter();
});

document.getElementById('numero').addEventListener('keyup', function () {
  converter();
});