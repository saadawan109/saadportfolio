import React from 'react'

const Footer = () => {
    return (

        <>
            <section className='footer_section'>
                <footer className="container py-4">
                    <div className="row py-2 d-flex text-align-center">
                        <div className='col-md-4'>
                            <h5 className='footer_heading'>Contact</h5>
                            <address className='text-white'>
                                Lodhran, Punjab, Pakistan
                                <br />
                                Email:{" "}
                                <a href="mailto:your.email@example.com" className='text-secondary text-decoration-none'>maliksaad109109@gmail.com</a>
                            </address>
                        </div>
                            
                        <div className='col-md-2'>
                        <h5 className='footer_heading'>Contact</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/saadawan109"  className='text-secondary text-decoration-none'>GitHub</a>
                                </li>
                                <li>
                                    <a href="https://vercel.com/muhammad-saads-projects-7920679b"  className='text-secondary text-decoration-none'>Li</a>
                                </li>
                            </ul>
                        </div>        
                    </div>
                    <div className="row py-2 d-flex text-align-center">
                        <p className='text-white'>@ 2024 Muhammad Saad Tarique All right are reserved</p>
                    </div>
                </footer>
            </section>



        </>
    )
}

export default Footer