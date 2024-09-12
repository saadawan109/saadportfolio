import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <footer className="container py-4">
          <div className="row py-2">
            <div className="col-md-5">
              <h5 className="footer_heading">Contact</h5>
              <address className="text-white">
                Lodhran, Punjab, Pakistan
                <br />
                Email:{" "}
                <a
                  href="mailto:your.email@example.com"
                  className="text-secondary text-decoration-none"
                >
                  maliksaad109109@gmail.com
                </a>
              </address>
            </div>

            <div className="col-md-2">
              <h5 className="footer_heading">Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://github.com/saadawan109"
                    className="text-secondary text-decoration-none"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/malik-saad-awan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-secondary text-decoration-none"
                  >
                    LinkdIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row py-2 pt-2 ">
            <div className="col-md-5">
              <p className="text-white">
                @ 2024 Muhammad Saad Tarique All right are reserved
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
