// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './ourwork.css';

const OurWork = () => {


  // changing button js

  const [selectedCategory, setSelectedCategory] = useState('socialMedia');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderAds = () => {
     if (selectedCategory === 'all') {
      return (
        <>
                  <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/socialmedia/voutch-pro.png' alt='socialmedia-img' /></div>
          <div className='second imgContainer' id="social2"><img src='assets/img/ourWork/socialmedia/billbergia.png' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social3"><img src='assets/img/ourWork/socialmedia/kismatguru.png' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/ads/Billbergia-ad.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/socialmedia/graphic-des.jpg' alt='socialmedia-img' /></div>
          <div className='second imgContainer' id="social1"><img src='assets/img/ourWork/socialmedia/Dussehra.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/ads/masterclass-ad.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/ads/system-des-ad.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/product-moc/product.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/product-moc/product-ad.png' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/product-moc/god-tshirt-ad.png' alt='socialmedia-img' /></div>
        </>
      ); 
      } else if (selectedCategory === 'socialMedia') {
      return (
        <>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/socialmedia/graphic-des.jpg' alt='socialmedia-img' /></div>
          <div className='second imgContainer' id="social1"><img src='assets/img/ourWork/socialmedia/Dussehra.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/socialmedia/voutch-pro.png' alt='socialmedia-img' /></div>
          <div className='second imgContainer' id="social2"><img src='assets/img/ourWork/socialmedia/billbergia.png' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social3"><img src='assets/img/ourWork/socialmedia/kismatguru.png' alt='socialmedia-img' /></div>
        </>
      );
    } else if (selectedCategory === 'ads') {
      return (
        <>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/ads/Billbergia-ad.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/ads/masterclass-ad.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/ads/system-des-ad.jpg' alt='socialmedia-img' /></div>
        </>
      );
    } else if (selectedCategory === 'logo') {
      return (
        <>
          <div className='first'>logo Ad 1</div>
          <div className='second'>logo Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'productMockup') {
      return (
        <>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/product-moc/product.jpg' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/product-moc/product-ad.png' alt='socialmedia-img' /></div>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/product-moc/god-tshirt-ad.png' alt='socialmedia-img' /></div>
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
    <div className='OurWork' id='work'>
      <div className='OurWorkHead'>
        <h4>EXPLORE OUR</h4>
        <h1>Showcase of Creative Excellence</h1>
      </div>
      <div className='workCategory' id='workcat'>
      <div
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryChange('all')}
        >
          ALL
        </div>
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
      {/* <div className='pagination'>
        <div className='pagi active'></div>
        <div className='pagi'></div>
        <div className='pagi'></div>
        <div className='pagi'></div>
      </div> */}
    </div>
  );
};

export default OurWork;

