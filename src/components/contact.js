import { useNavigate } from "react-router-dom";
import { ReactComponent as SplashArt } from '../icons/aboutSplashart.svg';

const Contact = () => {
    const navigate = useNavigate();

    return (<div className="about" id="contact">
        <SplashArt className="splashArt" />
        <div className="aboutContent">
            <p className="aboutHeader">Get In Touch:</p>
            <div className="aboutP">
                <button className="contactButton">
                    <p className="contactButtonText">Email</p>
                    <div>
                        <img src="https://assets.stickpng.com/images/584856bce0bb315b0f7675ad.png" width={40} height={40} />
                    </div>
                </button>
            </div>
        </div>
    </div>)
}

export default Contact

