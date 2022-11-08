
  document.getElementById('c1').onclick = function(){
        document.getElementById('bg').style.background = 'pink'
  }
  document.getElementById('c2').onclick = function(){
        document.getElementById('bg').style.background = 'blue'
  }
  document.getElementById('c3').onclick = function(){
        document.getElementById('bg').style.background = 'yellow'
  }

document.getElementById('c4').onclick = function(){
        document.getElementById('bg').style.background = 'white'
  }

const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    //se agrega expresion regular para eliminar espacios :)
    const longitudAct = target.value.split(/\s+/).join('').length;

    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];

const aprobados = alumnos.filter(alumno => alumno.nota >= 7)


aprobados.map(aprobado => {
  var alumno = document.createElement('p')
  alumno.innerHTML = aprobado.nombre + " - Nota: " + aprobado.nota

  var padre = document.getElementById('aprobados');
  padre.appendChild(alumno)
})