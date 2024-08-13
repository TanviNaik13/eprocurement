import { Route,BrowserRouter as  Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact_us" element={<ContactUs/>}/>
        </Routes>
        
      </Router>
    </>
  );
};

export default App;
