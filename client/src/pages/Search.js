import React from "react";

import Api from "../utils/Api"

import SearchBox from "../components/SearchBox";

import Jumbotron from "../components/Jumbotron";

import Books from "../components/Books"

import BooksList from "../components/BookList"

class Search extends React.Component {

    state = {
        searchedTitle: "",
        books: []
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            searchedTitle: value
        })
    }

    handleBookSearchClick = (event) => {
        event.preventDefault()
        let title = this.state.searchedTitle
        console.log(title)
        Api.searchBooks(title)
            .then(results => {
                console.log(results.data)
                this.setState({
                    books: results.data
                })
            })
            .catch(err => console.error(err))
    }

    handleBookSave = (event, index) => {
        event.preventDefault()

        const selectedBook = this.state.books.find((book, i) =>{
            return index === i;
        } )

        const {title, description, previewLink } = selectedBook
        
        const author = Object.keys(selectedBook).includes("authors") ? selectedBook.authors[0] : "No authors found!";

        const bookImage = Object.keys(selectedBook).includes("imageLinks") ? selectedBook.imageLinks.thumbnail : "No image found";

        const bookDescription = selectedBook.description || "No description found";


        console.log(author)
        console.log(bookImage)

        const bookData = {
            title,
            authors: author,
            description: bookDescription,
            image: bookImage,
            link: previewLink
        }

        console.log(bookData)

        Api.saveBook(bookData)
        .then(savedBook => console.log(savedBook))
        .catch(err => console.error(err))

    }

    render() {

        let books = null;

        if (this.state.books.length > 0) {
            books = this.state.books.map((book, index) => {
                return (
                    <Books
                        saveClick = {(event) => this.handleBookSave(event, index)}
                        key={index}
                        image={Object.keys(book).includes("imageLinks") ? book.imageLinks.thumbnail : null}
                        title={book.title}
                        author={Object.keys(book).includes("authors") ? book.authors[0] : "No authors found!" }
                        description={book.description || "No description found"}
                        link={book.previewLink}
                    ></Books>
                );
            })
        }




        return (
            <>
                <Jumbotron />
                <SearchBox
                    title={this.state.searchedTitle}
                    inputHandler={(event) => this.handleInputChange(event)}
                    clickHandler={(event) => this.handleBookSearchClick(event)} />



                {books}


            </>

        )
    }
}


export default Search;