import React, { useState } from 'react'
import './Login.scss'
import image from '../../Images/undraw_book_lover_mkck.svg';
import { Link, useHistory } from 'react-router-dom'
const Login = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        email: "", password: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostLoginData = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        const response = await fetch("/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await response.json();

        if (response.status === 422) {
            window.alert("Please Fill All The Details");

        } else if (response.status === 401) {
            window.alert("Invalid Credentials");
        }
        else {
            window.alert("Sucessfully Logged In");
            history.push("/read");
        }

    }



    return (
        <div className="LoginFile">
            <div className="loginWrapper">
                <img className="image-here" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/1280px-Books_HD_%288314929977%29.jpg" />
                <form className="signup-form">
                    <h2 classNmae="signup-header">Login To Your Account</h2>

                    <input className="input-here" name="email" id="email" type="email" placeholder='Email'
                        value={user.email}
                        onChange={handleInputs} />


                    <input className="input-here" name="password" id="password" type="password" placeholder='Password'
                        value={user.password}
                        onChange={handleInputs} />


                    <div className="btn-div">
                        <button className="submit-button" onClick={PostLoginData}>Sign In</button>
                        <span className="something">New user?</span>
                        <Link to="/signup"><button className="submit-button">Sign Up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
