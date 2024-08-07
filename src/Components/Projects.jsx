import React from 'react'
import furniImg from "../assets/images/furni.png"
import painterImg from "../assets/images/painter.png"
import foodImg from "../assets/images/food.png"
import projectImg from "../assets/images/project.png"
import tinyImg from "../assets/images/tiny-project.png"
import project2 from "../assets/images/project02.png"
import project3 from "../assets/images/project03.png"
import feane from "../assets/images/feane.png"

const Projects = () => {
    return (
        <>

            <section className='projects py-5'>

                <div className="container">
                    <div className='text-center py-5'>
                        <h2 className='text-white'>My <span className='about'>Projects</span></h2>
                    </div>


                    <div className="row">


                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={tinyImg} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Cards With 5 Coloums</h5>
                                    <p className="card-text text-secondary">
                                        Website About Five Coloums in A Row
                                    </p>
                                    <a href="https://saadawan109.github.io/bootstrap-tiny-projects/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={projectImg} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Cards Project</h5>
                                    <p className="card-text text-secondary">
                                        Website About the Card and Some Design 
                                    </p>
                                    <a href="https://saadawan109.github.io/Saad-Assignment-01/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={project2} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Basic Design</h5>
                                    <p className="card-text text-secondary">
                                        Website About the Cards In A row
                                    </p>
                                    <a href="https://saadawan109.github.io/bootstrap-tiny-projects/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={project3} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Rows & Colums Project</h5>
                                    <p className="card-text text-secondary">
                                        Website About the Manage Rows And Coloums
                                    </p>
                                    <a href="https://saadawan109.github.io/bootstrap-tiny-projects/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={painterImg} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Painter Project</h5>
                                    <p className="card-text text-secondary">
                                        FrontEnd Website About the Painter
                                    </p>
                                    <a href="https://saadawan109.github.io/painter/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={foodImg} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Food Project</h5>
                                    <p className="card-text text-secondary">
                                        FrontEnd Website About the Food
                                    </p>
                                    <a href="https://saadawan109.github.io/projectfood/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={furniImg} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Furni Project</h5>
                                    <p className="card-text text-secondary">
                                        FrontEnd Website About the Furniture
                                    </p>
                                    <a href="https://saadawan109.github.io/furni-project/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 my-3">
                            <div className="card card_project">
                                <img src={feane} className="img-fluid" style={{height:150}} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Feani Project</h5>
                                    <p className="card-text text-secondary">
                                        FrontEnd Website About the Food
                                    </p>
                                    <a href="https://restoran-project-seven.vercel.app/" className="btn btn-info text-white btn-sm">
                                        Go To Website
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </section>


        </>
    )
}

export default Projects
