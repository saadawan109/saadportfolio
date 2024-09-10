import React from 'react'
import avtar from '../assets/images/saadavtar.png'

const Hero = () => {
  return (
    <>

        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='hero-text d-flex flex-direction-row'>
                            <h1 className='hero-name text-white'>I'M</h1>
                            <h1 className='text-developer ps-3'>DEVELOPER</h1>
                        </div>
                        <h1 className='hero-name text-white'>M. SAAD TARIQUE</h1>

                        <p className='text-secondary py-3'>I am a graduate in Information Technology from Government College University Faisalabad (GCUF), Pakistan. With 1 year of experience in web development, I specialize as a MERN stack developer. My expertise includes creating dynamic and responsive web applications using MongoDB, React, Express.js, and Node.js.</p>
                        
                        <button className='rounded-pill border-0 navBtn text-white py-2' type="submit">
                        <a href="https://drive.google.com/file/d/1VkIqZDJLZz8YT9hnYVlbzb_6Vtu0fDi2/view?usp=drivesdk" target='_blank'>Hire Me</a>

                        </button>
                    </div>

                    <div className="col-md-6">
                        <img src={avtar} alt="" style={{height:485}} />
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Hero