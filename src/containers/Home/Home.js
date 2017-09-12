import React, {Component} from 'react';

class Home extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.info('this is home');
  }

  render(){
    return(
      <button>
        Hello World
      </button>
    );
  }
}

export default Home;