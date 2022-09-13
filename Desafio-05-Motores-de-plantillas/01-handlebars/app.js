import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080);


// const express = require("express");
// const app = express();
// const port = 8080;

// const router = express.Router();
// const {engine} = require('express-handlebars');

// const productRouter=require('./routes/products')(router);

// app.use(express.json());
// app.use(express.urlencoded({ extended:true}));
// app.use('/productos',productRouter)

// app.set('views', './src/views');
// app.set('view engine', 'hbs');

// app.engine('hbs', engine({
//   extname: '.hbs',
//   defaultLayout: 'index.hbs',
//   layoutsDir: __dirname + '/views/layouts',
//   partialsDir: __dirname + '/views/partials'
// }))

// app.get("/*", (req, res) => {
//   res.render('pages/error', {})
// });

// const server = app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// server.on('error', (err) => console.log(err));