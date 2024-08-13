import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const logo = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2FLOGO2.png?alt=media&token=0ffa882a-a355-4bc8-87d7-fbb97dda33fc";
const assembly = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Fgoa%20assembly.jpg?alt=media&token=e6b739b5-2baa-4795-abca-19a2c7fb7e6f";
const govgoa = "https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Fgoalogo.png?alt=media&token=66ad775b-ae8d-4647-8880-13e931caf8d6";
import home from "../../assets/home.svg";
import contact from "../../assets/contact.svg";
import map from "../../assets/map.svg";


const date = new Date();
const day = date.getDate();
const year = date.getFullYear();

const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const monthString = monthNames[date.getMonth()];

const Navbar = () => {
  const [currt, setcurrt] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrt(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let hour = currt.getHours();
  let min = currt.getMinutes();

  if (hour > 12) var hr = hour - 12;
  else hr = hour;

  const formattedDate = `${day}  ${monthString} ${year}`;
  var time;
  if (hour >= 12) {
    time = `${hr<10 ? "0" + hr : hr} : ${min < 10 ? "0" + min : min} PM`;
  } else {
    time = `${hr<10 ? "0" + hr : hr} : ${min < 10 ? "0" + min : min} AM`;
  }
  return (
    <nav>
      <ul className="logos">
        <div className="nav-left-logo">
          <li>
            <a href="https://eprocure.goa.gov.in/nicgep/app">
              <img src={logo} alt="" />
            </a>
          </li>
        </div>

        <div className="nav-center-logo">
          <li>
            <a href="https://www.goavidhansabha.gov.in/">
              <img src={assembly} alt="" />
            </a>
          </li>
        </div>

        <div className="nav-right-logo">
          <li>
          <a href="https://www.goa.gov.in/">
              <img src={govgoa} alt="" />
            </a>
          </li>
        </div>
      </ul>
      <div className="blue"></div>
      <ul>
        
        <div className="nav-left">
          <li>{formattedDate}</li>
        </div>

        <div className="nav-center">
          <li>
            <Link to="/">
              <img className="nav-icon" src={home} alt="" />
              HOME
            </Link>
          </li>
          <li>
            <Link to="/contact_us">
              <img className="nav-icon" src={contact} alt="" />
              CONTACT US
            </Link>
          </li>
          <li>
            <a href="">
              <img className="nav-icon" src={map} alt="" />
              SITE MAP
            </a>
          </li>
        </div>

        <div className="nav-right">
          <li>{time}</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
