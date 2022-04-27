import React, { useState } from 'react'
import './Signup.scss'
import { Link, useHistory } from 'react-router-dom'

const userSignedUp = false;


const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostSignupData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;
        const response = await fetch("/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });
        const data = await response.json();

        if (response.status === 422) {
            window.alert("Email already Exists");

        } else if (response.status === 401) {
            window.alert("Password Do Not Match");
        } else if (response.status === 404) {
            window.alert("Please Fill All The Details");
        }
        else {
            window.alert("Sucessfully Registered");
            history.push("/signin");

        }
    }


    return (
        <div className="SignUpFile">
            <div className="signupWrapper">
                <img className="image-here" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/1280px-Books_HD_%288314929977%29.jpg" />
                <form className="signup-form" method="POST">
                    <h2 classNmae="signup-header">Sign Up to Read</h2>

                    <input className="input-here" name="name" id="name" type="text"
                        value={user.name}
                        onChange={handleInputs}
                        placeholder='Name' />

                    <input className="input-here" name="email" id="email" type="email"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder='Email' />

                    <input className="input-here" name="password" id="password" type="password"
                        value={user.password}
                        onChange={handleInputs}
                        placeholder='Password' />

                    <input className="input-here" name="cpassword" id="cpassword" type="password"
                        value={user.cpassword}
                        onChange={handleInputs}
                        placeholder='Re-enter Password' />

                    <div className="btn-div">
                        <button className="submit-button" onClick={PostSignupData}>Sign Up</button>
                        <span className="something">Already have an account?</span>
                        <Link to="/signin"><button className="submit-button">Sign In</button></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export {
    Signup,
    userSignedUp
}