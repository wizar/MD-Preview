import React, { Component } from 'react';

import Menu from './Menu';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <span className="title">Markdown preview demo</span>
                <span className="buttons">
                <Menu />
                </span>
            </div>
        );
    }
}

export default Header;