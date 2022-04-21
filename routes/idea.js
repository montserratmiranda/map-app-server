import express from "express";
import { createIdea, deleteIdea, getIdeas, getOneIdea, likeIdea, updateIdea } from "../controllers/idea.js";
const router = express.Router();

router.post('/create', createIdea);
router.get('/all', getIdeas);
router.get('/:id', getOneIdea);
router.delete('/:id', deleteIdea);
router.put('/:id', updateIdea);
router.put('/:id/like', likeIdea);


export default router;