import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item border-2 px-4 py-2 hover:bg-slate-600 hover:text-white'>
            <a onClick={() => paginate(number)} href='!#' className='page-link  cursor-pointer '>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;