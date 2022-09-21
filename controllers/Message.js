// To use require in ES module, you should follow these steps below.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const myinfo = require("../data/myInfo.json");

export const Hello = async (req,res) => {
    try{
        // res.json({
        //     'message': 'Hello, my name is Thai (19522188)'
        // })
        res.send(myinfo)
    } catch (error) {
        console.log(error);
    }
}

export const Welcom = async  (req, res) => {
    try {
        res.send('Welcome to my api homework');
    } catch (error) {
        console.log(error);
    }
}
