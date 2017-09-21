import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }



  componentDidMount() {
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
