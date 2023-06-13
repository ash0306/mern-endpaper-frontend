import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import './HeaderComponent.css'

export default class HeaderComponent extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         id:'',
    //         bookName:'',
    //         authorName:'',
    //         year:'',
    //         genre:''
    //     }
    // }

    // viewHandler = () =>{
    //     fetch('http://localhost:3500/view',{
    //         method: 'GET',
    //         crossDomain: true,
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         window.location.href('/view');
    //     })
    // }
  render() {
    // const {id, bookName, authorName, year, genre} = this.state;
    return (
        <div className='header'>
        <div className='logo'>
            <Link to={'/'}>
            <p className='logo-text'>Spark Books</p>
            </Link>
        </div>

        <div className='content'>
            <div className='add-new'>
                <Link to={'/add/new'}>
                <p className='head-cont'>Add New Book</p>
                </Link>
            </div>
            <div className='view-all'>
                <Link to={'/view'}>
                <p className='head-cont'>View all Books</p>
                </Link>
            </div>
        </div>
    </div>
    )
  }
}
