import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {

    constructor() {
        super();

        this.name = React.createRef();
        this.email = React.createRef();
        this.comments = React.createRef();

        this.state ={
            message : ""
        };
    }

    form_Submit(e) {
        e.preventDefault();

        let name = this.name.current.value;
        let email = this.email.current.value;
        let comments = this.comments.current.value;
        let obj = { name: name, email: email, comments: comments };
        let promise;

        promise = axios.post("https://formcarry.com/s/H1fKY1Q6z", obj);

        promise.then(function (res) { 
            this.setState({
                message : "You response has been submitted successfully."
            });
        }.bind(this)
        )
        .catch(function (err) { console.log(err) });
    }

    render() {
      let message =  this.state.message;
        return (
            <section className="hero  is-success is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1 has-text-centered">Lets get in touch!</h1>
                        <br /><br />
                        <h4>{message}</h4>
                        <form onSubmit={this.form_Submit.bind(this)}>
                            <div className="columns">

                                <div className="column">
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input name="name" ref={this.name} className="input is-large" type="text" placeholder="Your Name"
                                                 required />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input name="email" ref={this.email} className="input is-large"
                                                type="email" placeholder="Your Email" required />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="field">
                                <div className="control">
                                    <textarea name="comments" ref={this.comments} className="textarea is-large"
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