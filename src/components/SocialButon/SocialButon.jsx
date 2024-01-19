import React from "react"
import './style.css';

import Instagram from "./icons/instagram.svg"
import Twitter from "./icons/twitter.svg"
import Youtube from "./icons/youtube.svg"
import Linkedin from "./icons/linkedin.svg"

export default function SocialButon() {
    return (
    <span className="background">
    <span className="social-media-buttons">
        <span className="social-media-button">
            <img
                alt="Instagram"
                src={Instagram}
            />
        </span>
        <span className="social-media-button">
            
            <img
                alt="Twitter"
                src={Twitter}
            />
        </span>
        <span className="social-media-button">
            <img
                alt="Youtube"
                src={Youtube}
            />
        </span>
        <span className="social-media-button">
            <img
                alt="LinkedIn"
                src={Linkedin}
            />
        </span>
    </span>
</span>
    )
}