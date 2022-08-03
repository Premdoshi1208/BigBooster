import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Form = ({ setUser, user }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })
    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const userdata = {
            name: values.name,
            username: values.username,
            email: values.email,
            phone: values.phone,
            website: values.website,
        }
        await axios.post("https://jsonplaceholder.typicode.com/users", userdata).then(function (response) {
            console.log(response.data);
            setUser([...user, response.data])
        })
            .catch(function (error) {
                console.log(error);
            });;
        alert("User is added successfully");
        navigate("/")
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="phone" className="form-control" id="phone" placeholder="Enter phonenumber" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" className="form-control" id="website" placeholder="Enter website" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form
