import React, { Component } from 'react';
import styles from './style/loginForm.module.scss'
import { Form, Icon, Button } from 'antd';

class LoginForm extends Component {

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submit(values)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <div className={styles.form_item}>
              <Icon type="user" style={{ color: 'rgba(0,0,0,.25)',fontSize:'20px'}} />
              <input className={styles.form_input} type="text" placeholder="用户名"/>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <div className={styles.form_item}>
              <Icon type="user" style={{ color: 'rgba(0,0,0,.25)',fontSize:'20px'}} />
              <input className={styles.form_input} type="password" placeholder="密码"/>
            </div>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}>
            登 &nbsp; 录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const NormalLoginForm = Form.create()(LoginForm);

export default NormalLoginForm;