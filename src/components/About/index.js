import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"

export const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>My main goal nowadays is to start applying my skils in web development
                    and start winning experiences in this area .</p>
                <p>Also, learn from seniors devs the best ways to accomplish tasks and development
                    software. </p>
                <p>I could define myself as a young boy, with strong desire of get further in
                    life, and desires of accomplish big things. Coding is one of the things that 
                    I enjoy the most, and learning to code besides develop software is always very 
                    enjoyable to me. This is my way to keep going in this way. Nice to meet you!</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

        </div>
    )
}