const numeroGame = parseInt(prompt("¿Cuantas veces deseajugar?"))
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    const usuario = document.querySelector('input[name="opcion"]:checked').value;
    console.log(this.submit);
    console.log(`Opción seleccionada: ${usuario}`);
    console.log(typeof(parseInt(usuario)))
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const numeroRandom = getRandomInt(3)
console.log(`Opción numeroRandom = ${numeroRandom}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let gana =""
var piedraPapelTijeras = (jugador1, jugador2) =>
  jugador1 === jugador2
    ? gana = ("Empate")
    : jugador1 === 0 && jugador2 === 2 ||
      jugador1 === 1 && jugador2 === 0 ||
      jugador1 === 2 && jugador2 === 1
    ?  gana = ("Jugador  gana")
    :  gana =("Computador gana");
//////////////////////////////////////////////////////////////////////////////////////////


piedraPapelTijeras(parseInt(usuario),numeroRandom);
console.log(`Opción seleccionada numeroRandom: ${numeroRandom}`);
console.log(`-------------------------------------------------`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const elemento = document.querySelector('.respuesta');
const mensaje = `Jugador: ${usuario == 0 ?"Piedra" : usuario ==1 ?"Papel" : "Tijeras"}  
                 Computador: ${numeroRandom == 0 ?"Piedra" : numeroRandom ==1 ?"Papel" : "Tijeras"} 
                 ${gana}`
elemento.innerHTML = mensaje;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  });

let i =0;
function contarClick (){         
    i = i+1;
    console.log("este es i "+i);
    if (i >=numeroGame){
        alert("Fin delJuego")
    }

}