const BookModels= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModels.create(data)
    res.send({ msg: savedData})
}

const getBooksData= async function (req,res ){
    let allBook=await BookModels.find( )
    res.send ({msg: allBooks})
}

module.exports.createBook= createBook;
module.exports.getBooksData= getBooksData;