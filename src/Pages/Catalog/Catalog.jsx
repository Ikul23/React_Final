import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import FilterSort from '../../components/FilterSort/FilterSort';
import Pagination from '../../components/Pagination/Pagination';
import Features from '../../components/Features/Features';
import './Catalog.scss';

const Catalog = () => {
  // Данные товаров
  const products = [
    {
      id: 1,
      image: '../../assets/images/img1_catalog.png',
      name: 'ELLERY X M\'O CAPSULE',
      description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.00
    },
    
    {
      id: 9,
      image: '/react-final/public/assets/images/img9_catalog.png',
      name: 'ELLERY X M\'O CAPSULE',
      description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.00
    }
  ];

  return (
    <div className="catalog-page">
      <Header />
      
      <main className="catalog-main">
        {/* Фильтры и сортировка */}
        <FilterSort />
        
        {/* Сетка товаров */}
        <section className="product-grid container">
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </section>

        {/* Пагинация */}
        <Pagination 
          currentPage={1} 
          totalPages={5} 
          onPageChange={(page) => console.log('Page changed:', page)} 
        />
      </main>

      <Features />
      <Footer />
    </div>
  );
};

export default Catalog;