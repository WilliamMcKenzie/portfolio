import js from '../icons/js.png'
import css from '../icons/css.png'
import readme from '../icons/readme.png'

const NavBar = () => {
    return (<div className="navBar">
        <a className="pageLink"><img className='pageLinkIcon' src={js} />AboutMe.md</a>
        <a className="pageLink"><img className='pageLinkIcon' src={css} />Projects.js</a>
        <a className="pageLink"><img className='pageLinkIcon' src={readme} />Media.css</a>
    </div>)
}

export default NavBar