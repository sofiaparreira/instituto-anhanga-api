import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import config from 'config';
import db from '../config/db';
import Logger from "../config/logger";

const app = express();

app.use(express.json());

import router from './routes/router';

app.use("/", router);

const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    Logger.info(`Aplicação funcionando na porta ${port}`);
});
