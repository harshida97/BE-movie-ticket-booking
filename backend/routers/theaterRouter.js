// routes/theaterRoutes.js
import express from 'express';
import { registerTheater,listTheaters, getTheaters,approveTheater,deleteTheater } from '../controllers/theaterController.js';
import { isAuthenticated,isAdmin } from '../middlewares/middlewareAuth.js';



const router = express.Router();
router.post('/registertheater', isAuthenticated, registerTheater);
router.get('/list-theaters',listTheaters)
router.get('/get-theaters', getTheaters);
router.put('/approve/:theaterId', isAuthenticated, isAdmin, approveTheater);
router.delete('/deletetheater/:theaterId',isAuthenticated,deleteTheater)

export default router;
