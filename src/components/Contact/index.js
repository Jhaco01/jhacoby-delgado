import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders"
import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout (() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gdxyvey', 'template_54uqsro', refForm.current, 'yODvRgSZA2Iu8VSDO')
          .then((result) => {
              alert('Message successfully sent!');
              window.location.reload(false)
          }, (error) => {
              alert('Failed to send the message, please try again');
          });
      };

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
                         <form ref={refForm} onSubmit={sendEmail}> 
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
                                    <input type="submit" className="flat-button" value="SEND" />
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