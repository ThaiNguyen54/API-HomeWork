import mongoose from 'mongoose';
import Anime from "../models/Anime.js";

export const AddAnime = async (req, res) => {

    const newAnime = new Anime(req.body)
    return newAnime
        .save()
        .then((newAni) => {
            return res.status(201).json({
                success: true,
                message: 'New anime added',
                Customer: newAni,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Save failed",
                error: error.message,
            });
        });
}

export const GetAllAnime = async (req, res) => {

    Anime.find()
        .then(allAnime => {
            return res.status(200).json({
                success: true,
                message: 'List of all animes',
                Anime: allAnime
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Cannot get animes.',
                error: err.message
            });
        });

}