import React from 'react';
import './Features.scss'; 

const Features = () => {
  const features = [
    {
      icon: '/assets/images/Foot_1_1.svg',
      alt: 'Delivery truck',
      title: 'Free Delivery',
      description: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.'
    },
    {
      icon: '/assets/images/Foot_1_2.png',
      alt: 'Discount percent',
      title: 'Sales & discounts',
      description: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.'
    },
    {
      icon: '/assets/images/Foot_1_3.png',
      alt: 'Quality crown',
      title: 'Quality assurance',
      description: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.'
    }
  ];

  return (
    <section className="features container">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="icon">
            <img src={feature.icon} alt={feature.alt} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;