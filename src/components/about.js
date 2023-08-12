import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (<div className="about" id="about">
        <p className="projectsHeader">About Me</p>
        <p className="aboutP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    </div>)
}

export default About

