import React, { useState, useEffect } from 'react';
import './tabledata.css';

function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    return (
        <div className="flex">
            <h1>Display a list of data in a table format.</h1>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.website}</td>
                    </tr>
                ))}
            </tbody>

        </div>
    );
}

export default TableData;