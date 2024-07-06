import express from 'express';
import UserController from '../controllers/controllers.js';

const router = express.Router();

router.get('/hello', UserController.getGreeting);

export default router;