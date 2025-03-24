import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Features from '../../components/Features/Features';
import './Registration.scss';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="registration-page">
      <Header />
      
      <main className="registration-main">
        {/* Breadcrumbs */}
        <section className="top-head container">
          <h1 className="top-head__heading">REGISTRATION</h1>
        </section>

        {/* Блок регистрации */}
        <section className="registration container">
          <div className="registration__container">
            <form className="registration__form" onSubmit={handleSubmit}>
              <h3>Your Name</h3>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="registration__input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="registration__input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <div className="registration__gender">
                <label className="registration__radio">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  <span className="registration__radio-text">Male</span>
                </label>
                <label className="registration__radio">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  <span className="registration__radio-text">Female</span>
                </label>
              </div>

              <h3>Login details</h3>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="registration__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="registration__input"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
              />
              <p className="registration__password-hint">
                Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
              </p>

              <button type="submit" className="registration__button">
                JOIN NOW <img src="../../assets/images/Registration_arrow.png" alt="Arrow" />
              </button>
            </form>

            <div className="registration__benefits">
              <h2>LOYALTY HAS ITS PERKS</h2>
              <p className="registration__benefits-text">
                Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as
                soon as you join:
              </p>

              <ul className="registration__benefits-list">
                <li>15% off welcome offer</li>
                <li>Free shipping, returns and exchanges on all orders</li>
                <li>$10 off a purchase on your birthday</li>
                <li>Early access to products</li>
                <li>Exclusive offers & rewards</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Features />
      <Footer />
    </div>
  );
};

export default Registration;