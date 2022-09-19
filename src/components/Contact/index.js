import { useEffect, useState } from "react";
import Loader from "react-loaders"
import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"

export const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={'Contact me'.split('')}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            < Loader type="pacman" />
        </>
    )
}