const db = require("../models")


module.exports = {

    bookSearch(req, res) {

        const title = req.params.title

        let booksData = [];

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
            .then(response => {

                for (let book of response.data.items) {
                    booksData.push(book.volumeInfo)
                }
            })
            .then(() => {
                console.log(booksIds)
                res.status(200).json(booksData)
            })
            .catch(err => {
                console.error(err)
                res.status(404).json(err)
            })
    },
    

    findAllSaved(req, res) {
        db.Book.findAll({})
            .then(result => res.status(200).json(result))
            .catch(error => res.status(404).json(error))
    },

    deleteSelected(req, res) {
        db.Book.find({_id : req.params.id})
        .then(book => book.remove())
    }

}





