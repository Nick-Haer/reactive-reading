import axios from "axios";

export default  {
    searchBooks (title) {
       return axios.get(`/api/books/${title}`)
    },

    saveBook (bookData) {

       return axios.post("/api/books/save", bookData)

    },

    getSavedBooks () {
        return axios.get("/api/books/saved")
    },


    deleteBook (id) {
       return axios.delete("/api/books/", id)
    }
}