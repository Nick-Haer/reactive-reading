import React from "react";

import Jumbotron from "../components/Jumbotron";

import SavedBooks from "../components/SavedBooks"

import BooksList from "../components/BookList"

import Api from "../utils/Api"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Saved extends React.Component {


state = {
    savedBooks: []
}

getbooks() {
    Api.getSavedBooks()
    .then(books => {
        console.log(books.data)
        this.setState({
            savedBooks: books.data
        })
    })
    .catch(err => console.error(err))
}

componentDidMount() {
this.getbooks()
}

componentDidUpdate() {
    this.getbooks()
}



handleBookDelete = (event, index) => {
event.preventDefault()

const deletedBook = this.state.savedBooks.find((book, i) =>{
    return index === i;
} )

console.log(deletedBook._id)

Api.deleteBook(deletedBook._id)
.then(bookDeleted => {
    console.log("deleted")
})
.catch(err => console.error(err))



}




    render () {


        let savedBooksList = null;

        if (this.state.savedBooks.length > 0) {
            console.log(this.state.savedBooks)
            savedBooksList = this.state.savedBooks.map((book, index) => {
                return (
                    <SavedBooks
                        
                        deleteClick = {(event) => this.handleBookDelete(event, index)}
                        key={book._id}
                        identity = {book._id}
                        image={book.image}
                        title={book.title}
                        author={book.authors}
                        description={book.description}
                        link={book.link}
                    ></SavedBooks>
                );
            })
        }


        return (
            <>
             <Jumbotron />
             {savedBooksList}
            </>
        )
    }
}

export default Saved;