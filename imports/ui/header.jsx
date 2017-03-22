import React, {Component} from 'react';


class Header extends Component{

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#Home">GrantPage</a>
                    </div>
                    <div id="items" className="navbar-collapse navbar-right collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                    <a href="home">Home</a>
                            </li>
                            <li className="dropdown">
                                <a href="skills">Skills</a>
                            </li>
                            <li className="dropdown">
                                <a href="experience">Experience</a>
                            </li>
                            <li className="dropdown">
                                <a href="hobbies">Hobbies</a>
                            </li>
                            <li><a href="socialMedia">Social Media</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;