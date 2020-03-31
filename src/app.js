const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.options('*', cors());
app.use(cors({
    origin: ['http://URL_MY_FRONTEND'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;