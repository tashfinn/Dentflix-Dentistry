const express = require('express');
const { bookAppointment, getPatientAppointments } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book', protect, bookAppointment);
router.get('/my-appointments', protect, getPatientAppointments);

module.exports = router;
