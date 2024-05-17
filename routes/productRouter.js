const productController = require('../controllers/productController.js')

const router = require('express').Router()

// creat product
router.post('/addProduct', productController.addProduct)
// get all products
router.get('/allProducts', productController.getAllProducts)
// get all published products
router.get('/published', productController.getPublishedProduct)
// get product by id
router.get('/:id', productController.getOneProduct)
// update product by id
router.put('/:id', productController.updateProduct)
// delete product by id
router.delete('/:id', productController.deleteProduct)

module.exports = router
