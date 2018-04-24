import React, { Component } from 'react';

export default class Home extends Component {

    

    render() {

        let style= {
             'i' : { 'fontSize': '80px'}
        }

        return (
            <section className="hero is-link is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column">
                                <i style={style.i} className="devicon-html5-plain colored"></i>
                            </div>
                            <div className="column">
                                <i style={style.i} className="devicon-css3-plain"></i>
                            </div>
                            <div className="column">
                                <i  style={style.i} className="devicon-javascript-plain colored"></i>
                            </div>
                            <div className="column">
                                <i  style={style.i} className="devicon-bootstrap-plain colored"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}