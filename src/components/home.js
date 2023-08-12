import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react"
import Icon from '../icons/logo.png'

const HomeComponent = () => {
    const navigate = useNavigate();
    const [homeClass, homeSwitch] = useState("pageLink selected")
    const [aboutClass, aboutSwitch] = useState("pageLink")
    const [projectsClass, projectsSwitch] = useState("pageLink")
    const [contactClass, contactSwitch] = useState("pageLink")

    function goProjects() {
        navigate("/projects");
        switchAll()
        projectsSwitch("pageLink selected")
    }

    function goContact() {
        navigate("/contact");
        switchAll()
        contactSwitch("pageLink selected")
    }

    function switchAll() {
        aboutSwitch("pageLink")
        homeSwitch("pageLink")
        projectsSwitch("pageLink")
        contactSwitch("pageLink")
    }

    return (<div className="home">
        <div className="profile">
            <img src={Icon} className="homeLogo"></img>
            <div className="details">
                <p className="name">William McKenzie</p>
                <p>Web Developer</p>
                <div className="profileButtons">
                    <Link to="#projects" className="profileButton">Projects</Link>
                    <Link to="#contact" className="profileButton">Contact</Link>
                </div>
            </div>
        </div>
    </div>)
}

export default HomeComponent

