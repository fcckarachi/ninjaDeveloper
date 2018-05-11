import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            comments: ""
        };
    }

    form_change(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    form_Submit(e) {
        e.preventDefault();

        const { name, email, comments } = this.state;
        let obj = { name, email, comments }, promise;

        axios.post("https://formcarry.com/s/H1fKY1Q6z", obj)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        const { blogs, name, email, comments } = this.state;
        return (
            <section className="hero  is-success is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1 has-text-centered">Lets get in touch!</h1>
                        <br /><br />
                        <form onChange={this.form_change.bind(this)} onSubmit={this.form_Submit.bind(this)}>
                            <div className="columns">

                                <div className="column">
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input name="name" className="input is-large" type="text" placeholder="Your Name"
                                                value={name} required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input name="email" value={email} className="input is-large"
                                                type="email" placeholder="Your Email" required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="field">
                                <div className="control">
                                    <textarea name="comments" value={comments} className="textarea is-large"
                                        placeholder="What's Up?" required></textarea>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" className="button is-link is-large">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}