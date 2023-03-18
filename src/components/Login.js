import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button';
 import { UserAuth } from './AuthContext';
 import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { Check } from '@material-ui/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login({open,close}) {
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    if(user!=null){
      navigate('/dashboard')

    }
  },[user])
  return (
    <div>
              <div  footer={null} className="h-screen d-flex justify-content-center align-items-center mt-5" width={600} title="Login" >

<div className="card w-500  p-5">
    <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
    >
                <GoogleButton onClick={handleGoogleSignIn}/>

        <Form.Item
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
            ]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item  valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
                Forgot password
            </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>

        </Form.Item>
    </Form>
</div>
</div>

    </div>
  )
}