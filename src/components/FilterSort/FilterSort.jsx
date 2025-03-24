import React, { useState } from 'react';
import './FilterSort.scss';

const FilterSort = ({ onFilterChange, onSortChange }) => {
  const [filters, setFilters] = useState({
    brand: [],
    trend: 'trend',
    size: [],
    price: 'price'
  });

  const brandOptions = [
    { value: '1', label: 'Brand 1' },
    { value: '2', label: 'Brand 2' },
    { value: '3', label: 'Brand 3' },
    { value: '4', label: 'Brand 4' }
  ];

  const sizeOptions = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' }
  ];

  const handleMultiSelectChange = (e, filterName) => {
    const options = e.target.options;
    const selectedValues = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    const newFilters = {
      ...filters,
      [filterName]: selectedValues
    };

    setFilters(newFilters);
    triggerCallbacks(newFilters);
  };

  const handleSingleSelectChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value
    };

    setFilters(newFilters);
    triggerCallbacks(newFilters);
  };

  const triggerCallbacks = (currentFilters) => {
    onFilterChange({
      brands: currentFilters.brand,
      sizes: currentFilters.size
    });
    
    onSortChange({
      trend: currentFilters.trend,
      price: currentFilters.price
    });
  };

  const resetFilters = () => {
    const resetState = {
      brand: [],
      trend: 'trend',
      size: [],
      price: 'price'
    };
    
    setFilters(resetState);
    triggerCallbacks(resetState);
  };

  return (
    <section className="filter-sort container">
      <div className="filter-controls">
        {/* Блок фильтрации с мультиселектом */}
        <div className="filter-group">
          <label htmlFor="brandFilter">FILTER BY BRAND:</label>
          <select
            id="brandFilter"
            name="brand"
            multiple
            size={3}
            value={filters.brand}
            onChange={(e) => handleMultiSelectChange(e, 'brand')}
            className="multi-select"
          >
            {brandOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sizeFilter">FILTER BY SIZE:</label>
          <select
            id="sizeFilter"
            name="size"
            multiple
            size={3}
            value={filters.size}
            onChange={(e) => handleMultiSelectChange(e, 'size')}
            className="multi-select"
          >
            {sizeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button onClick={resetFilters} className="reset-btn">
          RESET FILTERS
        </button>
      </div>

      {/* Блок сортировки */}
      <div className="sort-controls">
        <div className="sort-group">
          <label htmlFor="trend">SORT BY:</label>
          <select
            id="trend"
            name="trend"
            value={filters.trend}
            onChange={handleSingleSelectChange}
          >
            <option value="trend">TRENDING NOW</option>
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="bestseller">Bestseller</option>
          </select>
        </div>

        <div className="sort-group">
          <label htmlFor="price">PRICE:</label>
          <select
            id="price"
            name="price"
            value={filters.price}
            onChange={handleSingleSelectChange}
          >
            <option value="price">DEFAULT</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterSort;