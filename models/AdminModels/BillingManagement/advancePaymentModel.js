const mongoose = require('mongoose');

const advancePaymentSchema = new mongoose.Schema({
    admissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admission', required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true, enum: ['cash', 'cheque', 'card'] },
    receiptNo: { type: String, required: true },
    status: { type: String, required: true, enum: ['paid', 'pending', 'cancelled'] }
});

module.exports = mongoose.model('AdvancePayment', advancePaymentSchema);
