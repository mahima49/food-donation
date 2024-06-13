const paymentForm = document.getElementById('payment-form');
const payButton = document.getElementById('pay-button');
const paymentResponse = document.getElementById('payment-response');

payButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const upiId = document.getElementById('upi-id').value;

    // Validate UPI ID format
    if (!/^[a-zA-Z0-9._]+$/.test(upiId)) {
        paymentResponse.innerHTML = 'Invalid UPI ID format';
        return;
    }

    // Create a payment request
    const paymentRequest = {
        amount: amount,
        upiId: upiId,
        transactionId: generateTransactionId(),
        paymentMode: 'UPI'
    };

    // Send payment request to server
    fetch('/make-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentRequest)
    })
   .then(response => response.json())
   .then((data) => {
        if (data.status === 'uccess') {
            paymentResponse.innerHTML = `Payment successful! Transaction ID: ${data.transactionId}`;
        } else {
            paymentResponse.innerHTML = `Payment failed: ${data.error}`;
        }
    })
   .catch((error) => {
        paymentResponse.innerHTML = `Error: ${error.message}`;
    });
});

// Generate a random transaction ID
function generateTransactionId() {
    return Math.random().toString(36).substr(2, 9);
}