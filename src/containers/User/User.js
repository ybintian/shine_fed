import React, {Component, PropTypes} from 'react';
import {Table, Button} from 'antd';
import {Layout} from 'components'; 
import {connect} from 'react-redux';
import * as userActions from 'actions/userActions';
import {UserForm, UserList} from 'components';

import './user.scss';


class User extends Component{
  static propTypes = {
    history: PropTypes.object,
    getUsers: PropTypes.func,
    onCreate: PropTypes.func,
    listStatus: PropTypes.string,
    records: PropTypes.array,
    message: PropTypes.object,
    pagination: PropTypes.object,
  }

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
    };
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handlePageChange = (page, perPage) => {
    return this.props.getUsers({page: page, per_page: perPage});
  }

  handleShowSizeChange = (page, perPage) => {
    console.info(2222, page, perPage);
    return this.props.getUsers({page: page, per_page: perPage});
  }

  handleNew = () => {
    this.setState({
      formVisible: true,
    })
  }

  handleCancel = () => {
    this.setState({
      formVisible: false,
    })
  }

  handleSave = (record) => {
    let res = this.props.onCreate(record);
  }

  render(){
    const {onCreate, records, pagination, listStatus} = this.props;
    const {formVisible} = this.state;
    return(
      <Layout {...this.props}>
        <div>
          <div style={{height: '50px', padding: '5px'}}>
            <Button style={{float: 'right'}} onClick={this.handleNew}>
               添加
            </Button>
          </div>
          <UserForm visible={formVisible} onCreate={this.handleSave} onCancel={this.handleCancel}/>
          <div className='user-title-warper'>
          <h1>用户信息</h1>
          </div>
          <UserList records={records} pagination={pagination} onPageChange={this.handlePageChange}
              onShowSizeChange={this.handleShowSizeChange} listStatus={listStatus}/>
        </div>
      </Layout>
    );
  }
}

const mapStateTopProps = (state) => {
  console.info(state.users);
  return {
    listStatus: state.users.listStatus,
    records: state.users.records,
    pagination: state.users.pagination || {},
    message: state.users.message,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (params) => {
      dispatch(userActions.fetchUser(params));
    },
    onCreate: (record) => {
      dispatch(userActions.createUser(record));
    }
  }
};


export default connect(mapStateTopProps, mapDispatchToProps)(User);