import teamTetherPreview from '../icons/teamtetherPreview.png'
import linearPreview from '../icons/linearPreview.jpg'
import pixelPreview from '../icons/pixelPreview.png'
import bulkinatorPreview from '../icons/bulkinatorPreview.jpg'
import open from '../icons/open.png'
import { useNavigate } from "react-router-dom";
import { motion, useScroll } from "framer-motion"


const Project = () => {
    const navigate = useNavigate();

    return (<div className="projects" id="projects">
        <p className="projectsHeader">Projects</p>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        />
        <motion.div className="teamTether project" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1, x: 0, }} transition={{ duration: 0.5 }}>
            <div className="previewContainer" onClick={() => window.open("http://linear.williamqm.com", "_blank")}>
                <img className="projectPreview" src={bulkinatorPreview} />
                <img className="projectOpen" src={open} />
            </div>
            <div className="projectDetails">
                <p className="projectTitle">Bulkinator</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Technology</p>
                    <img src="https://img.shields.io/badge/NextJS-white?style=for-the-badge&logo=next.js&logoColor=black"></img>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
                    <img src="https://img.shields.io/badge/Prisma-07405E?style=for-the-badge&logo=prisma&logoColor=FFFFFF"></img>
                    <img src="https://img.shields.io/badge/MongoDB-00684A?style=for-the-badge&logo=mongodb&logoColor=FFFFFF"></img>
                    <img src="https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=FFFFFF"></img>
                </div>
                <div className="projectTechnologies">

                    <p className="projectHeader">Languages</p>
                    <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></img>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img src="https://img.shields.io/badge/HTML-D46719?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img src="https://img.shields.io/badge/CSS-317791?&style=for-the-badge&logo=css3&logoColor=white"></img>
                </div>
            </div>
        </motion.div>
        <motion.div className="teamTether project" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1, x: 0, }} transition={{ duration: 0.5 }}>
            <div className="previewContainer" onClick={() => window.open("http://teamtether.williamqm.com/register", "_blank")}>
                <img className="projectPreview" src={teamTetherPreview} />
                <img className="projectOpen" src={open} />
            </div>
            <div className="projectDetails">
                <p className="projectTitle">TeamTether</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Technology</p>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
                    <img src="https://img.shields.io/badge/Prisma-07405E?style=for-the-badge&logo=prisma&logoColor=FFFFFF"></img>
                    <img src="https://img.shields.io/badge/Fastify-FFFFFF?style=for-the-badge&logo=fastify&logoColor=202020"></img>
                    <img src="https://img.shields.io/badge/PostgreSQL-326690?style=for-the-badge&logo=postgresql&logoColor=FFFFFF"></img>
                    <img src="https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=FFFFFF"></img>
                </div>
                <div className="projectTechnologies">
                    <p className="projectHeader">Languages</p>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img src="https://img.shields.io/badge/HTML-D46719?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img src="https://img.shields.io/badge/CSS-317791?&style=for-the-badge&logo=css3&logoColor=white"></img>
                </div>
            </div>
        </motion.div>
        <motion.div className="teamTether project" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1, x: 0, }} transition={{ duration: 0.5 }}>
            <div className="previewContainer" onClick={() => window.open("http://linear.williamqm.com", "_blank")}>
                <img className="projectPreview" src={linearPreview} />
                <img className="projectOpen" src={open} />
            </div>
            <div className="projectDetails">
                <p className="projectTitle">Linear Equation Calc</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Languages</p>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img src="https://img.shields.io/badge/HTML-D46719?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img src="https://img.shields.io/badge/CSS-317791?&style=for-the-badge&logo=css3&logoColor=white"></img>
                </div>
            </div>
        </motion.div>
        <motion.div className=" project" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1, x: 0, }} transition={{ duration: 0.5 }}>
            <div className="previewContainer" onClick={() => window.open("http://pixoforge.williamqm.com", "_blank")}>
                <img className="projectPreview" src={pixelPreview} />
                <img className="projectOpen" src={open} />
            </div>
            <div className="projectDetails">
                <p className="projectTitle">PixoForge</p>
                <div className="projectTechnologies">
                    <p className="projectHeader">Languages</p>
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img src="https://img.shields.io/badge/HTML-D46719?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img src="https://img.shields.io/badge/CSS-317791?&style=for-the-badge&logo=css3&logoColor=white"></img>
                </div>
            </div>
        </motion.div>
    </div>)
}

export default Project

