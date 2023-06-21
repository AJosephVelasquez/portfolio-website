import React from "react";
import './home.css'
import Profile from '../../assets/profile.png';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'

function Home(){
    return(
        <section className="home section grid animate-appear">
            <img src={Profile} alt="profile-pic" className="home-img" />

            <div className="home-content">
                <div className="home-data">
                    <h1 className="home-title">
                        <span className="my-name">I'm Alain Velasquez</span> <br /> <div className="spanning-title">Web Developer</div>
                    </h1>

                    <p className="home-description">
                        I'm a licensed Chemical Engineer but with a heart of a developer. I aspire to become a full-stack
                        developer with the goal of creating clean & responsive web applications that would eventually reach
                        millions of people worldwide.
                    </p>

                    <Link to='/about' className="button home-button">
                        More About Me <span className="button-icon"><FaArrowRight /></span>
                    </Link>
                </div>
            </div>

            <div className="color-block"></div>
        </section>
    )
}

export default Home;