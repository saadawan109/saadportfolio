import React from "react";
import furniImg from "../assets/images/furni.png";
import painterImg from "../assets/images/painter.png";
import foodImg from "../assets/images/food.png";
import feane from "../assets/images/feane.png";

const Projects = () => {
  return (
    <>
      <section className="projects py-5" id="projects">
        <div className="container">
          <div className="text-center py-5">
            <h2 className="text-white">
              My <span className="about">Projects</span>
            </h2>
          </div>

          <div className="row ">
            <div className="col-md-3 my-3">
              <div className="card card_project">
                <img
                  src={painterImg}
                  className="img-fluid"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Painter Project</h5>
                  <p className="card-text text-secondary">
                    FrontEnd Website About the Painter
                  </p>
                  <a
                    href="https://saadawan109.github.io/painter/"
                    target="_blank"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go To Website
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 my-3">
              <div className="card card_project">
                <img
                  src={foodImg}
                  className="img-fluid"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Food Project</h5>
                  <p className="card-text text-secondary">
                    FrontEnd Website About the Resturan Managment
                  </p>
                  <a
                    href="https://saadawan109.github.io/projectfood/"
                    target="_blank"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go To Website
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 my-3">
              <div className="card card_project">
                <img
                  src={furniImg}
                  className="img-fluid"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Furni Project</h5>
                  <p className="card-text text-secondary">
                    FrontEnd Website About the Furniture
                  </p>
                  <a
                    href="https://saadawan109.github.io/furni-project/"
                    target="_blank"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go To Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

          <div className="col-md-3 my-3">
              <div className="card card_project">
                <img
                  src={feane}
                  className="img-fluid"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Beauty Project</h5>
                  <p className="card-text text-secondary">
                    React Website About the Beauty Producrs
                  </p>
                  <a
                    href="https://saadawan109.github.io/Beauty-Shop-React-master/"
                    target="_blank"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go To Website
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 my-3">
              <div className="card card_project">
                <img
                  src={feane}
                  className="img-fluid"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Feani Project</h5>
                  <p className="card-text text-secondary">
                    React Website About the Food Managment
                  </p>
                  <a
                    href="https://restoran-project-seven.vercel.app/"
                    target="_blank"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go To Website
                  </a>
                </div>
              </div>
            </div>

            

            <div className="col-md-3 my-3">
              <div className="card card_project">
                <img
                  src={feane}
                  className="img-fluid"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white">Feani Project</h5>
                  <p className="card-text text-secondary">
                    React Website About the Food Managment
                  </p>
                  <a
                    href="https://restoran-project-seven.vercel.app/"
                    target="_blank"
                    className="btn btn-info text-white btn-sm"
                  >
                    Go To Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
