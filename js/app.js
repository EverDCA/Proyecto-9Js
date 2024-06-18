document.getElementById('form_pesoIdeal').addEventListener('submit',function(event){
    event.preventDefault();
    //Definir Variables Y Constantes
  const sexo = String(document.getElementById('sexo').value);
  const edad = parseFloat(document.getElementById('edad').value);
  const peso = parseFloat(document.getElementById('pesoActual').value);
  const estatura = parseFloat(document.getElementById('estatura').value);
  const imc = peso / ((estatura / 100) * 2);
  let pesoideal;
  let lossweigth;


//Masculino

  if (sexo === "Masculino") {
    if (imc <= 18) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-warning' role='warning'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-warning">Usted Tiene: Poco Peso su imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 19 && imc < 24.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-success' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-success">Usted Tiene: Un peso Normal su imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 25 && imc < 29.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-danger">Usted Tiene: Sobre peso imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 30 && imc < 34.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-danger">Usted Tiene: Obesidad 1 es de ${imc}</span><br> <span class="badge text-bg-danger">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc > 35 && imc < 39.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-Danger">Usted Tiene: Obesidad 2 imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 40 && imc < 44.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-Danger">Usted Tiene: Obesidad 3 imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 50) {
      pesoideal = estatura - 100 - (estatura - 150) / 4;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-danger">Usted Tiene: Obesidad 4 imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    }


//Femenino



  } else if (sexo === "Femenino") {
    if (imc <= 18) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-warning' role='warning'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-warning">Usted Tiene: Poco Peso su imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 19 && imc < 24.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-success' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-success">Usted Tiene: Un peso Normal su imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 25 && imc < 29.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-danger">Usted Tiene: Sobre peso imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 30 && imc < 34.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-danger">Usted Tiene: Obesidad 1 es de ${imc}</span><br> <span class="badge text-bg-danger">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc > 35 && imc < 39.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-Danger">Usted Tiene: Obesidad 2 imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 40 && imc < 44.9) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br><span class="badge text-bg-Danger">Usted Tiene: Obesidad 3 imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    } else if (imc >= 50) {
      pesoideal = estatura - 100 - (estatura - 150) / 2;
      lossweigth = peso - pesoideal;
      document.getElementById(
        'resultado'
      ).innerHTML = `<div class='alert alert-danger' role='alert'>Tienes: ${edad} años <br> Tu sexo es: ${sexo} <br> Tienes Una estatura de ${estatura} Cm <br> Su Peso Actual es de: ${peso}kg <br> <span class="badge text-bg-success">Su peso ideal es de ${pesoideal} Kg</span><br> <span class="badge text-bg-danger">Usted Tiene: Obesidad 4 imc es de ${imc}</span><br> <span class="badge text-bg-warning">Deberia Perder: ${lossweigth}kg </span></div>`;
    }
  }
})