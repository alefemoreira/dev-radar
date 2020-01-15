const express = require('express');
const mongoose = require('mongoose')

const app = express();
const routes = require('./routes')

mongoose.connect("mongodb+srv://alefe:aldebaran@cluster0-gycug.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); // colocar valores em variáveis de ambiente

app.use(express.json());
app.use(routes);

app.listen(8080);