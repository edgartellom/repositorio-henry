const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar, asyncfun } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let counter = store.getState().contador
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = counter
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(() =>{renderContador()});


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

var btnIncrement = document.getElementById('incremento');
btnIncrement.onclick = () => { store.dispatch(incremento()) }

var btnDecrement = document.getElementById('decremento');
btnDecrement.onclick = () => { store.dispatch(decremento()) }

var btnImpar = document.getElementById('incrementoImpar');
btnImpar.onclick = () => { store.dispatch(impar()) }

var btnAsync = document.getElementById('incrementoAsync');
btnAsync.onclick = () => { setTimeout(() => { store.dispatch(asyncfun())}, 1000) }