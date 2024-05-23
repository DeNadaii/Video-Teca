//BIBLIOTECAS/MODULOS UTILIZADOS
const database = require("./db/db");
const express = require("express");
const app = express();
const Filme = require("./models/filme");
const hand = require("express-handlebars");

//MODELS
//const Video = require("./models/Video");
const FilmeRoutes = require("./routes/routesFilme");
//CONTROLLERS
const FilmeControllers = require("./controllers/ControllerFilme");

//UTILIZAÇÃO DO HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true, }));
app.use(express.json());
app.use(express.static("public"));
//ROTAS
app.use("/", FilmeRoutes);

//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {
    app.listen(443, () => { console.log('Servidor rodando') });
  })
}
catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};