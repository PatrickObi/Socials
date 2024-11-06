import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Page from './Page';  // Assuming `Page` is another component that you want to display

function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fetchdata, setFetchdata] = useState(null);
    
    async function sendData() {
        try {
            const response = await axios.get(`http://localhost:3003/users/${name}`);
            const data = response.data;
            console.log(data);
            setFetchdata(data);  // Update the state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission behavior
        sendData();
    }
    if (fetchdata){
        return (
            <div>
                <Page data={fetchdata} />
            </div>
        )
    }else{

        return (
            <div className='maindiv'>
                <div>
                    <div className='header-container'>
                        <Link to={"/signin"} className='mainheader'>Log In</Link>
                        <Link to={"/signup"} className='mainheader2'>Sign Up</Link>
                    </div>
    
                    <form action="">
                        <div>
                            <div className='forminput'>
                                <label htmlFor="name">Enter your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <br />
                            <div className='forminput'>
                                <label htmlFor="email">Enter your email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                        </div>
                        <br />
                        <button onClick={handleSubmit}>Send</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Signin;
