import React, { Component } from 'react'

export default class AllBooksComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            bookData : [],
            errorMessage : ''
        }
    }

    componentDidMount(){
        fetch('http://localhost:3500/view',{
            method : 'GET', 
            crossDomain : true,
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            console.log(response.data);
            this.setState({bookData:response.data})
        })
        .catch((error) => {
            console.log(error);
            this.setState({errorMessage:'Cannot retrive data'})
        })
    }

  render() {
    const {bookData, errorMessage} = this.state;
    return (
      <div className='all-books'>
        <div className='container'>
            <h1>List of Books</h1>
            {bookData.length ? bookData.map(book => {<div key={book.id}>{book.bookName}</div>}): null}
        </div>
      </div>
    )
  }
}
