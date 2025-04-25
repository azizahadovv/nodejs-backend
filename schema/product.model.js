import mongoose from "mongoose";

const ProdSchema = mongoose.Schema(
    {
        prodName: {
            type: String,
            required: [true, "Please enter product names"]
        },
        prodQuantity: {
            type: Number,
            required: true,
            default: 0
        },
        prodPrice: {
            type: Number,
            required: true,
            default: 0
        },
        prodImage: {
            type: String,
            required: false,
        },

    },

    {
        timestamps: true
    }

)


const Product = mongoose.model("Product", ProdSchema)

export default Product