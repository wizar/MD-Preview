import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import SettingsStore from '../stores/SettingsStore';
import * as SettingsActions from '../actions/SettingsActions';

class LayoutSwitch extends Component {
    constructor() {
        super();
        this.state = {
            rotate: 270
        }
    }

    updateState = () => {
        const currentLayout = SettingsStore.getLayout();
        let rotate = 0;
        if (currentLayout === 'vertical') {
            rotate = 270;
        }
        this.setState({ rotate });
    }

    componentDidMount() {
        SettingsStore.on('change', this.updateState);
    }

    componentWillUnmount() {
        SettingsStore.removeListener('change', this.updateState);
    }

    onClick() {
        SettingsActions.switchLayout();
    }

    render() {
        return (
            <FontAwesome 
                name="columns"
                size="2x"
                rotate={'' + this.state.rotate}
                onClick={this.onClick.bind(this)}
            />
        );
    }
}

export default LayoutSwitch;