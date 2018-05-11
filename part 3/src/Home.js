import React,{ Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <section className="hero is-info is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">
                            Ninja Developer
                        </h1>
                        <h2 className="subtitle is-3">
                            Full Stack Javascript Developer
                        </h2>
                        <p className="subtitle is-4">
                            long text here
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}