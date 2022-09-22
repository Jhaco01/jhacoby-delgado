import {React, useState, useEffect} from "react";
import Loader from "react-loaders";
import { AnimatedLetters } from "../AnimatedLetters";
import "./index.scss"

export const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const renderPortfolio = () => {
        
    }
    
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
            <div>{renderPortfolio}</div>          
        </div>
        <Loader type='pacman' />
        </>
    )
}