import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Book.scss';
const Book = () => {
    const location = useLocation();
    const [reviewData, setReviewData] = useState({
        review: "", username: ""
    });
    const [reviewDisp, setReviewDisp] = useState([]);
    const handleInputs = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setReviewData({ ...reviewData, [name]: value });
    }


    const PostReview = async (e) => {
        e.preventDefault();

        const { review, username } = reviewData;
        const bookName = location.state?.title;
        console.log(review, username, bookName);


        const response = await fetch("/reviews", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                review, username, bookName
            })
        })
        const data = await response.json();

        if (response.status === 404) {
            window.alert("Please Fill All The Details");
        } else if (response.status === 201) {
            window.alert("Review Successfully Submitted");
        }
    }

    return (
        <div className="BookFile">
            <div className="bookWrapper">
                <div className="bookTextWrapper">
                    <h2 className="bookTitle">{location.state.title}</h2>
                    <h3 className="bookAuthor">Author : {location.state.author}<br /><span className="genre">Genre: {location.state.genre}</span></h3>
                    <p className="desc">Description : {location.state.description}</p>
                    <button className="Read" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={location.state.readLink}>Read</a></button>
                    <button className="Download"><a style={{ color: '#efefef', textDecoration: 'none' }} href={location.state.downloadLink}>Download</a></button>
                    <div className="reviewWrapper">
                        <h1>Review</h1>
                        <input className="username" placeholder="Username" type="text" value={reviewData.username} onChange={handleInputs} name="username" />
                        <textarea className="review" type="text" placeholder="Leave a review" value={reviewData.review} onChange={handleInputs} name="review" />
                        <button className="submit" type="submit" onClick={PostReview}>Submit</button>
                    </div>
                </div>
                <div className="bookImageWrapper">
                    <div className="book">
                        <div className="back"><p className="para">{location.state.title}</p></div>
                        <div className="page6"><p className="para">{location.state.title}<br />{location.state.description}</p></div>
                        <div className="page5"><p className="para">{location.state.genre}</p></div>
                        <div className="page4"></div>
                        <div className="page3"></div>
                        <div className="page2"></div>
                        <div className="page1"></div>
                        <div className="front" style={{ background: `url(${location.state.image})`, backgroundSize: 'cover' }}>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Book
