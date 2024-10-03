const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    studentRegistrationNumber: String,
    studentId: String,
    studentName: String,
    fatherGuardianName: String,
    class: String,
    emergencyContact: Number,
    studentProfileImageUrl: String,
});

const Student = mongoose.model('student', StudentSchema)

module.exports = Student