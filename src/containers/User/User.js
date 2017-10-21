import React, {Component, PropTypes} from 'react';
import {Table, Button} from 'antd';
import {Layout} from 'components'; 
import {connect} from 'react-redux';
import * as userActions from 'actions/userActions';
import {UserForm, UserList, UserDetail} from 'components';

import './user.scss';


class User extends Component{
  static propTypes = {
    history: PropTypes.object,
    getUsers: PropTypes.func,
    getUser: PropTypes.func,
    onCreate: PropTypes.func,
    listStatus: PropTypes.string,
    record: PropTypes.object,
    records: PropTypes.object,
    message: PropTypes.object,
    pagination: PropTypes.object,
  }

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      detailVisible: false,
    };
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handlePageChange = (page, perPage) => {
    return this.props.getUsers({page: page, per_page: perPage});
  }

  handleShowSizeChange = (page, perPage) => {
    return this.props.getUsers({page: page, per_page: perPage});
  }

  handleRecordAction = (actionName, record) => {
    switch(actionName){
      case 'detail':
      this.props.getUser({user_id: record.id});
      this.setState({
        detailVisible: true,
      });
      break;
      case 'edit':
      this.props.getUser({user_id: record.id});
      this.setState({
        formAction: 'edit',
      }, () => {
        this.setState({
          formVisible: true,
        });
      });
      break;
      case 'destroy':
      break;
    }
  }

  handleNew = () => {
    this.setState({      
      formAction: 'new',
    },() => {
      this.setState({
        formVisible: true,
      })
    });
  }

  handleFormCancel = () => {
    this.setState({
      formVisible: false,
    });
  }

  handleDetailCancel = () => {
    this.setState({
      detailVisible: false,
    });
  }

  handleSave = (record) => {
    let res = this.props.onCreate(record);
  }

  render(){
    const {onCreate, records, record, pagination, listStatus} = this.props;
    const {formVisible, detailVisible, formAction} = this.state;
    return(
      <Layout {...this.props}>
        <div>
          <div style={{height: '50px', padding: '5px'}}>
            <Button style={{float: 'right'}} onClick={this.handleNew}>
               添加
            </Button>
          </div>
          <UserForm visible={formVisible} record={record} onCreate={this.handleSave} onCancel={this.handleFormCancel} action={formAction}/>
          <UserDetail visible={detailVisible} record={record} onCancel={this.handleDetailCancel}/>
          <div className='user-title-warper'>
          <h1>用户信息</h1>
          </div>
          <UserList records={records} 
                    pagination={pagination} 
                    onPageChange={this.handlePageChange}
                    onShowSizeChange={this.handleShowSizeChange} 
                    onRecordAction={this.handleRecordAction}
                    listStatus={listStatus}/>
        </div>
      </Layout>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    listStatus: state.users.getIn(['listStatus']),
    records: state.users.getIn(['records']),
    record: state.users.getIn(['record']),
    pagination: state.users.getIn(['pagination']) || {},
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (params) => {
      dispatch(userActions.getUsers(params));
    },
    getUser: (params) => {
      dispatch(userActions.getUser(params));
    },
    onCreate: (record) => {
      dispatch(userActions.createUser(record));
    }
  }
};


export default connect(mapStateTopProps, mapDispatchToProps)(User);