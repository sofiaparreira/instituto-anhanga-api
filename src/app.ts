import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import config from 'config';
import db from '../config/db';
import Logger from "../config/logger";
import cors from 'cors'

const app = express();
app.use(cors())


app.use(express.json());


import router from './routes/router';

app.use("/", router);

const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    Logger.info(`Aplicação funcionando na porta ${port}`);
});
