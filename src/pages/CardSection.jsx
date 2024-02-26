import React from 'react';
import './CardSection.css'; // Import CSS file for styling
import Image from './download.png';

const RelatedDeals = () => {
  // Array of deals
  const deals = [
    { id: 1, discount: '20% off', limitedTime: 'Limited time', productName: 'Web Builder 1', productDescription: 'Computer model classic with Wix support', originalPrice: '$49.96', discountedPrice: '$36.96', discountTag: '(20% off)' },
    { id: 2, discount: '30% off', limitedTime: 'Limited time', productName: 'Web Builder 2', productDescription: 'Computer model classic with Wix support', originalPrice: '$59.96', discountedPrice: '$41.96', discountTag: '(30% off)' },
    { id: 3, discount: '25% off', limitedTime: 'Limited time', productName: 'Web Builder 3', productDescription: 'Computer model classic with Wix support', originalPrice: '$39.96', discountedPrice: '$29.96', discountTag: '(25% off)' },
    // Add more deals as needed
  ];

  return (
    <section className="related-deals">
      <h2 className="section-heading">Related deals you might like for</h2>
      <div className="card-section">
        {/* Loop through the deals array and generate a card for each deal */}
        {deals.map(deal => (
          <div key={deal.id} className="card">
            <img src={Image} alt={`Deal ${deal.id}`} className="deal-img" />
            <div className="deal-info">
              <div className="discount-info">
                <p className="discount">{deal.discount}</p>
                <p className="limited-time">{deal.limitedTime}</p>
              </div>
              <h3 className="product-name">{deal.productName}</h3>
              <p className="product-description">{deal.productDescription}</p>
              <div className="price-section">
                <p className="original-price">{deal.originalPrice}</p>
                <p className="discounted-price">{deal.discountedPrice} <span className="discount-tag">{deal.discountTag}</span></p>
              </div>
              <button className="view-deal-button">View Deal</button>
            </div>
          </div>
        ))}
      </div>
      <div className="signup-section">
        <p className="signup-text">Sign up and get exclusive special deals</p>
        <div className="signup-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default RelatedDeals;
