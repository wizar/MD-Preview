import React, { Component } from 'react';

import LayoutSwitch from './LayoutSwitch';

class Menu extends Component {    
    render() {
        return (
            <div className="menu">
                <LayoutSwitch />
            </div>
        );
    }
}

export default Menu;