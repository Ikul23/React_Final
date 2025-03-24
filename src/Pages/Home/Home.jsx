import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Features from '../../components/Features/Features';
import Product from '../../components/Product/Product';
import './Home.scss';

const Home = () => {
  // Данные для блока распродаж
  const saleItems = [
    {
      image: '../../assets/images/si1.jpg',
      discount: '30% OFF',
      category: 'FOR WOMEN'
    },
    {
      image: '../../assets/images/si2.jpg',
      discount: '30% OFF',
      category: 'FOR MEN'
    },
    {
      image: '../../assets/images/si3.jpg',
      discount: '30% OFF',
      category: 'FOR KIDS'
    },
    {
      image: '../../assets/images/sibig.jpg',
      discount: '30% OFF',
      category: 'ACCESORIES',
      big: true
    }
  ];

  // Данные товаров
  const featuredProducts = [
    {
      id: 1,
      image: '../../assets/images/img1_catalog.png',
      name: 'ELLERY X M\'O CAPSULE',
      description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
      price: 52.00
    },
    
  ];

  return (
    <div className="home-page">
      <Header />
      
      {/* Промо-блок */}
      <section className="promo">
        <img className="promo__img" src="../../assets/images/promo.png" alt="Brand" />
        <div className="promo__content">
          <div className="promo__info">
            <h1 className="promo__title">THE BRAND</h1>
            <h2 className="promo__heading">OF LUXERIOUS <span>FASHION</span></h2>
          </div>
        </div>
      </section>

      {/* Блок распродаж */}
      <section className="sale container">
        <div className="sale-grid">
          {saleItems.map((item, index) => (
            <div 
              key={index} 
              className={`sale-item ${item.big ? 'sale-item_big' : ''}`}
            >
              <img src={item.image} alt={item.category} />
              <div className="sale-content">
                <p className="sale-text">{item.discount}</p>
                <h3 className="sale-category">{item.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Рекомендуемые товары */}
      <section className="featured container">
        <div className="featured-header">
          <h2>Featured Items</h2>
          <p>Shop for items based on what we featured in this week</p>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map(product => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        <div className="browse-all">
          <button className="btn">Browse All Products</button>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
};

export default Home;