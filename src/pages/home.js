import HomeComponent from "../components/home";
import Project from "../components/project";
import About from "../components/about";
import '../style.css';

const Home = () => {
    return (<div className="homePage">
        <HomeComponent />
        <About />
        <Project />
    </div>)
}

export default Home