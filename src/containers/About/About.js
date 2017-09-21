import React, {Component, PropTypes} from 'react';
import {Layout} from 'components'; 

export default class About extends Component{
  static propTypes = {
    history: PropTypes.object,
  };

  render(){
    return(
      <Layout {...this.props}>
        <div>
          This is About
        </div>
      </Layout>
    );
  }
}