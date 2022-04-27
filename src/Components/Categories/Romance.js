
import React, { useState } from 'react'
import './Romance.scss'
import Footer from '../Footer/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideImageOne from '../../Images/pic1.jpg';
import slideImageTwo from '../../Images/pic2.jpg';
import slideImageThree from '../../Images/pic3.png';
import data from '../../Data/staticTestData';
import { Link } from 'react-router-dom';


const Romance = () => {
    const dataBooks = data.filter(item => item.genre === "Romance");
    const filter = useState('');
    const checkEmpty = dataBooks.length === 0 ? true : false;
    return (
        <div className="RomanceFile">

            <h2 className="book-header">Top Books From Romance Category</h2>
            {!checkEmpty && <div className="book-wrapper">

                {dataBooks.filter(item => {
                    return item.genre === "Romance"
                })
                    .map((item) => {

                        return (
                            <div className="book-card">

                                <Link to={{ pathname: '/book', state: { title: item.title, image: item.image, genre: item.genre, author: item.author, description: item.description } }}><img className="book-image" src={item.image} /></Link>
                                <h2 className="title">Title : {item.title}</h2>
                                <h3 className="author">By : {item.author}</h3>
                                <div className="button-div">
                                    <button className="Read" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={item.readLink}>Read</a></button>
                                    <button className="Download" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={item.downloadLink}>Download</a></button>
                                </div>

                            </div>
                        )
                    })}
            </div>}
            {checkEmpty && <div className="book-empty">
                <h1 className="empty-header">No books of the selected genre are available</h1>
            </div>}
            <Footer />
        </div>
    )
}

export default Romance
