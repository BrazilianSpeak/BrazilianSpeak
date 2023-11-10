import cors from 'cors';
import express from 'express'
import routerLogin from './routers/routerLogin';
require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/login', routerLogin);
app.get('/', (_req, res) => res.json({ message: 'active server' }));

app.listen(+PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});

export default app;
