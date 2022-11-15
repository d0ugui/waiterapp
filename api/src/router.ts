import { Router } from 'express';

export const router = Router();

// List Categories
router.get('/categories', (req, res) => {
  res.send('OK');
});

// CreateCategory
router.post('/categories', (req, res) => {
  res.send('OK');
});

// ListProducts
router.get('/products', (req, res) => {
  res.send('OK');
});

// CreateProduct
router.post('/products', (req, res) => {
  res.send('OK');
});

// GetProductByCategory
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// ListOrders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// CreateOrder
router.post('/orders', (req, res) => {
  res.send('OK');
});

// ChangeOrderStatus
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// DeleteOrder
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
