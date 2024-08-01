import { useState } from 'react';
import { Form, Input, Button, Typography, Divider ,message} from 'antd';
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import '../LoginPage/LoginPage.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../../Components/firebase';
import {doc,setDoc} from "firebase/firestore";


const RegisterPage = () => {
  // State variables to store user inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
        await createUserWithEmailAndPassword(auth,email,password)
        const user = auth.currentUser;
        if(user){
            await setDoc(doc(db,"Users",user.uid),{
                email: email,
                firstName: firstName,
                lastName: lastName
            })
        }
        message.success("Registered Successfully",4);
        setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        
    } catch (error) {
        message.error(`error:${error.message}`,4);
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    
  };

  return (
    <div className="loginbg">  
    <Form className="loginform" >
      <Typography.Title>REGISTER</Typography.Title>
      <Form.Item label="First Name" name="firstName">
        <Input
          placeholder="Enter your first name"
          value={firstName} // Bind the input value to the state variable
          onChange={(e) => setFirstName(e.target.value)} // Update state on change
          />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input
          placeholder="Enter your last name"
          value={lastName} // Bind the input value to the state variable
          onChange={(e) => setLastName(e.target.value)} // Update state on change
          />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input
          placeholder="Enter your email"
          value={email} // Bind the input value to the state variable
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input
          type="password" // Use type="password" for password input
          placeholder="Enter your password"
          value={password} // Bind the input value to the state variable
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
      </Form.Item>
      <Button type="primary" block onClick={handleSubmit}>
        REGISTER
      </Button>
      <Divider style={{ borderColor: 'black' }}>Register with</Divider>
      <div className="social">
        <GoogleOutlined />
        <FacebookOutlined />
        <TwitterOutlined />
      </div>
    </Form>
          </div>
  );
};

export default RegisterPage;
