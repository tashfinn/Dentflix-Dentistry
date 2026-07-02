const Appointment = require('../models/Appointment');
const User = require('../models/User');

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('patient', 'name email phone').sort({ date: -1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        const appointment = await Appointment.findById(id);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        
        appointment.status = status;
        await appointment.save();
        
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDashboardStats = async (req, res) => {
    try {
        const totalPatients = await User.countDocuments({ role: 'patient' });
        const totalAppointments = await Appointment.countDocuments();
        const pendingAppointments = await Appointment.countDocuments({ status: 'pending' });
        
        res.json({
            totalPatients,
            totalAppointments,
            pendingAppointments
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
