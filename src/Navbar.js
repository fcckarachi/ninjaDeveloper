import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    constructor() {
        super();

        this.state = {
            navbarExpand: false
        }
    }

    onClick(e) {
        let navbarExpand = !this.state.navbarExpand;
        this.setState({ navbarExpand: navbarExpand });
    }

    render() {
        let navbarStyle = {};
        let navbarExpand = this.state.navbarExpand;
        if (navbarExpand) {
            navbarStyle['display'] = 'block';
        }

        return (
            <nav className="navbar is-fixed-top" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>

                    <a role="button" onClick={this.onClick.bind(this)} className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu" style={navbarStyle}>
                    <div className="navbar-end">
                        <Link to="/home" className="navbar-item">Home </Link>
                        <Link to="/blog" className="navbar-item">Blog</Link>
                        <Link to="/about" className="navbar-item">About</Link>
                        <Link to="/skills" className="navbar-item">Skills</Link>
                        <Link to="/projects" className="navbar-item">Projects</Link>
                        <Link to="/contact" className="navbar-item">Contact</Link>
                        {/*<Link to="/contact" className="navbar-item">Contact </Link>*/}

                        {/*<a className="navbar-item" href="#">
                            Home
                        </a>
                        <a className="navbar-item" href="#">
                            About
                        </a>
                        <a className="navbar-item" href="#">
                            Skills
                        </a>
                        <a className="navbar-item" href="#">
                            Project
                        </a>
                        <a className="navbar-item" href="#">
                            Contact
                        </a>*/}
                    </div>
                </div>
            </nav>
        )
    }
}