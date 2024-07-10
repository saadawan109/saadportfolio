import React from 'react'

const Footer = () => {
    return (

        <>
            <section className='footer_section'>
                <footer className="container py-4">
                    <div className="row">
                        {/* About Me Column */}
                        <div className="col-md-4">
                            <h5 className='footer_heading'>About Me</h5>
                            <p className='text-white'>
                                I am a passionate MERN stack developer with a strong background in web
                                development and a keen eye for design. With a year of experience, I
                                specialize in creating dynamic and responsive web applications that
                                provide seamless user experiences. My commitment to staying updated with
                                the latest technologies ensures that I deliver high-quality and
                                innovative solutions.
                            </p>
                        </div>
                        {/* Categories Column */}
                        <div className="col-md-4">
                            <h5 className='footer_heading'>Categories</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#web-development" className='text-decoration-none text-secondary'>Web Development</a>
                                </li>
                                <li>
                                    <a href="#front-end-development" className='text-decoration-none text-secondary'>Front-end Development</a>
                                </li>
                                <li>
                                    <a href="#react-js" className='text-decoration-none text-secondary'>React.js</a>
                                </li>
                                <li>
                                    <a href="#bootstrap" className='text-decoration-none text-secondary'>Bootstrap</a>
                                </li>
                                <li>
                                    <a href="#html-css" className='text-decoration-none text-secondary'>HTML &amp; CSS</a>
                                </li>
                                <li>
                                    <a href="#design" className='text-decoration-none text-secondary'>Design</a>
                                </li>
                            </ul>
                        </div>
                        {/* Address and Links Column */}
                        <div className="col-md-4">
                            <h5 className='footer_heading'>Contact</h5>
                            <address className='text-white'>
                                Lodhran, Punjab, Pakistan
                                <br />
                                Email:{" "}
                                <a href="mailto:your.email@example.com" className='text-secondary text-decoration-none'>your.email@example.com</a>
                            </address>
                            <h5 className='footer_heading'>Follow Me</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/saadawan109"  className='text-secondary text-decoration-none'>GitHub</a>
                                </li>
                                <li>
                                    <a href="https://vercel.com/muhammad-saads-projects-7920679b"  className='text-secondary text-decoration-none'>Vercel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </section>



        </>
    )
}

export default Footer