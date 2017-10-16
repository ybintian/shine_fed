import React, {Component, PropTypes} from 'react';
import {Table, Button} from 'antd';
import {Layout} from 'components'; 
import {connect} from 'react-redux';
import * as userActions from 'actions/userActions';

import {UserForm} from 'components';

class User extends Component{
  static propTypes = {
    history: PropTypes.object,
    getUsers: PropTypes.func,
    onCreate: PropTypes.func,
    status: PropTypes.string,
    users: PropTypes.array,
    message: PropTypes.object,
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handleSave = (record) => {
    let res = this.props.onCreate(record);
    console.info(777777, res);
  }

  render(){
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

    const {onCreate} = this.props;
    return(
      <Layout {...this.props}>
        <div>
          <div style={{height: '50px', padding: '5px'}}>
            <Button style={{float: 'right'}}>
               添加
            </Button>
          </div>
          <UserForm onCreate={this.handleSave}/>

          <Table rowKey='id' columns={columns} dataSource={this.props.users} />
        </div>
      </Layout>
    );
  }
}

const mapStateTopProps = (state) => {
  console.info(33333, state.user);
  return {
    status: state.user.status,
    users: state.user.users,
    message: state.user.message,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(userActions.fetchUser());
    },
    onCreate: (record) => {
      console.info(2222, userActions.createUser(record))
      dispatch(userActions.createUser(record));
    }
  }
};


export default connect(mapStateTopProps, mapDispatchToProps)(User);