import Express from "express";
const app = Express()
import mysql from "mysql"
import bodyParser from 'body-parser'
import cors from 'cors'

//Database connectivity
const db = mysql.createPool({
    host: "localhost",
    user: "test", 
    password: "", //Add your own password here. I haven't used any password in my machine so left it blank
    database: "mobileMake"
})

app.use(cors())
app.use(Express.json())
app.use(bodyParser.urlencoded({extended: true}))

//Getting the values from database and sending its response back 
app.get('/api/get/mobileMake', (req, res) => {
    const getItems = "SELECT distinct(mobileName) FROM mobileMakeList;"
    db.query(getItems,(err,result) =>{
        res.send(result)
    })
})

//Just to cofirm that server is up and listening in port 3001
app.listen(3001, ()=>{
    console.log("Running in 3001!")
})