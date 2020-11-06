const express = require("express");

const Router = require('./data/db-router');

const server = express();

server.use(express.json());

server.use('/api',Router);

module.exports = server;