import React, { Component, PropTypes } from 'react';
import HttpClient from 'utils/HttpClient';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }



  componentDidMount(){
    this.handleCheck();
  }

  handleCheck = () => {
    let JsonWebToken = localStorage.getItem('JsonWebToken');
    
    if (JsonWebToken) {
      HttpClient.post('/auth/check', {access_token: JsonWebToken}).then(res => {
        if (!res.success) {
          this.props.history.push('/login')
        }
      })
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
