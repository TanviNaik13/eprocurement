import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Divider, message } from "antd";
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../Components/firebase";
import { doc, setDoc } from "firebase/firestore";
import "./LoginPage.css";
import axios from "axios";
import { isAuth, setToken } from "../../authentication";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const lockoutDuration = 3*60 * 1000; // 3 minutes in milliseconds
  const maxAttempts = 3;

  useEffect(() => {
    const checkLockout = () => {
      const lockoutTime = localStorage.getItem("lockoutTime");
      const failedAttempts = parseInt(localStorage.getItem("failedAttempts"), 10) || 0;

      if (failedAttempts >= maxAttempts) {
        if (lockoutTime) {
          const currentTime = new Date().getTime();
          const timeRemaining = lockoutTime - currentTime;

          if (timeRemaining > 0) {
            setIsLocked(true);

            setTimeout(() => {
              setIsLocked(false);
              localStorage.removeItem("lockoutTime");
              localStorage.removeItem("failedAttempts");
              message.success("Lockout period is over. You can try logging in now.", 4);
            }, timeRemaining);
          } else {
            setIsLocked(false);
            localStorage.removeItem("lockoutTime");
          }
        }
      }
    };

    checkLockout();
  }, [isLocked]);

  const googlelogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        if (user) {
          await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            firstName: user.displayName ? user.displayName.split(" ")[0] : "",
            lastName: user.displayName
              ? user.displayName.split(" ").slice(1).join(" ")
              : "",
          });

          const userData = {
            email: user.email,
            firstName: user.displayName ? user.displayName.split(" ")[0] : "",
            lastName: user.displayName
              ? user.displayName.split(" ").slice(1).join(" ")
              : "",
          };

          const res = await axios.post("http://localhost:5050/users/googlesignin", userData);
          setToken(res.data.token);
          localStorage.setItem("isNicUser", res.data.isNicUser);
          localStorage.setItem("role", res.data.userRole);
          localStorage.removeItem("failedAttempts");
          localStorage.removeItem("lockoutTime");
          message.success("Login Successful", 5);

          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((error) => {
        message.error("Login Failed", 5);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginToDb = async () => {
    try {
      const res = await axios.post("http://localhost:5050/users/signin", { email, password });
      message.success(res.data.message);
      setToken(res.data.token);
      localStorage.setItem("isNicUser", res.data.isNicUser);
      localStorage.setItem("role", res.data.userRole);
    } catch (error) {
      message.error(`error:${error.response ? error.response.data.error : error.message}`, 4);
      handleFailedAttempt();
    }
  };

  const handleFailedAttempt = () => {
    let failedAttempts = parseInt(localStorage.getItem("failedAttempts"), 10) || 0;
    failedAttempts += 1;
    localStorage.setItem("failedAttempts", failedAttempts);
    message.error(`Invalid Credentials! Attempts Remaining: ${maxAttempts-failedAttempts}`)
    if (failedAttempts >= maxAttempts) {
      const lockoutTime = new Date().getTime() + lockoutDuration;
      localStorage.setItem("lockoutTime", lockoutTime);
      setIsLocked(true);
      message.error("Too many failed attempts. You are locked out for 3 minutes.", 5);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLocked) {
      message.warning("You are currently locked out. Please try again later.", 5);
      return;
    }
    await loginToDb();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success('Login Successful', 5);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      message.error(`Error: ${error.message}`, 4);
     // handleFailedAttempt();
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (val) => navigate(val);

  return (
    <Loading loading={loading}>
      <div className="loginbg">
        <Form className="loginform">
          <h2 className="heading">LOGIN</h2>
          <br />
          <Form.Item label="Email" name="myEmail">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              onPressEnter={handleSubmit}
              disabled={isLocked}
            />
          </Form.Item>
          <Form.Item label="Password" name="myPassword">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              onPressEnter={handleSubmit}
              disabled={isLocked}
            />
          </Form.Item>
          <Button type="primary" onClick={handleSubmit} block loading={loading} disabled={isLocked}>
            LOGIN
          </Button>
          <div className="newuser">
            New User?{" "}
            <button
              onClick={() => {
                handleClick("/register");
              }}
              disabled={isLocked}
            >
              register here
            </button>
          </div>
          <Divider style={{ borderColor: "black" }}>Login with</Divider>
          <div className="social">
            <GoogleOutlined onClick={googlelogin} />
            <FacebookOutlined />
            <TwitterOutlined />
          </div>
        </Form>
      </div>
    </Loading>
  );
};

export default LoginForm;
