import { useState } from 'react';
import { Form, Input, Button, Typography, Divider, message } from 'antd';
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../Components/firebase';
import { doc, setDoc } from 'firebase/firestore';
import './LoginPage.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const googlelogin = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        if (user) {
          await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            firstName: user.displayName ? user.displayName.split(' ')[0] : '',
            lastName: user.displayName ? user.displayName.split(' ').slice(1).join(' ') : '',
            photo: user.photoURL,
          });

          message.success('Login Successful', 5);

          setTimeout(() => {
            window.location.href = '/profile';
          }, 1000);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        message.error('Login Failed', 5);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success('Login Successful', 5);
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (error) {
      message.error(`Error: ${error.message}`, 4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginbg">
      <Form className="loginform">
        <Typography.Title>LOGIN</Typography.Title>
        <Form.Item label="Email" name="myEmail">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </Form.Item>
        <Form.Item label="Password" name="myPassword">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
        </Form.Item>
        <Button type="primary" onClick={handleSubmit} block loading={loading}>
          LOGIN
        </Button>
        <Divider style={{ borderColor: 'black' }}>Login with</Divider>
        <div className="social">
          <GoogleOutlined onClick={googlelogin} />
          <FacebookOutlined />
          <TwitterOutlined />
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
