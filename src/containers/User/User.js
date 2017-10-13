import React, {Component, PropTypes} from 'react';
import {Table} from 'antd';
import {Layout} from 'components'; 
import {connect} from 'react-redux';
import * as userActions from 'actions/userActions';

class User extends Component{
  static propTypes = {
    history: PropTypes.object,
    getUsers: PropTypes.func,
    status: PropTypes.string,
    users: PropTypes.array,
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUsers();
  }

  render(){
    console.info(22222, this.props.users);
    const columns = [{
      title: 'nickname',
      dataIndex: 'nickname',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'email',
      dataIndex: 'email',
    }, {
      title: 'phone',
      dataIndex: 'phone',
    }];
    return(
      <Layout {...this.props}>
        <Table rowkey='id' columns={columns} dataSource={this.props.users}/>
      </Layout>
    );
  }
}

const mapStateTopProps = (state) => {
  console.info(33333, state.user);
  return {
    status: state.user.status,
    users: state.user.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(userActions.fetchUser());
    }
  }
};


export default connect(mapStateTopProps, mapDispatchToProps)(User);