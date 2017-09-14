import React, {Component} from 'react';
import {Layout} from 'components'; 

class Home extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.info('this is home');
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