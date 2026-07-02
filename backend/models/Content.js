const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    section: { type: String, required: true, unique: true }, // e.g., 'hero', 'about', 'services', 'contact'
    data: { type: mongoose.Schema.Types.Mixed, required: true } // Flexible JSON object for content data
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
