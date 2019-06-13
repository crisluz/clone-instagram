const express = require("express");
const PostController = require("./controllers/PostController");

const uploadConfig = require('./config/upload');


const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts',PostController.store);

module.exports = routes;