import React, { Component } from 'react';

import Menu from './Menu';

class Header extends Component {
    render() {
        return (
            <div className="header boundary">
                <span className="title">Markdown preview demo</span>
                <span className="buttons">
                <Menu />
                </span>
            </div>
        );
    }
}

export default Header;