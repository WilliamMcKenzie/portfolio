import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import Projects from "../pages/projects"
import Contact from "../pages/contact"
import js from '../icons/js.png'
import css from '../icons/css.png'
import html from '../icons/html.png'
import react from '../icons/react.png'
import x from '../icons/x.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export const MyRoutes = () => {
    const navigate = useNavigate();

    const [homeClass, homeSwitch] = useState("pageLink")
    const [aboutClass, aboutSwitch] = useState("pageLink selected")
    const [projectsClass, projectsSwitch] = useState("pageLink")
    const [contactClass, contactSwitch] = useState("pageLink")


    function goHome() {
        navigate("/home");
        switchAll()
        homeSwitch("pageLink selected")
    }

    function goAbout() {
        navigate("/about")
        switchAll()
        aboutSwitch("pageLink selected")
    }

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

    return (<div>
        <div>
            <div className="navBar">
                <a className={homeClass} onClick={goHome}><img className='pageLinkIcon' src={react} />home.jsx <button className='pageLinkClose'><img className="x" src={x} /></button></a>
                <a className={aboutClass} onClick={goAbout}><img className='pageLinkIcon' src={html} />about.html <button className='pageLinkClose'><img className="x" src={x} /></button></a>
                <a className={projectsClass} onClick={goProjects}><img className='pageLinkJS' src={js} />projects.js <button className='pageLinkClose'><img className="x" src={x} /></button></a>
                <a className={contactClass} onClick={goContact}><img className='pageLinkIcon' src={css} />contact.css <button className='pageLinkClose'><img className="x" src={x} /></button></a>
            </div>
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </div>)
}