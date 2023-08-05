import logo from '../logo.png'

const AboutMe = () => {
    return (<div className="aboutMe">
        <h1 className="name">William McKenzie</h1>
        <div>
            <a className="pageLink">About Me</a>
            <a className="pageLink">Projects</a>
            <a className="pageLink">Media</a>
        </div>
        <img src={logo} className="logoImg"></img>
        <p className="description">Hey, my name is William McKenzie. I love to create things, and have experience working in many different disciplines. On this site, I share my projects, art, and anything else I've been working on. I'm always working on something new! It's very easy to get in touch with me, just shoot me an email at williamqmckenzie@gmail.com!</p>
    </div>)
}

export default AboutMe

