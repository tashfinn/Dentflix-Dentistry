const express = require('express');
const { getAllAppointments, updateAppointmentStatus, getDashboardStats } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/appointments', protect, admin, getAllAppointments);
router.put('/appointments/:id/status', protect, admin, updateAppointmentStatus);
router.get('/stats', protect, admin, getDashboardStats);

module.exports = router;
