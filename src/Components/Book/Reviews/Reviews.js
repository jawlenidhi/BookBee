import { React, useState } from 'react'


const Reviews = ({ props }) => {
    const [reviewData, setReviewData] = useState({
        review: "", username: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setReviewData({ ...reviewData, [name]: value });
    }

    const PostReview = async (e) => {
        e.preventDefault();

        const { review, username } = reviewData;
        const bookName = "Baburnama"
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

        <div>
            {/* <li>
            <input type="text" placeholder="Write Your Review"> </input>
    
                        <div className="book-card">
                        
                            <img className="book-image" src={props.image} />
                            <h2 className="title">Title : {props.title}</h2>
                            <h3 className="author">By : {props.author}</h3>
                            <div className="button-div">
                                <button className="Read" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={props.readLink}>Read</a></button>
                                <button className="Download" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={props.downloadLink}>Download</a></button>
                            </div>
                            <div>
                                <p className="description">Here's a short description : {props.description}</p>
                            </div>

                        </div>
           
            </li> */}
            <form method="post" action="POST">
                <input type="text" placeholder="Write your Review" name="review" id="review"
                    onChange={handleInputs} value={reviewData.review} />

                <input type="text" placeholder="Username" name="username" id="username"
                    onChange={handleInputs} value={reviewData.username} />

                <button type="submit" onClick={PostReview}>SUBMIT REVIEW</button>
            </form>


        </div>
    )
}

export default Reviews;
