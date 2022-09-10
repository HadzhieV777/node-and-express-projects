const express = require("express");
const router = express();


const {getAllProductsStatic, getAllProducts} = require('../controllers/products.js')


router.route('/').get(getAllProducts)

router.route('/static').get(getAllProductsStatic)


module.exports = router