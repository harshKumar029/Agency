import React, { useState } from 'react';
import './ourwork.css';

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('socialMedia');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderAds = () => {
    if (selectedCategory === 'socialMedia') {
      return (
        <>
          <div className='first'>socialmedia Ad 1</div>
          <div className='second'>socialmedia Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'ads') {
      return (
        <>
          <div className='first'>Ads Ad 1</div>
          <div className='second'>Ads Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'logo') {
      return (
        <>
          <div className='first'>logo Ad 1</div>
          <div className='second'>logo Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'identity') {
      return (
        <>
          <div className='first'>identity Ad 1</div>
          <div className='second'>identity Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'productMockup') {
      return (
        <>
          <div className='first'>productMockup Ad 1</div>
          <div className='second'>productMockup Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'uiUx') {
      return (
        <>
          <div className='first'>uiUx Ad 1</div>
          <div className='second'>uiUx Ad 2</div>
        </>
      );
    }

    // You can add more categories and their content as needed
  };

  return (
    <div className='OurWork'>
      <div className='OurWorkHead'>
        <h4>OUR WORK</h4>
        <h1>What We Do at Name</h1>
      </div>
      <div className='workCategory' id='workcat'>
        <div
          className={selectedCategory === 'socialMedia' ? 'workSocial active' : 'workSocial'}
          onClick={() => handleCategoryChange('socialMedia')}
        >
          SOCIAL MEDIA
        </div>
        <div
          className={selectedCategory === 'ads' ? 'active' : ''}
          onClick={() => handleCategoryChange('ads')}
        >
          ADS
        </div>
        <div
          className={selectedCategory === 'logo' ? 'active' : ''}
          onClick={() => handleCategoryChange('logo')}
        >
          LOGO
        </div>
        <div
          className={selectedCategory === 'identity' ? 'active' : ''}
          onClick={() => handleCategoryChange('identity')}
        >
          IDENTITY
        </div>
        <div
          className={selectedCategory === 'productMockup' ? 'active' : ''}
          onClick={() => handleCategoryChange('productMockup')}
        >
          PRODUCT MOCKUP
        </div>
        <div
          className={selectedCategory === 'uiUx' ? 'active' : ''}
          onClick={() => handleCategoryChange('uiUx')}
        >
          UI UX
        </div>
      </div>
      <div className='ourAds'>{renderAds()}</div>
      <div className='pagination'>
        <div className='pagi active'></div>
        <div className='pagi'></div>
        <div className='pagi'></div>
        <div className='pagi'></div>
      </div>
    </div>
  );
};

export default OurWork;

