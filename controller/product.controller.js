const Product = require('../models/product.model.js');

// get all products
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// get one specific product
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// add a product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}