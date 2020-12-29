import express from 'express';
import Product from '../models/productModel';
import { getToken } from '../util';
const router=express.Router();

router.get("/", async(req, res)=>{
    const products= await Product.find({});
    res.send(products);
})

router.get("/:id", async(req, res)=>{
    const product= await Product.findOne({_id: req.params.id});
        if(product){
            res.send(product);
            console.log(product)
        }else{
            res.status(404).send({message:"Product not Found"})
        }
    
})

router.post("/", async(req, res)=>{
    const product= new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category:req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description
    });
    const newProduct= await product.save();

    if(newProduct){
        return    res.status(201).send({message: "New Product Created", data:newProduct})
    }
    return res.status(500).send({ message:'Error in creating Product.'});
})
export default router;