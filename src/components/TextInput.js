import React, { Component } from 'react';
import AceEditor from 'react-ace';

import * as TextActions from '../actions/TextActions';
import TextStore from '../stores/TextStore';
import SettingsStore from '../stores/SettingsStore';

import 'brace/mode/markdown';
import 'brace/theme/chrome';

class TextInput extends Component {
  constructor() {
    super();
    this.state = {
      text: TextStore.getText(),
      editor: null,
      size: null
    }
  }

  componentWillUnmount() {
    SettingsStore.removeListener('change', this.resizeEditor);
  }
  
  componentDidMount() {
    SettingsStore.on('change', this.resizeEditor);
  }
  
  resizeEditor = () => {
    const size = SettingsStore.getSize();
    if (size !== this.state.size) {
      this.setState({ size });
      this.state.editor.resize(true);
    }
  }

  onChange(text) {
    this.setState({ text });
    TextActions.updateText(text);
  }

  saveEditor(editor) {
    this.setState({ editor });
  }

  render() {
    return (<AceEditor
      className="inputText"
      mode="markdown"
      fontSize={16}
      width="100%"
      height="100%"
      theme="chrome"
      wrapEnabled={true}
      showPrintMargin={false}
      value={this.state.text}
      onChange={this.onChange.bind(this)}
      onLoad={this.saveEditor.bind(this)}
      name="UNIQUE_ID_OF_DIV"
      setOptions={ this.state.wrap }
    />)
  }
}

export default TextInput;