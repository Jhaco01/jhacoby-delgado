import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"

export const About = () => {
    return(
        <div className="container">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
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
        </div>
    )
}