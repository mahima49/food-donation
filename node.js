const express = require('express');
const app = express();

app.use(express.json());

app.post('/make-payment', (req, res) => {
    const paymentRequest = req.body;
    const amount = paymentRequest.amount;
    const upiId = paymentRequest.upiId;
    const transactionId = paymentRequest.transactionId;

    // Validate payment request
    if (!amount ||!upiId ||!transactionId) {
        return res.status(400).json({ error: 'Invalid payment request' });
    }

    // Process payment using UPI gateway (e.g. Google Pay, Paytm, etc.)
    // For demo purposes, assume payment is successful
    const paymentResponse = {
        status: 'uccess',
        transactionId: transactionId
    };

    res