import { useNavigate } from "react-router-dom";
import { useState } from "react"

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
            <p className="name">William McKenzie</p>
            <p>Web Developer</p>
        </div>
        <div className="profileButtons">
            <button onClick={goProjects}>Projects</button>
            <button onClick={goContact}>Contact</button>
        </div>
    </div>)
}

export default HomeComponent

