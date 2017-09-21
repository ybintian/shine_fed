import React, {Component, PropTypes} from 'react';
import {Layout} from 'components'; 

class Home extends Component{
  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return(
      <Layout {...this.props}>
        <div>
          aaaaaa
        </div>
      </Layout>
    );
  }
}

export default Home;