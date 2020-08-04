import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);

// ROTAS:
// GET: buscar ou listar uma informação
// POST: criar nova informação
// PUT: atualizar informação existente
// DELETE: deletar uma informação existente

// corpo (Request body): Dados para criação ou atualização de um registro.
// route params: identifica recurso que quero atualizar ou deletar
// query params: Paginação, listagem
