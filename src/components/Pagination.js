import React from 'react';
import styles from '../styles/Pagination.module.css';




const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Logic to calculate page numbers to show based on the current page
    const getVisiblePages = (current, total) => {
      const delta = 3; // Number of pages around the current one
      let start = Math.max(2, current - delta);
      let end = Math.min(total - 1, current + delta);

      if (current === 1) {
        end = Math.min(total, 4); // Show more at the beginning if current page is 1
      }
  
      if (current === total) {
        start = Math.max(1, total - 3); // Show more at the end if current page is last page
      }
  
      let pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      return pages;
    };
  
    const visiblePages = getVisiblePages(currentPage, totalPages);
  
    return (
      <div className={styles.pagination}>
        {/* Previous Button */}
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage <= 1}
        >
          &lt; Previous
        </button>
  
        {/* First Page */}
        <span 
          className={currentPage === 1 ? 'active' : ''} 
          onClick={() => onPageChange(1)}
        >
          1
        </span>
  
        {/* Ellipsis before the current window if necessary */}
        {currentPage > 4 && <span className={styles.ellipsis}>...</span>}
  
        {/* Dynamic Pages */}
        {visiblePages.map(page => (
          <span
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        ))}
  
        {/* Ellipsis after the current window if necessary */}
        {currentPage < totalPages - 3 && <span className={styles.ellipsis}>...</span>}
  
        {/* Last Page */}
        <span 
          className={currentPage === totalPages ? 'active' : ''} 
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </span>
  
        {/* Next Button */}
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage >= totalPages}
        >
          Next &gt;
        </button>
      </div>
    );
  };
  
  export default Pagination;
  