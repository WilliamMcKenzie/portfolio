import js from '../icons/js.png'
import css from '../icons/css.png'
import readme from '../icons/readme.png'
import x from '../icons/x.png'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    function goAbout() {
        navigate("/about");
    }

    function goProjects() {
        navigate("/projects");
    }

    function goMedia() {
        navigate("/media");
    }

    return (<div className="navBar">
        <a className="pageLink selected"><img className='pageLinkIcon' src={readme} />AboutMe.md <button className='pageLinkClose'><img className="x" src={x} /></button></a>
        <a className="pageLink"><img className='pageLinkJS' src={js} />Projects.js <button className='pageLinkClose'><img className="x" src={x} /></button></a>
        <a className="pageLink"><img className='pageLinkIcon' src={css} />Media.css <button className='pageLinkClose'><img className="x" src={x} /></button></a>
    </div>)
}

export default NavBar