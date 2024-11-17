function validarFormulario() {
  let correcto = true;

  //===============Personal
  let nombre = document.getElementById("nombre");
  let nombreRegex = /^[a-zA-Z\s]*$/;

  if (nombre.value === "") {
    alert("Nombre obligatorio");
    correcto = false;
  } else if (nombre.value.length < 3) {
    alert("Nombre muy corto");
    correcto = false;
  } else if (!nombreRegex.test(nombre.value)) {
    alert("Nombre incorrecto");
    correcto = false;
  }

  let telefono = document.getElementById("telefono");
  let telefonoRegex = /^[0-9]*$/;

  if (telefono.value === "") {
    alert("Telefono obligatorio");
    correcto = false;
  } else if (telefono.value.length < 10) {
    alert("Telefono muy corto");
    correcto = false;
  } else if (!telefonoRegex.test(telefono.value)) {
    alert("Telefono incorrecto");
    correcto = false;
  }

  let miembro = document.querySelectorAll('input[name="miembro"]:checked');
  if (miembro.value === "") {
    correcto = true;
  }

  //===============Fecha
  let fechaDesde;
  let fechadesde = document.getElementById("fecha-desde");
  if (fechadesde.value === "") {
    alert("Fecha inicio obligatoria");
    correcto = false;
  } else {
    fechaDesde = new Date(fechadesde.value);
    let fechaActual = new Date();
    if (fechaDesde <= fechaActual) {
      alert("La fecha no puede ser menor o igual a la actual");
      correcto = false;
      return fechaDesde;
    }
  }

  let fechahasta = document.getElementById("fecha-hasta");
  if (fechahasta.value === "") {
    alert("Fecha fin obligatoria");
    correcto = false;
  } else {
    let fechaHasta = new Date(fechahasta.value);
    if (fechaHasta < fechaDesde) {
      alert("La fecha no puede ser menor a la de inicio");
      correcto = false;
    }
  }

  //===============Informacion
  let personasCantidad = document.getElementById("personas");

  if (personasCantidad.value === "") {
    alert("Cantidad de personas obligatoria");
    correcto = false;
  }

  let proposito = document.querySelector(".propositos");
  if (proposito.value === "") {
    alert("Proposito obligatorio");
    correcto = false;
  }

  let notas = document.getElementById("notas");
  if (notas.value === "") {
    correcto = true;
  }

  return correcto;
}
