const mongoose = require('mongoose');

const treatmentRecordSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    treatmentSummary: { type: String, required: true },
    reports: [{ type: String }], // Array of file URLs
    prescriptions: [{ type: String }], // Array of file URLs
    xrays: [{ type: String }], // Array of file URLs
    notes: { type: String },
    nextFollowUpDate: { type: Date },
    nextFollowUpNotes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('TreatmentRecord', treatmentRecordSchema);
