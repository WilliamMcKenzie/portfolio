import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import Home from "../pages/home"
import js from '../icons/js.png'
import css from '../icons/css.png'
import html from '../icons/html.png'
import react from '../icons/react.png'
import x from '../icons/x.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export const MyRoutes = () => {
    const navigate = useNavigate();

    const [homeClass, homeSwitch] = useState("pageLink selected")
    const [aboutClass, aboutSwitch] = useState("pageLink")
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
        {/* <div className="navBar">
            <Link to="#projects" className="pageLink">Projects</Link>
            <a className={homeClass} onClick={goHome}><img className='pageLinkIcon' src={react} />home.jsx <button className='pageLinkClose'><img className="x" src={x} /></button></a>
            <a className={aboutClass} onClick={goAbout}><img className='pageLinkIcon' src={html} />about.html <button className='pageLinkClose'><img className="x" src={x} /></button></a>
            <a className={projectsClass} onClick={goProjects}><img className='pageLinkJS' src={js} />projects.js <button className='pageLinkClose'><img className="x" src={x} /></button></a>
            <a className={contactClass} onClick={goContact}><img className='pageLinkIcon' src={css} />contact.css <button className='pageLinkClose'><img className="x" src={x} /></button></a>
        </div> */}
        <Routes>
            <Route
                path="*"
                element={<Navigate to="/developer" replace />}
            />
            <Route path="/developer" element={<Home />} />
            <Route path="/media" element={<Home />} />
        </Routes>
    </div>)
}