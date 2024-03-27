import express from 'express';
import Product from '../models/product.model.js';
// import { createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById } from '../controllers/noteController.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


router.get('/products', async(_req, res) =>{
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json(error);
    }

});
router.post('/products', async(req,res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json(error);
    }

});


router.get('/products/id', async(_req, res) =>{
    try{
        const {id}= req.params;
        const product = await Product.findById(id);

        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json(error);
    }    

});

router.put('/products/:id', async(_req, res) =>{
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"Product not found"})

        }
        const updatedProduct = await Product.findByIdAndUpdate(id);
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json(error);
    }    

});



router.delete('/products/:id', async(req, res) =>{
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(i);
        if(!product){
            return res.status(404).json({message:"Product not found"})

        }
        const updatedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json(error);
    }    

});

export default router;
