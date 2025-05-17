import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import Pagination from './Pagination';

const FirstPage = () => {
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const API_URL = 'https://jsonplaceholder.typicode.com/';

    const fetchApiData = async() => {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
    };

    useEffect(() => {
        fetchApiData();
        setCurrentPage(1); // reset to page 1 when reqType changes
    }, [reqType]);

    // Pagination logic: slice items based on currentPage
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    return ( <
        div >
        <
        Form reqType = { reqType }
        setReqType = { setReqType }
        />

        <
        div className = "list-container" >
        <
        List items = { currentItems }
        /> < /
        div >

        <
        Pagination currentPage = { currentPage }
        totalPages = { totalPages }
        onPageChange = { setCurrentPage }
        /> < /
        div >
    );
};

export default FirstPage;