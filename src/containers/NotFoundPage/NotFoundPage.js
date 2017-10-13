import React, {Component, PropTypes} from 'react';
import {Layout} from 'components'; 

export default class NotFoundPage extends Component{
  static propTypes = {
    history: PropTypes.object,
  };

  render(){
    return(
      <div>
        <div>
          404 Not Found
        </div>
      </div>
    );
  }
}