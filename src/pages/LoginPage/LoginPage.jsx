import  { useState } from 'react';
import { Form, Input, Button, Typography, Divider,message } from 'antd';
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Components/firebase';
import './LoginPage.css'

const LoginForm = () => {
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    try {
      await signInWithEmailAndPassword(auth,email,password);
      message.success("Login Successfull",5)
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      message.error(`error:${error.message}`,4)
    }
    
    
  };

  return (
    <div className="loginbg">
      
    <Form className="loginform">
      <Typography.Title>LOGIN</Typography.Title>
      <Form.Item label="Email" name="myEmail">
        <Input
          placeholder="Enter your email"
          value={email} // Bind the input value to the state variable
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
      </Form.Item>
      <Form.Item label="Password" name="myPassword">
        <Input
          type="password" // Use type="password" for password input
          placeholder="password"
          value={password} // Bind the input value to the state variable
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
      </Form.Item>
      <Button type="primary" onClick={handleSubmit} block>
        LOGIN
      </Button>
      <Divider style={{ borderColor: 'black' }}>Login with</Divider>
      <div className="social">
        <GoogleOutlined />
        <FacebookOutlined />
        <TwitterOutlined />
      </div>
    </Form>
          </div>
  );
};

export default LoginForm;
