import React from 'react'

const Services = () => {
    return (
        <>

            <section className='services' id='services'>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <div className='services-text d-flex flex-direction-row'>
                                <h1 className='services-name text-white'>MY</h1>
                                <h1 className='text-services ps-3'>SERVICES</h1>
                            </div>
                            <p className='text-secondary py-3'>As an experienced MERN stack developer with a year of practical expertise, I specialize in crafting comprehensive web solutions tailored to your business needs. My services encompass front-end development using HTML, CSS, Bootstrap, and React, focusing on creating dynamic, responsive interfaces that enhance user interaction and experience.

                                <br /><br />On the backend, I leverage Node.js and Express.js to build robust server-side applications, ensuring efficient handling of business logic and seamless integration with frontend components. MongoDB serves as the cornerstone for scalable database management, providing reliable data storage and retrieval solutions.

                                <br /><br />In addition to development, I excel in designing visually compelling interfaces that prioritize usability and aesthetics. By integrating agile project management practices, I ensure projects are delivered on time and within scope, while maintaining open communication to meet client expectations effectively.

                                <br /><br />My commitment to delivering high-quality, user-centric solutions drives every project, aiming to optimize functionality and drive business success through innovative web development and design.</p>
                            <button className='rounded-pill border-0 navBtn text-white py-2' type="submit">
                                That's About Me...
                            </button>
                        </div>

                        <div className="col-md-6 mt-5">
                            <div className="row">
                                <div className="col-md-6 my-2">
                                    <div className='service-boreder'>
                                        <div className='service-boreder text-center p-3'>
                                            <i class="ri-file-list-2-line ri-3x service-icon"></i>
                                            <h5 className='text-white'>Front end developer</h5>
                                            <small className='text-secondary'>Create dynamic web applications using HTML, CSS, Bootstrap, Tailwind and React for the front end, ensuring responsive and user-friendly interfaces.</small>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-md-6 my-2">
                                    <div className='service-boreder'>
                                        <div className='service-boreder text-center p-3'>
                                            <i class="ri-file-list-2-line ri-3x service-icon"></i>
                                            <h5 className='text-white'>Back end developer</h5>
                                            <small className='text-secondary'>For the backend, I utilize Node.js and Express.js to build robust server-side applications, and MongoDB for efficient and scalable database management.</small>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 my-2">
                                    <div className='service-boreder'>
                                        <div className='service-boreder text-center p-3'>
                                            <i class="ri-file-list-2-line ri-3x service-icon"></i>
                                            <h5 className='text-white'>UI/UX Design</h5>
                                            <small className='text-secondary'>I also do a bit of UI/UX designing, creating visually appealing and user-friendly interfaces that enhance the overall user experience and engagement.</small>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className='service-boreder'>
                                        <div className='service-boreder text-center p-3'>
                                            <i class="ri-file-list-2-line ri-3x service-icon"></i>
                                            <h5 className='text-white'>Project Managment</h5>
                                            <small className='text-secondary'>I manage projects using clear communication, detailed planning, and agile methodologies to ensure timely delivery, high-quality results, and client satisfaction.</small>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Services