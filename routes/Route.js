var express = require("express");
var router = express.Router();

var estados = [
  "Rio de Janeiro",
  "São Paulo"
]

router.get("/estados", (req, res) => {
  res.render("form");
});

router.get("/", (req, res) => {
  res.redirect("/estados");

});


router.post("/estados", (req, res) => {
  let nome = req.body.nome;
  estados[estados.length] = nome;
  //return res.json([cidades[cidades.length - 1]]);

  return res.json({
    TodosEstados: estados,
    novaEstado: estados[estados.length - 1]
  });
});

module.exports = router;