import React,{Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Table} from 'antd';

export default class UserList extends Component{
  static propTypes = {
    records: PropTypes.array,
    pagination: PropTypes.object,
    listStatus: PropTypes.string,
  }

  constructor(){
    super(...arguments);
  }

  handlePageChange = (page, perPage) => {
    this.props.onPageChange && this.props.onPageChange(page, perPage);
  }

  handleShowSizeChange = (page, perPage) => {
    this.props.onShowSizeChange && this.props.onShowSizeChange(page, perPage);
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
    console.info(2222, pagination);
    const {records, pagination, listStatus} = this.props;
    const { per_page, total } = pagination;

    let pageSizeOptions = [10, 20, 30, 40, 50, 80, 100, 500, 1000];
    pageSizeOptions.push(per_page);
    pageSizeOptions = _.uniq(pageSizeOptions, true);
    pageSizeOptions = pageSizeOptions.map(item => `${item}`);

    return(
      <Table rowKey='id' columns={columns} dataSource={records} 
      loading={listStatus == 'loading'}
      pagination={{ onChange: this.handlePageChange,
        onShowSizeChange: this.handleShowSizeChange,
        pageSizeOptions: pageSizeOptions,
        pageSize: per_page,
        total: total,
      }}/>
    );
  }
}