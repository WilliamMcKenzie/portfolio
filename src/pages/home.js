import HomeComponent from "../components/home";
import Project from "../components/project";
import About from "../components/about";
import Contact from "../components/contact";
import '../style.css';
import BackgroundParticle from "../components/backgroundParticle";

const Home = () => {
    return (<div className="homePage">
        <BackgroundParticle className="BackgroundParticle" />
        <HomeComponent />
        <About />
        <Project />
        <Contact />
    </div>)
}

export default Home