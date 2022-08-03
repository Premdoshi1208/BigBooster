import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Table = ({ user }) => {
    const [value, setValue] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setValue(data);
        }
        getData();
    }, [user]);

    function handleClick(e) {
        e.preventDefault();
        navigate("/form")
    }

    function handleDelete(e) {
        e.preventDefault();
        const id = e.target.name;
        console.log(id);
        if (window.confirm("Are you sure you want to delete this user?")) {

            const row = document.getElementById(id);
            row.style.display = "none"
        }
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((row) => {
                        return (
                            <tr key={row.id} id={row.id}>
                                <td>{row.name}</td>
                                <td>{row.username}</td>
                                <td>{row.email}</td>
                                <td>{row.phone}</td>
                                <td>{row.website}</td>
                                <td>
                                    <button name={row.id} onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {user[0] && user.map((row) => {
                        return (
                            <tr key={row.id} id={row.id}>
                                <td>{row.name}</td>
                                <td>{row.username}</td>
                                <td>{row.email}</td>
                                <td>{row.phone}</td>
                                <td>{row.website}</td>
                                <td>
                                    <button name={row.id} onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={handleClick}>CREATE USER</button>
        </>
    );
};

export default Table;
