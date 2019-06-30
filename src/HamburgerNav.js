import React, { Component } from 'react'

class HamburgerNav extends Component {


    render() {
        return (
            <React.Fragment>

                <div className="nav">
                    <ul className="geek" role="navigation">
                        <li className="geek-logo">
                            <a href="/">
                                <img src="./glasses.png" className="logo" alt="logo" />
                            </a>
                        </li>
                        <li className="menu-wrap">
                            <input type="checkbox" className="toggler" />
                            <div className="cool">
                                <div />
                            </div>
                            <div className="menu">
                                <div>
                                    <div>
                                            <ul>
                                                <li>
                                                    <a href="/">HOME</a>
                                                </li>
                                                <li>
                                                    <a href="/portfolio">PORTFOLIO</a>
                                                </li>
                                                <li>
                                                    <a href="/blogs">BLOGS</a>
                                                </li>
                                                <li>
                                                    <a href="/contact">CONTACT</a>
                                                </li>
                                            </ul> 
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}



export default HamburgerNav;