import React from 'react'

const MoreAbout = () => {
    return (
        <>

            <section className='moreAbout'>

                <div className='text-center py-5'>
                    <h2 className='text-white'>More <span className='about'>About</span> Me</h2>
                    <p className='text-secondary fst-italic'>"A great web developer transforms ideas into interactive, seamless digital experiences."</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className='text-white'>My Education</h3>
                            <div className='mt-5'>
                                <p className='text-white mb-1'>2018-2022</p>
                                <h5 className='feild'>BS Information Technology</h5>
                                <p className='text-secondary pt-3'>I hold a degree in Information Technology from Government College University Faisalabad (GCUF). My education provided a strong foundation in web development and various IT disciplines, equipping me with the skills and knowledge essential for a successful career in the tech industry.</p>
                            </div>
                            <div className='mt-5'>
                                <p className='text-white mb-1'>2023-2024</p>
                                <h5 className='feild'>MERN Stack Development</h5>
                                <p className='text-secondary pt-3'>My MERN stack development journey began at TICER, located in Lodhran. Through rigorous training, I gained proficiency in MongoDB, Express.js, React, and Node.js, equipping me with the skills to build full-stack web applications and tackle complex development challenges effectively.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h3 className='text-white'>My Skills</h3>
                            <div className='mt-5'>
                                <div>
                                    <div className='row'>
                                        <h6 className='text-white col-md-11'>HTML</h6>
                                        <h6 className='text-white col-md-1'>95%</h6>
                                    </div>
                                    
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Info example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info" style={{ width: "95%" }} />
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <h6 className='text-white col-md-11'>CSS</h6>
                                        <h6 className='text-white col-md-1'>95%</h6>
                                    </div>
                                    
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Info example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info" style={{ width: "95%" }} />
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <h6 className='text-white col-md-11'>Boostrap</h6>
                                        <h6 className='text-white col-md-1'>90%</h6>
                                    </div>
                                    
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Info example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info" style={{ width: "90%" }} />
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <h6 className='text-white col-md-11'>JavaScript</h6>
                                        <h6 className='text-white col-md-1'>75%</h6>
                                    </div>
                                    
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Info example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info" style={{ width: "75%" }} />
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <h6 className='text-white col-md-11'>React</h6>
                                        <h6 className='text-white col-md-1'>85%</h6>
                                    </div>
                                    
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Info example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info" style={{ width: "85%" }} />
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <div className='row'>
                                        <h6 className='text-white col-md-11'>Express.js</h6>
                                        <h6 className='text-white col-md-1'>75%</h6>
                                    </div>
                                    
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Info example"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info" style={{ width: "75%" }} />
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

export default MoreAbout