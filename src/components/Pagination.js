import React from 'react';

export const Pagination = ({postsPerPage,totalPosts,setCurrentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil((totalPosts / postsPerPage)); i++){
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbers.map(num => (
                <li key={num} className="page-item">
                    <a className="page-link" href="#" onClick={()=> setCurrentPage(num)}>
                        {num}
                    </a>
                </li>
            ))}
        </ul>
    )
}