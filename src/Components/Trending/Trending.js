
import React, { useState } from 'react'
import './Trending.scss'
import Footer from '../Footer/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideImageOne from '../../Images/pic1.jpg';
import slideImageTwo from '../../Images/pic2.jpg';
import slideImageThree from '../../Images/pic3.png';
import data from '../../Data/staticTestData';
import { Link } from 'react-router-dom';



const Trending = () => {
    var dataBooks = data;
    const filter = useState('');

    function clickCounter(id) {
        for (var i = 0; i < dataBooks.length; i++) {
            if (dataBooks[i].id === id) {
                dataBooks[i].clicks = dataBooks[i].clicks + 1;

                return;
            }
        }
    }

    return (
        <div className="TrendingFile">
            <h2 className="book-header">Explore our books</h2>
            <div className="book-wrapper">
                {dataBooks.map((item) => {
                    return (
                        <div className="book-card">
                            <Link to={{ pathname: '/book', state: { title: item.title, image: item.image, genre: item.genre, author: item.author, description: item.description, readLink: item.readLink, downloadLink: item.downloadLink, innerText: item.title } }}><img className="book-image" src={item.image} /></Link>
                            <h2 className="title">Title : {item.title}</h2>
                            <h3 className="author">By : {item.author}</h3>
                            <div className="button-div">
                                <button className="Read" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={item.readLink}>Read</a></button>
                                <button className="Download"><a style={{ color: '#efefef', textDecoration: 'none' }} href={item.downloadLink}>Download</a></button>
                            </div>

                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}


export default Trending
