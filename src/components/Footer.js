import React from "react";

const Footer = () => {
  return (
    <footer className="footer footerStyle">
      <p>
        {" "}
        <br></br>
        <a
          href="https://www.linkedin.com/in/gabriel-quakkelaar/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
            alt="Gabe Quakkelaar on LinkedIn"
            width="50"
            height="50"
          ></img>
        </a>
        <a href="https://github.com/GQuak" target="_blank" rel="noreferrer">
          <img
            src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png"
            alt="Gabe Quakkelaar on Github"
            width="50"
            height="50"
          ></img>
        </a>
      </p>
      <div>
        <span className="text-muted">
          {" "}
          Gabe Quakkelaar | (616) 420-1427 | gabe.quakkelaar@gmail.com <br></br>
          &copy; Copyright 2021 Gabe Quakkelaar
        </span>
        <br></br>
        <br></br>
      </div>
    </footer>
  );
};

export default Footer;
