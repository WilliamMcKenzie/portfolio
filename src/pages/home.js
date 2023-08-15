import HomeComponent from "../components/home";
import Project from "../components/project";
import About from "../components/about";
import '../style.css';
import BackgroundParticle from "../components/backgroundParticle";

const Home = () => {
    return (<div className="homePage">
        <BackgroundParticle className="BackgroundParticle" />
        <HomeComponent />
        <About />
        <Project />
    </div>)
}

export default Home