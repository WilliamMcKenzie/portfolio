import { useNavigate } from "react-router-dom";
import { ReactComponent as SplashArt } from '../icons/aboutSplashart.svg';

const About = () => {
    const navigate = useNavigate();

    return (<div className="about" id="about">
        <SplashArt className="splashArt" />
        <div className="aboutContent">
            <p className="aboutHeader">About Me</p>
            <p className="aboutP">Hey there! I'm William, a aspring developer from Canada. With a passion for technology, I've always been on the lookout for new opportunities to learn and grow. Welcome to my corner of the web, where I blend my tech enthusiasm, artistic flair, and a constant thirst for knowledge. Join me on this exciting journey!</p>
            <div className="aboutFlex">
                <div className="aboutLanguages">
                    <header>4</header>
                    <p>Programming Languages</p>
                </div>
                <div className="aboutLanguages">
                    <header>3</header>
                    <p>Completed Projects</p>
                </div>
                <div className="aboutLanguages">
                    <header>12</header>
                    <p>Frameworks and Libraries</p>
                </div>
            </div>
        </div>
    </div>)
}

export default About

