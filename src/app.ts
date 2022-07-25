import 'express-async-errors';
import 'reflect-metadata';

import '@/shared/containers/';

import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import express, { Application, NextFunction, Request, Response } from "express";

import router from '@/app/api/routes';
import { connectDatabase } from "@/app/database";

const app: Application = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
    res.send({ message: "Object Oriented Architecture" });
});

app.use(errors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    throw new Error(err.message);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

connectDatabase();