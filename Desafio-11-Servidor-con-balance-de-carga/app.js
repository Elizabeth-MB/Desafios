import express  from "express"
import session from "express-session"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import MongoStore from "connect-mongo"
import passport from "passport"
import { registerStrategy, loginStrategy } from "./strategies/local.js"
import authRouter from "./src/routes/authRoutes.js"
import dashRouter from "./src/routes/dashRoutes.js"
import processRouter from "./src/routes/processRoutes.js"
import { MONGO_URL } from "./config/cloud.js"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.query({extended: true}))
app.use(cookieParser())
app.use(express.static('./src/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'passport-auth'
    },
    () => console.log('Conectado a Mongo DB')
)

app.use(session({
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
        dbName: 'passport-auth',
        collectionName: 'sessions',
        ttl: 120
    }),
    key: "user_sid",
    secret: "secret11",
    resave: false,
    saveUninitialized: false
}))

passport.use('register', registerStrategy)
passport.use('login', loginStrategy)

app.use(passport.initialize())
app.use(passport.session())

app.use('/', authRouter) 
app.use('/dashboard', dashRouter)
app.use('/api', processRouter)
app.use((req, res) => res.redirect('/login'))

export default app