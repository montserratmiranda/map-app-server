import express from "express";
import { createMarker, deleteMarker, getMarkers, updateMarker} from "../controllers/marker.js";
const router = express.Router();

router.post('/newMarker', createMarker);
router.get('/all', getMarkers);
router.put('/:id', updateMarker);
router.delete('/:id', deleteMarker)

export default router;