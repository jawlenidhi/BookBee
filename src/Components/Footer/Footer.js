import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <div className="footerFile">
            <div className="footerWrapper">
                <ul className="footer-list">
                    <li className="footer-item">Contact Us</li>
                    <li className="footer-item">Request a Book</li>
                    <li className="footer-item">Support</li>
                    <li className="footer-item">Read</li>
                </ul>
                <div className="footer-text">
                    <h2 className="footer-header">BookBee</h2>
                    <h3 className="footer-subheader">2021 All Rights Reserved.</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
