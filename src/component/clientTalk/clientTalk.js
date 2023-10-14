import React, { useState, useEffect } from 'react';
import "./clientTalk.css"

const reviewsData = [
  {
    id: 1,
    author: 'Nikhil,',
    discription: 'Social-Media Influencr',
    text: 'Zudio Media designs are superb. They combine creativity and precision, resulting in visually stunning and effective work.',
  },
  {
    id: 2,
    author: 'Kaushik',
    discription: 'Blogger',
    text: 'Zudio Media excels in web design. Their creativity and attention to detail transformed our vision into a stunning, user-friendly website. Highly satisfied!',
  },
  {
    id: 3,
    author: 'Jonty',
    discription: 'Youtuber',
    text: '"Zudio Media social media designs are exceptional. Their creativity and expertise shine, capturing our brand essence beautifully. Highly recommend!',
  },  
  {
    id: 4,
    author: 'Deepak',
    discription: 'Founder @Puppy World',
    text: 'Zudio Media development team consistently delivers excellent solutions combining expertise and commitment for project success. Highly recommended!',
  },
];

const ClientTalk = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState(reviewsData[currentReviewIndex]);
  const [activePaginationIndex, setActivePaginationIndex] = useState(0);

  // Function to handle automatic review rotation
  const rotateReview = () => {
    const newIndex = (currentReviewIndex + 1) % reviewsData.length;
    setCurrentReviewIndex(newIndex);
    setCurrentReview(reviewsData[newIndex]);
    setActivePaginationIndex(newIndex); // Update active pagination dot
  };

  useEffect(() => {
    // Automatically rotate reviews every 5 seconds (5000 milliseconds)
    const rotationInterval = setInterval(rotateReview, 7000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(rotationInterval);
    };
  }, [currentReviewIndex]);

  // Generate pagination dots based on review count
  const paginationDots = reviewsData.map((_, index) => (
    <div
      key={index}
      className={`clints-pagi ${index === activePaginationIndex ? 'clint-active' : ''}`}
    ></div>
  ));

  return (
    <div className='ClientTalk'>
      <div className='rect'>
        <h3>Let’s Hear Our</h3>
        <h1>Client’s Talk</h1>
      </div>
      <p>{currentReview.text}</p>
      <div className='author-pagi'>
        <h4>
          {currentReview.author}
          <br />
          <span>{currentReview.discription}</span>
        </h4>
        <div className='clints-pagination'>{paginationDots}</div>
      </div>
    </div>
  );
};

export default ClientTalk
