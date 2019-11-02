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
    const {name, value} = event.target
    this.setState({
        searchedTitle: value
    })
}

handleBookSearchClick = (event) => {
    event.preventDefault()
    let title = event.target.value
    Api.searchBooks(title)
    .then(results => console.log(results))
    .catch(err => console.error(err))
}

    render () {

        let books = null;

        if (books !== null && books.length > 0) {
            books = books.map(book => {
                return (
                    <Books></Books>
                );
            })
        }




        return (
            <>
            <Jumbotron />
            <SearchBox 
            titleSearch = {this.state.searchedTitle}
            inputHandler = {(event) => this.handleInputChange(event)}
            clickHandler = {(event) => this.handleBookSearchClick(event)} />

            <BooksList>

            {books}

            </BooksList>
            </>

        )
    }
}


export default Search;