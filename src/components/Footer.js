import React from "react";

const Footer = () => {
  return (
    <>
      <div className="created-by">Made with ❤️ by Hrishabh Jain</div>
      <div className="contact">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/hrishabh.hj/"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/hrishabhcodes"
          target="_blank"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/HrishabhCodes"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/hrishabh-jain/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
