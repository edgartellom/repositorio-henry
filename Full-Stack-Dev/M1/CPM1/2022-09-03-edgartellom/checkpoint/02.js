// 2️⃣ ***** EJERCICIO 2 ***** - calcularImpuestos() 2️⃣
// En este ejercicio, debemos implementar la función calcularImpuestos, de forma recursiva.
// Debes retornar la suma total con los decimales incluidos.
// La función recibirá boletas/facturas con los impuestos anuales por la casa, aunque pueden haber 
// boletas vacias (por ende no son array), por lo que tendremos que validar eso.
// Sabiendo esto, si la persona no tiene impuestos, debes retornar false, si tiene impuestos debes sumarlos
// y si no es una boleta/factura (array), debes devolver "error"
// si no hay inconvenientes, devolverlos para que sepa el total que debe pagar.
//
//
//
// EJEMPLOS:
// [1,2,3,4,5] => 15
// {} => "Error"
// [] => False
//
//
// REQUISITOS:
//  🟢 La función debe obtener el total hallado de forma recursiva                                 
//  🟢 La función debe retornar el valor numérico correspondiente, contando tambien los decimales. 
//  🟢 Si no tiene impuestos, debes retornar false.                                               
//  🟢 Si factura no es un array, debes retornar "Error".                                              

const calcularImpuestos = (factura, i = 0, acc = 0) => {
  // Tu código aquí:
  if (factura.length === 0) return false
  if (!Array.isArray(factura)) return "Error";
  if (i < factura.length) acc = factura[i] + calcularImpuestos(factura, i+=1, acc);
    
  return Number(acc.toFixed(2));
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  calcularImpuestos
};
