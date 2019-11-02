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

        const {title, imageLinks, description, previewLink } = selectedBook

        const bookData = {
            title,
            authors: selectedBook.authors[0],
            description,
            image: imageLinks.thumbnail,
            link: previewLink
        }

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
                        image={book.imageLinks.thumbnail}
                        title={book.title}
                        author={book.authors[0]}
                        description={book.description}
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