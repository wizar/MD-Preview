import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import TextInput from './TextInput';
import Render from './Render';
import SettingsStore from '../stores/SettingsStore';
import * as SettingsActions from '../actions/SettingsActions';

class Content extends Component {

    constructor() {
        super();
        this.state = { layout: SettingsStore.getLayout() };
    }

    notifyResize(size) {
        SettingsActions.resize(size);
    }

    updateState = () => {
        this.setState({ layout: SettingsStore.getLayout() });
    }

    componentDidMount() {
        SettingsStore.on('change', this.updateState);
    }

    componentWillUnmount() {
        SettingsStore.removeListener('change', this.updateState);
    }

    render() {
        return (
            <div className="content">
                <SplitPane
                    defaultSize="50%"
                    minSize={200}
                    split={this.state.layout}
                    onChange={this.notifyResize.bind(this)}>
                    <TextInput />
                    <Render />
                </SplitPane>
            </div>
        );
    }
}

export default Content;