import React from "react";
import "./Footer.css";
import { ArrowDropDown, Language } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer_contact">Questions? Contact Us</div>
      <div className="footer_container">
        <div>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div>
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Informatioon</p>
          <p>Netflix Originals</p>
        </div>
        <div>
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p><a href="https://github.com/AnujaOswal"><GitHubIcon/></a></p>
          <p><a href="https://www.linkedin.com/in/anuja-oswal-783476128/"><LinkedInIcon/></a></p>
        </div>
      </div>
      <div className="footer_language">
        <button className="footer_button">
          <Language /> <span>English</span> <ArrowDropDown />
        </button>
      </div>
      <div className="footer_country">Netflix</div>
      <div className="footer_author">
        Made by Anuja Oswal | Copyright &copy; {year}
      </div>
    </div>
  );
};

export default Footer;