import React from 'react'
import logo from '../assets/images/SAADLOGO.png'

const Navbar = () => {
    return (
        <>

            <nav className="navbar myNavbar navbar-expand-lg">
                <div className="container py-3">
                    <a href="#" className='navLogo'>
                        <img src={logo} style={{height:60}} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse ps-5 justify-content-around navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <a className="nav-link text-white active mx-3" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">
                                    About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">
                                    My Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white mx-3" href="#">
                                    Reviws
                                </a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <button className='rounded-pill border-0 navBtn text-white py-2' type="submit">
                                Contact
                            </button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar