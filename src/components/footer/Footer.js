import React from "react";
import "./footer.css";
import logobg from "./logo-bg.png";

const Footer = () => {
  return (
    <div className="col-12" id="footer">
      <hr className="footer_ruler"></hr>
      <div className="footer_components">
        <div className="col-2 footer_left">
          <img className="footer_logo" src={logobg} alt=" "></img>
        </div>
        <div className="col-6 footer_mid">
          <span className="footer_companyname fa fa-copyright">
            &nbsp;2020 JuSnack
          </span>
        </div>
        <div className="col-4 footer_right">
          <span className="footer_contact">Contact Us:</span>
          <div className="footer_icons">
            <a
              href="mailto:jusnackofficial@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              class="fa fa-envelope icon"
            >
              {" "}
            </a>
            <a
              href="https://www.facebook.com/jusnackofficial/"
              target="_blank"
              rel="noreferrer noopener"
              class="fa fa-facebook-official icon"
            >
              {" "}
            </a>
            <a
              href="https://www.instagram.com/jusnackofficial/"
              target="_blank"
              rel="noreferrer noopener"
              class="fa fa-instagram icon"
            >
              {" "}
            </a>
            <a
              href="https://www.linkedin.com/company/jus-snack"
              target="_blank"
              rel="noreferrer noopener"
              class="fa fa-linkedin icon"
            >
              {" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
