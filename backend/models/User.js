const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['patient', 'admin', 'doctor'], default: 'patient' },
    phone: { type: String },
    address: { type: String },
    avatar: { type: String },
    // Only relevant for patients
    dob: { type: Date },
    gender: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
