const { Schema, model } = require('mongoose')

const productSchema = Schema({
    title: {
        type: String,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: Array
})

const Product = model('products', productSchema)

module.exports = Product