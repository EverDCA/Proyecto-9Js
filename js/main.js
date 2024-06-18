function imc() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let imc = num1 / (num2 * 2);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById(
      "resultado1"
    ).innerHTML = `<div class='alert alert-danger' role='alert'> <strong>Syntax Error!: 0 = 0!${num1}</strong></div>`;
  } else if (num1 === 0 || num2 === 0) {
    document.getElementById("resultado1").innerHTML =
      "<div class='alert alert-danger' role='alert'> <strong>Syntax Error!: 0 = 0!</strong></div>";
  } else if (imc <= 18) {
    document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-warning' role='alert'> <p>Usted Tiene Bajo Peso, IMC=${imc}</p><img src='img/delgado.png' alt=''></div>`;
  } else if (imc >= 19 && imc <= 24.9) {
    document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-success' role='alert'> <p>Usted Tiene Un Peso Normal, IMC=${imc}</p><img src='img/pesonormal.png' alt=''></div>`;
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-danger' role='alert'> <p>Usted Tiene Sobre peso, IMC=${imc}</p><img src='img/gordo.png' alt=''></div>`;
  } else if (imc >= 30 && imc <= 34.9) {
    document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-danger' role='alert'> <p>Usted Tiene Obesidad Tipo 1, IMC=${imc}</p><img src='img/gordo.png' alt=''></div>`;
  } else if (imc >= 40 && imc <= 44.9) {
    document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-danger' role='alert'> <p>Usted Tiene Obesidad Tipo 2, IMC=${imc}</p><img src='img/gordo.png' alt=''></div>`;
  } else if (imc >= 45 && imc <= 49.9) {
   document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-danger' role='alert'> <p>Usted Tiene Obesidad Tipo 3, IMC=${imc}</p><img src='img/gordo.png' alt=''></div>`;
  } else if (imc >= 50) {
    document.getElementById("resultado1").innerHTML =
    `<div class='alert alert-danger' role='alert'> <p>Usted Tiene Obesidad Tipo 4, IMC=${imc}</p><img src='img/gordo.png' alt=''></div>`;
  }
}

function edad() {
  let edad = parseFloat(document.getElementById("nombre").value);

  if (isNaN (edad)) {
    document.getElementById(
      "resultado2"
    ).innerHTML = `<div class='alert alert-danger' role='alert'> <strong>Syntax Error!: 0 = 0!${edad}</strong></div>`;
  } else if (edad === 0 || edad === 0) {
    document.getElementById("resultado2").innerHTML =
      "<div class='alert alert-danger' role='alert'> <strong>Syntax Error!: 0 = 0!</strong></div>"; años
  }
  else if (edad <= 12) {
    document.getElementById(
      "resultado2"
    ).innerHTML = `<div class='alert alert-success' role='alert'> <p>Usted es un niño tiene ${edad} años</p><img src='img/niño.png' alt=''></div>`;
  } else if (edad > 12 && edad <= 40) {
    document.getElementById(
      "resultado2"
    ).innerHTML = `<div class='alert alert-success' role='alert'> <p>Usted es un Joven tiene ${edad} años</p><img src='img/joven.png' alt=''></div>`;
  } else if (edad > 40 && edad <= 60) {
    document.getElementById(
      "resultado2"
    ).innerHTML = `<div class='alert alert-success' role='alert'> <p>Usted es un Adulto tiene ${edad} años</p><img src='img/adulto.png' alt=''></div>`;
  } else if (edad > 60) {
    document.getElementById(
      "resultado2"
    ).innerHTML = `<div class='alert alert-success' role='alert'> <p>Usted es un Anciano tiene ${edad} años</p><img src='img/anciano.png' alt=''></div>`;
  } else {
    document.getElementById(
      "resultado2"
    ).innerHTML = `<div class='alert alert-danger' role='alert'> <p>Ingrese un valor permitido porfavor!</p></div>`;
  }
}

function porcentaje() {
  let años = parseFloat(document.getElementById('años').value)
  const pago = 40000
  let pagofin

  if (años<3){
    pagofin=(pago*0.03)+pago
    document.getElementById('resultado3').innerHTML=`<div class='alert alert-success' role='alert'> <p>Su Sueldo Final es: ${pagofin}</p><img src='img/bonosueldo.png' alt=''></div>`;

  }
  else if(años > 3 && años<5){
    pagofin=(pago*0.05)+pago
    document.getElementById('resultado3').innerHTML=`<div class='alert alert-success' role='alert'> <p>Su Sueldo Final es: ${pagofin}</p><img src='img/bonosueldo.png' alt=''></div>`;
  }
  else if(años > 5 && años<10){
    pagofin=(pago*0.07)+pago
    document.getElementById('resultado3').innerHTML=`<div class='alert alert-success' role='alert'> <p>Su Sueldo Final es: ${pagofin}</p><img src='img/bonosueldo.png' alt=''></div>`;
  }

  else if (años>=10){
    pagofin=(pago*0.10)+pago
    document.getElementById('resultado3').innerHTML=`<div class='alert alert-success' role='alert'> <p>Su Sueldo Final es: ${pagofin}</p><img src='img/bonosueldo.png' alt=''></div>`;

  }
  else{
    document.getElementById('resultado3').innerHTML=`<div class='alert alert-danger' role='alert'> <p>Algo Salio Mal ¿? Intente denuevo: Error De Sintaxys</p></div>`;
  }

}

function lospisos() {
  let zapatos=parseFloat(document.getElementById('zapatos').value)
  let precio=parseFloat(document.getElementById('precio').value)
  let descuento

  if (zapatos<10) {
    document.getElementById('resultado4').innerHTML=`<div class='alert alert-warning' role='alert'> <p>No tuvo ninguno Descuento!</p><img src='img/descuentozapatos.png' alt=''></div>`;
  } 
  else if(zapatos>=10 && zapatos<=20) {
    descuento=(precio*zapatos)*0.10
    document.getElementById('resultado4').innerHTML=`<div class='alert alert-success' role='alert'> <p>Usted compro: ${zapatos} zapatos entonces el total es ${precio*zapatos} tuvo un descuento de: ${descuento} pesos precio final ${(precio*zapatos)-descuento} pesos</p><img src='img/descuentozapatos.png' alt=''></div>`;
    
  }
  else if(zapatos>20) {
    descuento=(precio*zapatos)*0.20
    document.getElementById('resultado4').innerHTML=`<div class='alert alert-success' role='alert'> <p>Usted compro: ${zapatos} zapatos entonces el total es ${precio*zapatos} tuvo un descuento de: ${descuento} pesos precio final ${(precio*zapatos)-descuento} pesos</p><img src='img/descuentozapatos.png' alt=''></div>`;
    
  }
  
}

