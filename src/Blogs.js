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
        let url

        url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.freecodecamp.org/feed";

        axios.get(url)
            .then(res => {
                //console.log(res.data.items, res.data.items)
                this.setState({ blogs: res.data.items });
            })
            .catch(err => console.log(err));
    }

    getBlogItem(item, index) {
        //console.log(item);
        return (
            <div className="columns" key={index}>
                <div className="column">
                    <a href={item.link} target="_blank">
                        <div className="card">
                            <div className="card-content">
                                <div className="columns">
                                    <div className="column">
                                        <figure className="image is-2by1">
                                            <img src={item.thumbnail} alt="Blog thumbnail" />
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
        const { blogs } = this.state;
        return (
            <section className="hero is-light is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        {blogs.map(this.getBlogItem)}
                    </div>
                </div>
            </section>
        )
    }
}