import express from 'express';
import UserController from '../controllers/controllers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, welcome to the weather forecast!');
});
router.get('/hello', UserController.getGreeting);

export default router;