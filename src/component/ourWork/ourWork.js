import React, { useState, useEffect } from 'react';
import './ourwork.css';

const OurWork = () => {


  // changing button js

  const [selectedCategory, setSelectedCategory] = useState('socialMedia');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      scrollActivity();
    }, 1000);
  };
  const scrollActivity = () => {
    const scrollContent = document.getElementById("ourAds");
    let isDragging = false;
    let startX;
    let scrollLeft;
    scrollContent.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - scrollContent.offsetLeft;
      scrollLeft = scrollContent.scrollLeft;
    });

    scrollContent.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContent.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the sensitivity
      scrollContent.scrollLeft = scrollLeft - walk;
    });
    scrollContent.addEventListener('mouseup', () => {
      isDragging = false;
      scrollContent.style.cursor = 'grab';
    });

    scrollContent.addEventListener('mouseleave', () => {
      isDragging = false;
      scrollContent.style.cursor = 'grab';
    });

    const scrollableDiv = document.getElementById("ourAds");
    const pagination = document.getElementById("pagination");
    const links = pagination.querySelectorAll(".pagi");
    scrollableDiv.addEventListener("scroll", () => {
      const scrollPercentage = (scrollableDiv.scrollLeft / (scrollableDiv.scrollWidth - scrollableDiv.clientWidth)) * 101;

      // Determine which pagination link should be active based on scroll position
      links.forEach((link, index) => {
        if (scrollPercentage >= (index * 100) / (links.length - 1) && scrollPercentage <= ((index + 1) * 100) / (links.length - 1)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }
  function updatePaginationButtons(currentPage) {
    const itemsPerPage = 2; // Number of items per page

    const totalItems = document.getElementsByClassName('items').length; // Total number of items

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ' ';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('div');
      button.className = "pagi pagi" + (i);
      button.addEventListener('click', () => {
        // updatePaginationButtons(i);
      });
      pagination.appendChild(button);


      if (i === currentPage) {
        button.classList.add('active');
      }

    }
  }

  useEffect(() => {

    updatePaginationButtons(1);
    //Runs on every render
  });
  useEffect(() => {
    setTimeout(() => {
      scrollActivity();
    }, 1000);
  }, []);

  const renderAds = () => {

    if (selectedCategory === 'all') {
      return (
        <>
          <div className='items first imgContainer'><img src='assets/img/ourWork/socialmedia/voutch-pro.webp' alt='Zudiomediawork-img' /></div>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/ads/masterclass-ad.webp' alt='Zudiomediawork-img' /></div>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/socialmedia/graphic-des.webp' alt='Zudiomediawork-img' /></div>
          <div className='items second imgContainer'><img src='assets/img/ourWork/socialmedia/Dussehra.webp' alt='Zudiomediawork-img' /></div>
          <div className='items second imgContainer'><img src='assets/img/ourWork/socialmedia/resume-guide.webp' alt='Zudiomediawork-img' /></div>
          {/* <div className='items first imgContainer'><img src='assets/img/ourWork/socialmedia/kismatguru.webp' alt='Zudiomediawork-img' /></div> */}
          {/* <div className='items first imgContainer' ><img src='assets/img/ourWork/ads/Billbergia-ad.webp' alt='Zudiomediawork-img' /></div> */}
          <div className='items first imgContainer' ><img src='assets/img/ourWork/ads/system-des-ad.webp' alt='Zudiomediawork-img' /></div>
          {/* <div className='items first imgContainer' ><img src='assets/img/ourWork/product-moc/product.webp' alt='Zudiomediawork-img' /></div> */}
          <div className='items first imgContainer' ><img src='assets/img/ourWork/product-moc/product-ad.webp' alt='Zudiomediawork-img' /></div>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/product-moc/god-tshirt-ad.webp' alt='Zudiomediawork-img' /></div>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/uiux/College-Dunia-1.webp' alt='ui&ux-img' /></div>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/uiux/splash.webp' alt='ui&ux-img' /></div>
        </>
      );
    } else if (selectedCategory === 'socialMedia') {
      return (
        <>
          <div className='items first imgContainer'  ><img src='assets/img/ourWork/socialmedia/graphic-des.webp' alt='socialmedia-img' /></div>
          <div className='items second imgContainer'  ><img src='assets/img/ourWork/socialmedia/Dussehra.webp' alt='socialmedia-img' /></div>
          <div className='items first imgContainer'><img src='assets/img/ourWork/socialmedia/voutch-pro.webp' alt='socialmedia-img' /></div>
          <div className='items second imgContainer' ><img src='assets/img/ourWork/socialmedia/resume-guide.webp' alt='socialmedia-img' /></div>
          {/* <div className='items first imgContainer' ><img src='assets/img/ourWork/socialmedia/kismatguru.webp' alt='socialmedia-img' /></div> */}
        </>
      );
    } else if (selectedCategory === 'ads') {
      return (
        <>
          {/* <div className='items first imgContainer'><img src='assets/img/ourWork/ads/Billbergia-ad.webp' alt='ads-img' /></div> */}
          <div className='items first imgContainer'><img src='assets/img/ourWork/ads/masterclass-ad.webp' alt='ads-img' /></div>
          <div className='items first imgContainer'><img src='assets/img/ourWork/ads/system-des-ad.webp' alt='ads-img' /></div>
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
          {/* <div className='items first imgContainer'><img src='assets/img/ourWork/product-moc/product.webp' alt='productMockup-img' /></div> */}
          <div className='items first imgContainer'><img src='assets/img/ourWork/product-moc/product-ad.webp' alt='productMockup-img' /></div>
          <div className='items first imgContainer'><img src='assets/img/ourWork/product-moc/god-tshirt-ad.webp' alt='productMockup-img' /></div>
        </>
      );
    } else if (selectedCategory === 'uiUx') {
      return (
        <>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/uiux/College-Dunia-1.webp' alt='ui&ux-img' /></div>
          <div className='items first imgContainer' ><img src='assets/img/ourWork/uiux/splash.webp' alt='ui&ux-img' /></div>
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
        // onClick={() => handleCategoryChange('logo')}   //under process to activate uncomment.
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
      <div className='ourAds' id='ourAds'  >{renderAds()}</div>
      <div className='pagination' id='pagination'>

      </div>
    </div>
  );
};

export default OurWork;