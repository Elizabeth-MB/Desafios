import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static('./src/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

const MONGO = process.env.MONGO || 'mongodb://localhost/coder-auth'

const PORT = process.env.PORT || 8080

mongoose.connect(MONGO, {
    use
})