import React,{Component, PropTypes} from 'react';
import {Form, Button, Checkbox, Input, Icon, Row, Col} from 'antd';
import './Login.scss';

const FormItem = Form.Item;
const createForm = Form.create;


export class Login extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { getFieldDecorator, getFieldError, isFieldValidating } = this.props.form;
    return(
      <div className='login-warpper'>
        <div className='login-warp'>
          <div className='login-layout'>
            <div className='logo-warp'>
            </div>
            
            <Form style={{margin: '0px auto', width: 300}}>
              <FormItem
                hasFeedback
                label='账号：'
                labelCol={{span: 6}}
                wrapperCol={{span: 14}}
                help={(isFieldValidating('username')) ? 'validating...' : (getFieldError('username') || []).join(', ')}
              >
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入你的用户名或邮箱' },
                    { validator: this.handlePhoneValidate },
                  ],
                })(
                  <Input placeholder="请输入你的用户名或邮箱" />
                )}
              </FormItem>
              <FormItem 
                label='密码：'
                labelCol={{span: 6}}
                wrapperCol={{span: 14}}
                hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, whitespace: true, min: 6, message: '密码长度至少为6位' },
                    { validator: this.checkPass },
                  ],
                })(
                  <Input type="password" placeholder="请输入密码"
                    onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
                )}
              </FormItem>
              <div className='login-btn-warp'>
                <Button className='login-btn' type="primary" htmlType="submit" onClick={this.handleSubmit}>
                  登录
                </Button>
              </div>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox style={{margin: '0px auto'}}>记住我</Checkbox>
                )}

              </FormItem>
                
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;