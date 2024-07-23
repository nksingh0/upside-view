import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let Nav = () => {
    let [api, setApi] = useState([]);
    let [search, setSearch] = useState("hello");
    useEffect(() => {
        if (search.trim()) {
            fetch(`https://pixabay.com/api/?key=44939434-dc9b9a86ea81281f81b350805&q=${search}&image_type=photo&pretty=true`)
                .then(response => response.json())
                .then(data => setApi(data.hits))
                .catch(error => console.error('Error:', error));
        } else {
            setApi([]);
        }
    }, [search]);
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <h1 id='hh'>Upside View</h1>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Signup</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            id="search_bar"
                            placeholder="Search for Images"
                        />
                        <button>Search</button>
                    </div>
                </div>
            </header>
            
        
            <main>
                <div className="grid">
                    {api.map((item, index) => (
                        <div className="grid-item" key={index}>
                            <img src={item.webformatURL} alt={item.tags} style={{width:'300px'}}/>
                            {/* <div className="overlay">
                                <p>{item.tags}</p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Nav;