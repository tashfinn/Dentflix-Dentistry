const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    problemDescription: { type: String },
    uploadedFiles: [{ type: String }], // Array of file URLs
    status: { type: String, enum: ['pending', 'approved', 'completed', 'cancelled', 'rescheduled'], default: 'pending' },
    paymentStatus: { type: String, enum: ['unpaid', 'paid', 'failed', 'pending'], default: 'unpaid' },
    paymentMethod: { type: String },
    notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
