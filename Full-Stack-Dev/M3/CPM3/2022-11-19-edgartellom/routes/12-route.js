const router = require('express').Router();
const getBrandPrices = require('../controllers/06-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣2️⃣ ***** EJERCICIO 12 ***** - GET /brands/:brandName/car-prices 1️⃣2️⃣:
  
  🟢 Integrar la función getBrandPrices que desarrollaste previamente (Ejercicio 6) para obtener el total de 
  los precios de los coches de una marca.
  🟢 Responder con el resultado de la operación, el formato debe ser: { results: 23000 }
  🟢 Si surge algún error durante la operación, responder con el mensaje correspondiente.
  🟢 Responder con un error si el parámetro "unused" llega como undefined o null.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) El parámetro query "unused" es recibido como un string. Tendrás que ingeniártelas para convertirlo en booleano.
  2) Si algo falla debes responder con el mensaje del error.
  3) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get('/brands/:brandName/car-prices', (req, res) => {
  const { brandName } = req.params;
  const { unused } = req.query;
  
  const bool = (arg) => {
    if (arg === "true") return true;
    if (arg === "false") return false;
    return unused
  }
  const result = bool(unused);
  
  try {
    if (result === null || result === undefined) res.status(200).json({ results: getBrandPrices(brandName, null)})
    else res.status(200).json({ results: getBrandPrices(brandName, result)});
  } catch (error) {
    if(typeof result !== "boolean" && result !== undefined && unused !== "") return res.status(400).json({ error: "El parámetro unused es inválido" }); 
    else res.status(404).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
