import cors from 'cors';
import express from 'express';
import routerLogin from './routers/routerLogin';
import serverError from './middlewares/serverError';
import routerCreate from './routers/routerCreate';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/create', routerCreate);
app.use('/login', routerLogin);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (_req, res) => res.json({ message: 'active server' }));
app.use(serverError);

app.listen(+PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});

export default app;
