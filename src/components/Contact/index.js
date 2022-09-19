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
                    <p>
                        I'm interested in jobs oportunities for juniors devs or trainee devs,
                        mainly to start earning some experience in the area of JavaScript, HTML, CSS 
                        and React; however, if is there any oportunity related or not with those, you 
                        can contact me with the form below.  
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half"> 
                                    <input type="text" name="name" placeholder="Name" required /> 
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            < Loader type="pacman" />
        </>
    )
}