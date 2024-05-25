function sumar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').innerText = resultado;
  }
  
  function restar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').innerText = resultado;
  }
  
  function multiplicar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').innerText = resultado;
  }
  
  function dividir() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var resultado = num1 / num2;
    document.getElementById('resultado').innerText = resultado;
  }
  
  function cleaner(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('resultado').innerHTML="";
  }