import { useNavigate } from "react-router-dom";
import { ReactComponent as SplashArt } from '../icons/contactSplashart.svg';
import mailIcon from '../icons/mail.png';
import instaIcon from '../icons/instagram.png';
import discordIcon from '../icons/discord.png';
import Icon from '../icons/logo2.png'
import { motion, useScroll } from "framer-motion"

const Contact = () => {
    const navigate = useNavigate();

    return (<div className="about" id="contact">
        <p className="contactHeader">Contact</p>
        <div className="contactContent">
            <div className="contactB">
                <button className="contactButton email" onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTggJjTXCFZJtHQChFFdcGLsdjsMGfWPBJPVSTNwcgJwFWTGbwTHlxmCtfSzmZGzXTcpTr", "_blank")}>
                    <p className="contactButtonText">Email</p>
                    <div>
                        <img src={mailIcon} height={40} />
                    </div>
                </button>
                <button className="contactButton instagram" onClick={() => window.open("https://www.instagram.com/william.quintus/", "_blank")}>
                    <p className="contactButtonText">Instagram</p>
                    <div>
                        <img src={instaIcon} height={40} />
                    </div>
                </button>
                <button className="contactButton discord" onClick={() => window.open("https://discord.com/users/425354731599298561", "_blank")}>
                    <p className="contactButtonText">Discord</p>
                    <div>
                        <img src={discordIcon} height={40} />
                    </div>
                </button>
            </div>
            <p className="contactP">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always excited to connect with fellow enthusiasts, creators, and potential partners. Whether you have a project in mind, a question to ask, or simply want to chat about shared interests, I'm just a message away. Use the contact form below to get in touch, and I'll get back to you as soon as possible. Looking forward to hearing from you!
            </p>
        </div>
    </div>)
}

export default Contact

