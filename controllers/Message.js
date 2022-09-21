export const Hello = async (req,res) => {
    try{
        // res.send("Hello, my name is Thai");
        res.json({
            'message': 'Hello, my name is Thai (19522188)'
        })
    } catch (error) {
        console.log(error)
    }
}
