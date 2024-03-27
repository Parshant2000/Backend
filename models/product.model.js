import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required:[true],
        },

        content:{
            type: String,
            required:[true],
        },
        // createdAt:{
        //     type:Date,
        //     default: Date.now,
        // },
    }

);

const Product = mongoose.model("Product", ProductSchema);
export default Product;