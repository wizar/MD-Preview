import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import TextInput from './TextInput';
import Render from './Render';
import * as TextActions from '../actions/TextActions';

class Content extends Component {

    notifyResize(size) {
        TextActions.updateWidth(size);
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