import express from 'express';
import {connetBD} from './database';
require('dotenv').config();

const app = express();
const port  =  3000;

app.listen(port, () => {
    console.log(`run service1 POR ${port}`);
});

app.use(express.json());

connetBD();

app.use('/api', require('./routes/app.routes'));