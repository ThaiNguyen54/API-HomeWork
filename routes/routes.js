// Import express
import express from "express"
// Import product Controller
import {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct
} from "../controllers/product.js";

import {Hello, Welcom} from "../controllers/Message.js";

// Init express router
const router = express.Router();

// Route get all products
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route creat a new product
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
//Route delete product by id
router.delete('/products/:id', deleteProduct);


router.get('/message', Hello);
router.get('/', Welcom);
// export router
export default router;
