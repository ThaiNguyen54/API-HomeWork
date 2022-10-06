import mongoose from "mongoose";

let AnimeSchema = new mongoose.Schema({

    Name:{
        type: String,
        minlength: 4,
        maxlength: 64,
        default: 'NONE'
    },
    Type:{
        type: String,
        minlength: 4,
        maxlength: 64,
        default: 'NONE'
    }
})
const anime = mongoose.model('anime', AnimeSchema);
export default anime;