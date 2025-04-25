import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import productsRouter from "./routes/products.js";


dotenv.config();
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000


app.use("/api/products", productsRouter);


app.listen(PORT, () => {
    console.log(`Running db port ${PORT}`);
})


mongoose.connect(process.env.DATABESE_URL)
    .then(() => {
        console.log("MongoDB ulandi");
        app.listen(process.env.PORT, () => {
            console.log(`Server ${process.env.PORT}-portda ishlayapti`);
        });
    })
    .catch(err => console.error("MongoDB ulanish xatosi:", err));