import React, { Component } from 'react'
import './AddNewBookComponent.css'

export default class AddNewBookComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:'',
            bookName:'',
            authorName:'',
            year:'',
            genre:''
        }
    }

    idChangeHandler = event => {
        this.setState({id:event.target.value})
    }

    bNameChangeHandler = event => {
        this.setState({bookName:event.target.value})
    }

    aNameChangeHandler = event => {
        this.setState({authorName:event.target.value})
    }

    genreChangeHandler = event => {
        this.setState({genre:event.target.value})
    }

    yearChangeHandler = event => {
        this.setState({year:event.target.value})
    }

    onSubmitHandler = event => {
        event.preventDefault();

        fetch('http://localhost:3500/add/new',{
            method: 'POST',
            crossDomain: true,
            headers : {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body : JSON.stringify({
                id : this.state.id,
                bookName : this.state.bookName,
                authorName : this.state.authorName,
                year : this.state.year,
                genre : this.state.genre
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.href('/view');
        })
    }
    

  render() {
    const {id, bookName, authorName, year, genre} = this.state;
    return (
      <div className='add-books'>
        <div className='container'>
        <h1>Add New Book</h1>
        <form onSubmit={this.onSubmitHandler}>
            <label htmlFor='id'>ISBN Number:</label><br/>
            <input id='id' type='text' required='true' placeholder='Enter ISBN number' value={id} onChange={this.idChangeHandler} /><br/>
            
            <label htmlFor='bname'>Book Name:</label><br/>
            <input id='bname' type='text' required='true' placeholder='Enter Book name' value={bookName} onChange={this.bNameChangeHandler}/><br/>
            
            <label htmlFor='aname'>Author Name:</label><br/>
            <input id='aname' type='text' required='true' placeholder='Enter Author name' value={authorName} onChange={this.aNameChangeHandler}/><br/>
            
            <label htmlFor='genre'>Genre:</label><br/>
            <input id='genre' type='text' placeholder='Enter genre' value={genre} onChange={this.genreChangeHandler}/><br/>
            
            <label htmlFor='year'>Year Published:</label><br/>
            <input id='year' type='text' placeholder='Enter published year' value={year} onChange={this.yearChangeHandler}/><br/><br/>

            <button type='submit' className='submit-btn'>Submit</button>
        </form>
        </div>
      </div>
    )
  }
}
