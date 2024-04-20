import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import lightLogo from "../assets/img/logo-white.png";
import darkLogo from "../assets/img/logo-black.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.png";

export const Footer = () => {
  const [preferredLogo, setPreferredLogo] = useState(null);
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const isDarkMode = darkModeQuery.matches;

    const preferredLogoPath = isDarkMode ? lightLogo : darkLogo;
    setPreferredLogo(preferredLogoPath);
  }, []);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={preferredLogo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/alisakbari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/AliSAkbari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
