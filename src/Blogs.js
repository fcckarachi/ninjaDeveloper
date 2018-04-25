import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

    getBlogs() {
        let url, promise;
        url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@freecodecamp";
        //url = "https://medium.com/feed/@freecodecamp";

        axios.get(url)
            .then(res => console.log(res.data.items))
            .catch(err => console.log(err));

    }

    render() {
        this.getBlogs();
        return (
            <div>

            </div>
        )
    }
}