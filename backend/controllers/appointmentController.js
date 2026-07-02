const Appointment = require('../models/Appointment');
const User = require('../models/User');

exports.bookAppointment = async (req, res) => {
    try {
        const { date, timeSlot, doctor, problemDescription, paymentMethod } = req.body;
        
        // Ensure user is logged in
        if (!req.user) {
            return res.status(401).json({ message: 'Must be logged in to book' });
        }

        // Check if slot is already booked
        const existingAppointment = await Appointment.findOne({ date, timeSlot });
        if (existingAppointment) {
            return res.status(400).json({ message: 'Time slot already booked' });
        }

        const appointment = await Appointment.create({
            patient: req.user._id,
            doctor,
            date,
            timeSlot,
            problemDescription,
            paymentMethod,
            status: 'pending',
            paymentStatus: paymentMethod === 'online' ? 'pending' : 'unpaid'
        });

        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPatientAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient: req.user._id }).sort({ date: -1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
