import React from 'react';
import '../assets/components/Pagination.scss';

const Pagination = ({gamesPerPage, totalGames, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className="pag-container">
                {pageNumbers.map(number => (
                    <li  className="pag-button" key={number}>
                        
                        <button onClick={()=> paginate(number)} href={`#${pageNumbers[number]}`}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;