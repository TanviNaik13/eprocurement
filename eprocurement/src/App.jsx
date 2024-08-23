import { Route,BrowserRouter as  Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ContactUs from "./pages/ContactUs/ContactUs";
import TenderByLocation from "./pages/Tenders/Location";
import TenderByOrganisation from "./pages/Tenders/Organisation";
import TenderByClassification from "./pages/Tenders/Classification";
import TenderById from "./pages/Tenders/Archive";
import TenderByStatus from "./pages/Tenders/Status";
import CancelledRetenderedTenders from "./pages/Tenders/Cancelled";
import Download from "./pages/Tenders/Downloads/Download";
import Name from "./pages/Tenders/Name";
import TenderForm from "./pages/Tenders/TenderForm";
import Approve from "./pages/Tenders/Approve";
import Announcements from "./pages/Tenders/Announcements";
import Awards from "./pages/Tenders/Awards";
import Sitec from "./pages/Tenders/SiteC/Sitec";

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
          <Route path="/tenders/location" element={<TenderByLocation/>}/>
          <Route path="/tenders/organisation" element={<TenderByOrganisation/>}/>
          <Route path="/tenders/classification" element={<TenderByClassification/>}/>
          <Route path="/tenders/archive" element={<TenderById/>}/>
          <Route path="/tenders/status" element={<TenderByStatus/>}/>
          <Route path="/tenders/current" element={<CancelledRetenderedTenders/>}/>
          <Route path="/tenders/downloads" element={<Download/>}/>
          <Route path="/tenders/name" element={<Name/>}/>
          <Route path="/tenders/create" element={<TenderForm/>}/>
          <Route path="/tenders/approve" element={<Approve/>}/>
          <Route path="/tenders/announcements" element={<Announcements/>}/>
          <Route path="/tenders/awards" element={<Awards/>}/>
          <Route path="/tenders/site" element={<Sitec/>}/>

        </Routes>
        
      </Router>
    </>
  );
};

export default App;
