const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    cakeSize: { type: String, required: true },
    cakeFlavor: { type: String, required: true },
    designInspiration: { type: String, trim: true },
    deliveryDate: { type: Date, required: true },
    deliveryAddress: { type: String, trim: true },
    additionalComments: { type: String, trim: true },
    submissionDate: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
