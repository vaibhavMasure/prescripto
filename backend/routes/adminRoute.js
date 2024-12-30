import express from "express";
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import upload from "../middlewares/multer.js";
import authAmdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAmdmin, upload.single('image'), addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors', authAmdmin, allDoctors)
adminRouter.post('/change-availability', authAmdmin, changeAvailability)
adminRouter.get('/appointments', authAmdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAmdmin, appointmentCancel)
adminRouter.get('/dashboard', authAmdmin, adminDashboard)
export default adminRouter