import React, { useState, useEffect } from 'react';
import './ourwork.css';

const OurWork = () => {
  const itemList = document.getElementById('item-list');
  const itemsPerPage = 2; // Number of items per page
  const totalItems = 5; // Total number of items
  
  function updatePaginationButtons(currentPage) {

    console.log(document.getElementsByClassName("ourAds")[0].scrollWidth - window.innerWidth)
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ' ';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
     
        const button = document.createElement('div');
        button.className = "pagi pagi" + (i);
        button.addEventListener('click', () => {
          updatePaginationButtons(i);
        });
        pagination.appendChild(button);
       
      
      if (i === currentPage) {
        button.classList.add('active');
        if (selectedCategory === 'socialMedia') {
          window.location = "#social" + (i+1)
        } else if (selectedCategory === 'ads') {
          window.location = "#ads" + (i+1)
        } else if (selectedCategory === 'logo') {
          window.location = "#logo" + (i+1)
        } else if (selectedCategory === 'identity') {
          window.location = "#identity" + (i+1)
        } else if (selectedCategory === 'productMockup') {
          window.location = "#productMockup" + (i+1)
        } else if (selectedCategory === 'uiUx') {
          window.location = "#UiUx" + (i+1)
        }
        console.log(i)
      }

    }
  }

  useEffect(() => {
    updatePaginationButtons(1);
    //Runs on every render
  });
  useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('socialMedia');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderAds = () => {
    if (selectedCategory === 'socialMedia') {
      return (
        <>
          <div className='first imgContainer' id="social1"><img src='assets/img/ourWork/post1.png' /></div>
          <div className='second imgContainer' id="social2"><img src='assets/img/ourWork/post2.png' /></div>
          <div className='first imgContainer' id="social3"><img src='assets/img/ourWork/post1.png' /></div>
          <div className='first imgContainer' id="social4"><img src='assets/img/ourWork/post1.png' /></div>
          <div className='first imgContainer' id="social5"><img src='assets/img/ourWork/post1.png' /></div>
        </>
      );
    } else if (selectedCategory === 'ads') {
      return (
        <>
          <div className='first imgContainer' id="ads1"><img src='assets/img/ourWork/post2.png' /></div>
          <div className='second imgContainer' id='ads2'><img src='assets/img/ourWork/post1.png' /></div>
        </>
      );
    } else if (selectedCategory === 'logo') {
      return (
        <>
          <div className='first imgContainer' id='logo1'>logo Ad 1</div>
          <div className='second imgContainer' id='logo2'>logo Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'identity') {
      return (
        <>
          <div className='first imgContainer' id='identity1'>identity Ad 1</div>
          <div className='second imgContainer' id='identity2'>identity Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'productMockup') {
      return (
        <>
          <div className='first imgContainer' id='productMockup1'>productMockup Ad 1</div>
          <div className='second imgContainer' id='productMockup2'>productMockup Ad 2</div>
        </>
      );
    } else if (selectedCategory === 'uiUx') {
      return (
        <>
          <div className='first imgContainer' id='UiUx1'>uiUx Ad 1</div>
          <div className='second imgContainer' id='UiUx2'>uiUx Ad 2</div>
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
      {/* <div className='pagination'>
        <div className='pagi active'></div>
        <div className='pagi'></div>
        <div className='pagi'></div>
        <div className='pagi'></div>
      </div> */}
      <div className="pagination" id="pagination">
      </div>
    </div>
  );
};

export default OurWork;

