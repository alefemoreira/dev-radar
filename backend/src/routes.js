const { Router } = require("express");
const DevController = require("./controller/DevController")
const SearchController = require("./controller/SearchController")

const routes = Router();

routes.get("/devs", DevController.index)
routes.post('/devs', DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes

// Annotations

// Metodos: GET, POST, PUT, DELETE

// Query Params: request.query (Filtros, Odernação, paginação, ...)
// Route Params: request.params (Identificar um recurso na auteração ou remoção)
// Body: request.body (Criação ou alterção de um registro)