import { Footer } from "antd/es/layout/layout";
import "./Footerr.css";
import Link from "antd/es/typography/Link";
import { incrementVisitorCount, getVisitorCount } from '../../Components/firebase.js';
import { useEffect, useState } from "react";


const Footerr = () => {

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Increment the visitor count on page load
    incrementVisitorCount();

    // Fetch and display the current visitor count
    getVisitorCount((count) => {
      setVisitorCount(count);
    });
  }, []);
  return (
    <div>
      <Footer className="footer1">
        Visitor no.: {visitorCount} <br />
        Contents owned and maintained by Government of Goa
      </Footer>
      <Footer className="footer2">
        <Link className="fele">
          <a href="https://www.nic.in/" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Flogo1.png?alt=media&token=93dea07c-c43e-4443-b28a-2456abbf235b" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Flogo_1.png?alt=media&token=227e823d-2e9c-414e-a0b5-8c01c6540d88" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Fstqc.png?alt=media&token=25007c44-2b92-4ec8-a941-c911c3c36ab5" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Ftngovin.png?alt=media&token=9dc309e6-90fe-4a43-9379-a15f44c8555a" alt="" />
          </a>
        </Link>
        <Link className="fele">
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/eprocurement-32ba4.appspot.com/o/assets%2Fgemcppp.svg?alt=media&token=30b42133-ac4a-48b5-b580-842de58821b5" alt="" />
          </a>
        </Link>

        <div className="footer3">
          <div>
            Designed, Developed and Hosted by
            <br />
            <strong>National Informatics Centre</strong>
          </div>
          <div>
            National Informatics Centre Version: 1.09.20 10-Jan-2024
            <br />
            &copy; 2017 Tenders NIC, All rights reserved.
          </div>
          <div>
            <a href="#"><b>Portal Policies</b></a>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footerr;
