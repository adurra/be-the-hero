const express = require('express'); 
const app = express(); 
const cors = require('cors');
const port = 3333; 
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port); 


/**
 * MÉTODOS HTTP
 * 
 * GET:  Buscar uma informação do back-end`
 * POST: Criar uma informação no back-end 
 * PUT:  Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


/**
 * Tipos de parâmetros: 
 * 
 * Query Params: Parametros nomeados enviados na rota após o "?"(Filtros, paginação)
 * 
 * Route Params: Parâmetros utilizados para identificar recursos 
 * 
 * Request Body: corpo da requisição para criar ou alterar
 */



