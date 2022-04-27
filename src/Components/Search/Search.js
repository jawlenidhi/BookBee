import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../Data/staticTestData';
import './Search.scss';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="searchFile">
            <input className="input-box" type="search" placeholder="Search for your favourite books" onChange={(event) => {
                setSearchTerm(event.target.value);
            }
            }></input>
            <div className="list-here">
                {data.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.title.toLowerCase().trim().includes(searchTerm.toLowerCase())) {
                        return val.title;
                    }
                })
                    .map((val, key) => {
                        return (
                            <div className="user" key={key}>
                                <div className="book-card">
                                    <Link to={{ pathname: '/book', state: { title: val.title, image: val.image, genre: val.genre, author: val.author, description: val.description } }}><img className="book-image" src={val.image} /></Link>
                                    <h2 className="title">Title : {val.title}</h2>
                                    <h3 className="author">By : {val.author}</h3>
                                    <div className="button-div">
                                        <button className="Read" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={val.readLink}>Read</a></button>
                                        <button className="Download" ><a style={{ color: '#efefef', textDecoration: 'none' }} href={val.downloadLink}>Download</a></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Search;
