import express, {Express, Request,Response} from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const Port = process.env.PORT || 8002

app.get("/api", (req:Request,res:Response) => {
    res.json({msg: 'Api'})
})
app.get("/api/student", (req:Request,res:Response) => {
    res.json({msg: 'Students'})
})

app.listen(Port, () => {
    console.log('Holaa');
})

