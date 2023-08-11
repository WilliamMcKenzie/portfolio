import teamTetherPreview from '../icons/teamtetherPreview.png'

const Project = () => {
    return (<div className="projects">
        <div className="projectRow">
            <div className="teamTether project">
                <img className="projectPreview" src={teamTetherPreview}></img>
                <p className="projectTitle">TeamTether</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Technology</p>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
                    <img src="https://img.shields.io/badge/Prisma-07405E?style=for-the-badge&logo=prisma&logoColor=FFFFFF"></img>
                    <img src="https://img.shields.io/badge/Fastify-FFFFFF?style=for-the-badge&logo=fastify&logoColor=202020"></img>
                    <img src="https://img.shields.io/badge/PostgreSQL-326690?style=for-the-badge&logo=postgresql&logoColor=FFFFFF"></img>
                    <img src="https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=FFFFFF"></img>
                </div>
                <div className="projectLanguages">
                    <p className="projectHeader">Languages</p>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img src="https://img.shields.io/badge/HTML-D46719?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img src="https://img.shields.io/badge/CSS-317791?&style=for-the-badge&logo=css3&logoColor=white"></img>
                </div>
            </div>
            <div className="teamTether project">
                <img className="projectPreview" src="https://picsum.photos/1189/595"></img>
                <p className="projectTitle">Placeholder</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Technology</p>
                </div>
                <div className="projectLanguages">
                    <p className="projectHeader">Languages</p>
                </div>
            </div>
        </div>
        <div className="projectRow">
            <div className="teamTether project">
                <img className="projectPreview" src="https://picsum.photos/1190/595"></img>
                <p className="projectTitle">Placeholder</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Technology</p>
                </div>
                <div className="projectLanguages">
                    <p className="projectHeader">Languages</p>
                </div>
            </div>
            <div className="teamTether project">
                <img className="projectPreview" src="https://picsum.photos/1191/595"></img>
                <p className="projectTitle">Placeholder</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Technology</p>
                </div>
                <div className="projectLanguages">
                    <p className="projectHeader">Languages</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Project

