import React from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section className="pagination container">
      <div className="pagination__wrapper">
        {/* Кнопка "Назад" */}
        <button 
          className="pagination__arrow"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src="/assets/images/Left_arrow_pag.png" alt="Previous" />
        </button>

        {/* Номера страниц */}
        {pages.map(page => (
          <button
            key={page}
            className={`pagination__page ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Кнопка "Вперед" */}
        <button 
          className="pagination__arrow"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src="/assets/images/Right_arrow_pag.png" alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;