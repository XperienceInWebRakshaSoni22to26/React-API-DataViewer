import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return ( <
        div style = {
            { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }
        } >
        <
        button onClick = { handlePrev }
        disabled = { currentPage === 1 } >
        Prev <
        /button>

        <
        span > Page { currentPage }
        of { totalPages } < /span>

        <
        button onClick = { handleNext }
        disabled = { currentPage === totalPages } >
        Next <
        /button> < /
        div >
    );
};

export default Pagination;