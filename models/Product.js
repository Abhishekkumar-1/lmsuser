import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  author: {type:String, required:true},
  genre: {type:String, required:true},
  publishedyear: {type:String, required:true},
  description: String,
  availability: {type:String, required:true},
  price: {type: Number, required: true},
  image: {type:String, required:true},
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);