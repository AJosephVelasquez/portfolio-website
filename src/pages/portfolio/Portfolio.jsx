import React from "react";
import './portfolio.css';
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";

function Portfolio(){
    return(
        <section className="portfolio section animate-appear">
            <h2 className="section-title">
                My <span>Portfolio</span>
            </h2>
            
            <div className="portfolio-container container grid">
                {portfolio.map((item) => {
                    return(
                        <PortfolioItem key={item.id} {...item}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;

