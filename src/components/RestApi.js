import axios from 'axios';
import { React, useState, useEffect } from 'react'

const RestApi = () => {
    useEffect(() => {
        fetchtems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchtems = async () => {
        const data = await axios.get(' https://jsonplaceholder.typicode.com/albums').then(response => {
            setItems(response.data);
        });
    }

    return (
        <div>
            {items.map((item) => <h1 key={item.id}>{item.title}</h1>)}
        </div>
    )
}

export default RestApi
