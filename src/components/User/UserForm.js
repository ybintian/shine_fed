import React, {Component} from 'react';
import {Modal, Form, Input, Radio} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const createForm = Form.create;
@createForm({
  mapPropsToFields(props) {
    const {record, action} = props;
    let initValues = {};
    if (record && action == 'edit') {
      Object.entries(record).forEach(
        (item) => {
          if ([
            // date cols
          ].indexOf(item[0]) > -1) {

            initValues[item[0]] = {value: item[1] && moment(item[1])};
          } else {
            initValues[item[0]] = {value: item[1]};
          }
        }
      );
    }
    return initValues;
  }
})
export default class UserForm extends Component{
  static propTypes = {
    action: PropTypes.string,
    visible: PropTypes.bool,
    record: PropTypes.object,
    onCreate: PropTypes.func,
    handleCancel: PropTypes.func,
  }

  constructor(){
    super(...arguments);
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      this.props.onCreate({user: values});
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const {visible, onCancel} = this.props;
    return(
      <Modal title="用户表单" visible={visible} onOk={this.handleOk} onCancel={onCancel}>
        <Form>
          <FormItem
          {...formItemLayout}
            label="昵称"
          >
          {getFieldDecorator('nickname', {})(
            <Input />
          )}
          </FormItem>

          <FormItem
          {...formItemLayout}
            label="邮箱"
          >
          {getFieldDecorator('email', {})(
            <Input />
          )}
          </FormItem>

          <FormItem
          {...formItemLayout}
            label="联系方式"
          >
          {getFieldDecorator('phone', {})(
            <Input />
          )}
          </FormItem>

          <FormItem
          {...formItemLayout}
            label="密码"
          >
          {getFieldDecorator('password', {})(
            <Input />
          )}
          </FormItem>

          <FormItem
          {...formItemLayout}
            label="性别"
          >
          {getFieldDecorator('gender', {})(
            <RadioGroup >
              <Radio value="male">女</Radio>
              <Radio value="female">男</Radio>
            </RadioGroup>
          )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}