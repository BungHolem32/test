import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';

import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));

app.use('/api',apiRouter);


app.listen(port, () =>{
  console.info(`listening to port ${port}`);
});
