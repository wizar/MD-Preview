import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import TextInput from './TextInput';
import Render from './Render';
import * as SettingsActions from '../actions/SettingsActions';

class Content extends Component {

    notifyResize(size) {
        SettingsActions.resize(size);
    }

    render() {
        return (
            <div className="content">
                <SplitPane
                    defaultSize="50%"
                    minSize={200}
                    split="vertical"
                    onChange={this.notifyResize.bind(this)}>
                    <TextInput />
                    <Render />
                </SplitPane>
            </div>
        );
    }
}

export default Content;