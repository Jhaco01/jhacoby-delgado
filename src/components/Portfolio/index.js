import {React, useState, useEffect} from "react";
import Loader from "react-loaders";
import { AnimatedLetters } from "../AnimatedLetters";
import portfolio from "../data/portfolio";
import "./index.scss"
import { PortfolioImg } from "./PortfolioImg";

export const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const renderPortfolio = portfolio.map( (item) => {
        return( 
        <PortfolioImg 
            key={item.id}
            cover={item.cover}
            title={item.title}
            description={item.description}
            url={item.url}
        />
        )
    } )           
        
    
    return(
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={'Portfolio'.split('')}
                    idx={15}
                />
            </h1>  
            <div className="images-container">{renderPortfolio}</div>          
        </div>
        <Loader type='pacman' />
        </>
    )
}