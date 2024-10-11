import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRouter.js'
import userRouter from './routes/userRoute.js'
import dotenv from 'dotenv';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
dotenv.config(); // Load environment variables



//app config

const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

connectDB();

//api endpoint
app.use("/api/food" , foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user" , userRouter)
app.use("/api/cart", cartRouter)
app.use('/api/order' , orderRouter)

app.get("/",(req, res)=>{
    res.send("API Working")
})


app.listen(port , ()=>{
    console.log(`Serevr started on http://localhost:${port}`)
})
