import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Modal, Row, Col} from 'antd';

export default class UserDetail extends Component{
  static propTypes = {
    visible: PropTypes.bool,
    record: PropTypes.object,
    onCancel: PropTypes.func,
  }

  constructor(){
    super(...arguments);
  }

  renderDetail = () => {
    const {record} = this.props;
    return(
      <div>
        <Row>
          <Col span={6}>
            nickname
          </Col>
          <Col span={14}>
            {record.nickname}
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            phone
          </Col>
          <Col span={14}>
            {record.phone}
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            email
          </Col>
          <Col span={14}>
            {record.email}
          </Col>
        </Row>
      </div>
    ); 
  }


  render(){
    const {visible, onCancel, record} = this.props;

    return(
      <Modal title='UserDetail' visible={visible} onCancel={onCancel}>
        {record && this.renderDetail()}
      </Modal>
    );
  }
}