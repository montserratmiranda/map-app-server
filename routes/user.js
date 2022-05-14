import express from "express";
import { createUser, loginUser, getUsers, updateUser, deleteUser } from '../controllers/user.js';
const router = express.Router();

router.post('/signup', createUser);
router.get('/login', loginUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;