import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middlewares/extractJWT';

const router = express.Router();

// Define routes
router.get('/validate', extractJWT, controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllUsers);

// Export router
export = router;