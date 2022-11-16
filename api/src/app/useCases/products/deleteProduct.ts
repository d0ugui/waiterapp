import { Request, Response } from 'express';

import { Order } from '../../models/Order';
import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const ordersExists = await Order.find({ 'products.product': { '_id': String(productId)}});

    if (ordersExists.length >= 1) {
      return res.status(400).json({
        error: 'You cant delete a product that contain open orders'
      });
    }

    await Product.findByIdAndDelete(productId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
