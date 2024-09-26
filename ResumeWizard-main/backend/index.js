import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import  database from "./database/db.js";
import {UserRouter}  from './routes/user.js';

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000","https://resumewizard-jga2.onrender.com"],
    credentials: true
}));
app.use(cookieParser());
database();



app.use('/auth', UserRouter);
app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})