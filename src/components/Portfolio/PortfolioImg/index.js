import React from "react";
import "./index.scss"

export const PortfolioImg = ({cover, title, description, url}) => {
    return(
        <div className="image-box" >
            <img 
                src={cover}
                className="portfolio-image"
                alt="portfolio"
            />
            <div className="content">
                <p className="title">{title}</p>
                <h4 className="description">{description}</h4>
                <button 
                    className="btn"
                    onClick={ () => window.open(url)}    
                >VIEW</button>
            </div>
        </div>                 
    )
}