import React, { Component } from 'react';
import marked from 'marked';

import TextStore from '../stores/TextStore';

class Render extends Component {
  constructor() {
    super();
    const srcText = TextStore.getText();
    this.state = {
      text: srcText ? marked(srcText) : ''
    };
  }

  updateState = _ => {
    const srcText = TextStore.getText();
    this.setState({
      text: srcText ? marked(srcText) : ''
    });
  }

  componentDidMount() {
    TextStore.on('change', this.updateState);
  }

  componentWillUnmount() {
    TextStore.removeListener('change', this.updateState);
  }
  
  render() {
    return (
      <div className="render" dangerouslySetInnerHTML={{__html: this.state.text}}></div>
    )
  }
}

export default Render;