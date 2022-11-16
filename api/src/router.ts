import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { deleteProduct } from './app/useCases/products/deleteProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// List Categories
router.get('/categories', listCategories);

// CreateCategory
router.post('/categories', createCategory);

//DeleteCategory
router.delete('/categories/:categoryId', deleteCategory);

// ListProducts
router.get('/products', listProducts);

// CreateProduct
router.post('/products', upload.single('image'), createProduct);

// DeleteProduct
router.delete('/products/:productId', deleteProduct);

// GetProductByCategory
router.get('/categories/:categoryId/products', listProductsByCategory);

// ListOrders
router.get('/orders', listOrders);

// CreateOrder
router.post('/orders', createOrder);

// ChangeOrderStatus
router.patch('/orders/:orderId', changeOrderStatus);

// DeleteOrder
router.delete('/orders/:orderId', cancelOrder);
