import HomeComponent from "../components/home";
import Project from "../components/project";
import About from "../components/about";

const Home = () => {
    return (<div className="home">
        <HomeComponent />
        <About />
        <Project />
    </div>)
}

export default Home