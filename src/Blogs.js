import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

    getBlogs() {
        let url, promise;
        url = "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@freecodecamp";

        axios.get(url)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }

    render() {
        //this.getBlogs();
        return (
            <div>

            </div>
        )
    }
}