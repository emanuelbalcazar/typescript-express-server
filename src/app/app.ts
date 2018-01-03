// app.ts - application configuration module.
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as config from '../config/config';

const app: express.Application = express();

// configure all enviroments.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set host and port
app.set("host", config.HOST);
app.set("port", config.PORT);

// declare all routes and middlewares.
import { Routes } from "../routes/routes";
app.use('/api', Routes);

module.exports = app;
