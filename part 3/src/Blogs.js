import React, { Component } from 'react';
import axios from 'axios';

export default class Blogs extends Component {

    constructor() {
        super();

        this.state = {
            blogs: []
        };
    }

    componentWillMount() {
        this.getBlogs();
    }

    getBlogs() {
        let url, promise;

        url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.freecodecamp.org/feed";
        promise =  axios.get(url);
        promise
            .then(function(res) {
                let blogs = res.data.items;
                this.setState({ blogs: blogs });
            }.bind(this))
            .catch(function(err){ console.log(err);});
    }

    getBlogItem(item,index) {       
        return (
            <div key={index} className="columns" key={index}>
                <div className="column">
                    <a href={item.link} target="_blank">
                        <div className="card">
                            <div className="card-content">
                                <div className="columns">
                                    <div className="column">
                                        <figure className="image is-2by1">
                                            <img src={item.thumbnail} />
                                        </figure>
                                    </div>
                                    <div className="column is-three-quarters">
                                        <p className="title is-4">
                                            {item.title}
                                        </p>
                                        <p className="subtitle">
                                            <span>By </span>
                                            {item.author}
                                        </p>
                                        <span>{item.pubDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    render() {
        let blogs = this.state.blogs;
        let arrBlogItems = [];
        for(let index in blogs){
            let item = blogs[index];
            arrBlogItems.push(this.getBlogItem(item,index));
        }

        return (
            <section className="hero is-light is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        {arrBlogItems}
                    </div>
                </div>
            </section>
        )
    }
}