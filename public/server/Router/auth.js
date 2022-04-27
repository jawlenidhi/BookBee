const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require('../conn');
const User = require('../Model/userSchema');
const Book = require('../Model/bookSchema');

router.get('/server', (req, res) => {
    res.send("Server side");
    })

router.post('/signup', async (req, res) => {

    const {name, email, password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(404).json({error: "Please fill all details"});
    }
    if(password != cpassword){
        return res.status(401).json({error: "Passwords don't match"});
    }

    try{
    const userExists = await User.findOne({email: email});
        if(userExists){
        return res.status(422).json({error: "Email already exists"});
        }

        const user = new User({name, email, password, cpassword});

       await user.save();
            return res.status(201).json({message: "User saved successfully"});
            
            
    } catch(error){
        console.log(error);
    }
});


router.post('/login', async (req, res) => {

    try{
        const {email, password} = req.body;

        if( !email || !password){
            return res.status(422).json({error: "Please fill all details"});
        }    
    const userEmail = await User.findOne({email: email});
    if(userEmail){
    const passwordMatch = await bcrypt.compare(password, userEmail.password);

        if(!passwordMatch){
            return res.status(401).json({error: "Invalid Credentials"});
        }else{
           
            return res.status(200).json({error: "Successfully Logged In"});
        }
    }else{
        return res.status(401).json({error: "Invalid Credentials"});
    }
    } catch(error){
        console.log(error);
    }
});

router.post('/reviews', async (req, res) => {

    const {review, username, bookName} = req.body;

    if(!review || !username ){
        return res.status(404).json({error: "Please fill all details"});
    }
    try{
        const findBook = await Book.findOne({bookName: bookName})
        // if(!findBook){
            const book = new Book({
                bookName: bookName,  
                    bookReview: {
                        review: review,
                        username: username
                    }
                })
            await book.save();
            console.log("review saved");
            return res.status(201).json({message: "Review saved successfully"});
        // }
        // else{
        //     return res.status(400).json({message: "Review not saved successfully"});
        // }
    // await new Book({
    // bookName: "Tom Sawyer",
    // bookReview : {
    //     review: "Its a really good book",
    //     username: "Nidhi"
    // }
    // }).save()
}catch(error){
    console.log(error);
}

});






module.exports = router;

