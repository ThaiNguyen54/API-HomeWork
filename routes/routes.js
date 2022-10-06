import express from "express"
import {AddAnime, GetAllAnime} from "../controllers/animeControl.js";


const router = express.Router();
router.post('/addanime', AddAnime);
router.get('/animes', GetAllAnime);

export default router;