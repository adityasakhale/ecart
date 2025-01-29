import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectCloudinary from './Config/cloudinary.js'
import connectDB from './Config/mongodb.js'
import cartRouter from './routes/cartRoute.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import orderRouter from './routes/orderRoute.js'

//   app config
const app =express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log('server started on PORT :'+port));