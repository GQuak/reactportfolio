import React from "react";

const Contact = () => {
  return (
    <main className="flex-shrink-0">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-xs-12 col-sm-6" id="contact-me">
            <header>
              <h1 className="header">Contact Me</h1>
            </header>
            <hr />
            <iframe
              title="Contact form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeofR-s5r5ni_aYcK_SyX5UuLjTnk_amYOEdlu2IIwuimkPzg/viewform?embedded=true"
              width="640"
              height="940"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      <hr />
    </main>
  );
};

export default Contact;
