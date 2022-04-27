import React, { useEffect } from 'react'
import './Homepage.scss'
import 'aos/dist/aos.css';
import Aos from 'aos';
import image1 from '../../Images/hungerGames.jpg';
import image2 from '../../Images/book1.jpg';
import image3 from '../../Images/book2.jpg';
import image4 from '../../Images/book3.webp';
import image5 from '../../Images/bgimg.jpg';
import Footer from '../Footer/Footer';
const Homepage = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
            once: true
        });
    }, [])
    return (
        <div className="homepageFile">
            <div className="bodyWrapper">
                <div className="bodyText">
                    <h1 className="header-body" data-aos={"fade-right"}>BookBee</h1>
                    <h3 className="body-text" data-aos={"fade-right"}>READ. AMUSE. GROW.</h3>
                    <button className="sub-heading" data-aos={"fade-right"}>Start reading today!</button>
                </div>
                <div className="book" data-aos={"flip-up"}>
                    <div className="back"><p className="para">Man's best friend</p></div>
                    <div className="page6"><p className="para">Man's best friend</p></div>
                    <div className="page5"><p className="para">Books are</p></div>
                    <div className="page4"></div>
                    <div className="page3"></div>
                    <div className="page2"></div>
                    <div className="page1"></div>
                    <div className="front">
                    </div>
                </div>
                <div className="mobile-book">
                    <div className="book1">
                        <div className="gap"></div>
                        <div className="pages">
                            <div className="page"></div>
                            <div className="page"></div>
                            <div className="page"></div>
                            <div className="page"></div>
                            <div className="page"></div>
                            <div className="page"></div>
                        </div>
                        <div className="flips">
                            <div className="flip flip1">
                                <div className="flip flip2">
                                    <div className="flip flip3">
                                        <div className="flip flip4">
                                            <div className="flip flip5">
                                                <div class="flip flip6">
                                                    <div class="flip flip7"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="book-shutter">
                <h2 className="book-header">GET IMMERSED INTO THE WORLD OF READING AT BOOKBEE</h2>
                <div className="get-started">
                    <h2 className="unlimited">Unlimited Books</h2>
                    <h3>Read anywhere. Download anytime.</h3>
                    <div className="input-text">
                        <button className="btn-new">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="feature-bar">
                <h2 className="feature-header" style={{ padding: '1.5rem' }}>
                    What do we provide?
                </h2>
                <div className="wrapper">
                    <img data-aos={"fade-right"} className="book-img" src={image3} />
                    <div className="details-div" data-aos={"fade-left"}>
                        <h3 className="details">
                            Read your favourite categories of books online for free.
                        </h3>
                    </div>
                </div>
                <div className="wrapper-2">
                    <img className="book-img" src={image2} data-aos={"fade-left"} />
                    <div className="details-div" data-aos={"fade-right"}>
                        <h3 className="details">
                            Download your favourite books and rate them.
                        </h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
