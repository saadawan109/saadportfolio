import React from "react";

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="text-center py-5">
            <h2 className="text-white">
              My <span className="about">Services</span>
            </h2>
          </div>

          <div className="row py-5">
            <div className="col-md-3 my-2">
              <div className="service-boreder">
                <div className="service-boreder text-center p-3">
                  <i class="ri-file-list-2-line ri-3x service-icon"></i>
                  <h5 className="text-white">Frontend developer</h5>
                  <small className="text-secondary">
                    Create dynamic web applications using HTML, CSS, Bootstrap,
                    Tailwind and React for the front end, ensuring responsive
                    and user-friendly interfaces.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="service-boreder">
                <div className="service-boreder text-center p-3">
                  <i class="ri-file-list-2-line ri-3x service-icon"></i>
                  <h5 className="text-white">Backend developer</h5>
                  <small className="text-secondary">
                    For the backend, I utilize Node.js and Express.js to build
                    robust server-side applications, and MongoDB for efficient
                    and scalable database management.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="service-boreder">
                <div className="service-boreder text-center p-3">
                  <i class="ri-file-list-2-line ri-3x service-icon"></i>
                  <h5 className="text-white">UI/UX Design</h5>
                  <small className="text-secondary">
                    I also do a bit of UI/UX designing, creating visually
                    appealing and user-friendly interfaces that enhance the
                    overall user experience and engagement.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="service-boreder">
                <div className="service-boreder text-center p-3">
                  <i class="ri-file-list-2-line ri-3x service-icon"></i>
                  <h5 className="text-white">Project Managment</h5>
                  <small className="text-secondary">
                    I manage projects using clear communication, detailed
                    planning, and agile methodologies to ensure timely delivery,
                    high-quality results, and client satisfaction.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
