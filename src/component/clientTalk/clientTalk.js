import React, { useState, useEffect } from 'react';
import "./clientTalk.css"

const reviewsData = [
  {
    id: 1,
    author: 'John Doe',
    discription: 'social influencer',
    text: 'qwihh whdwi Lorem ipsum dolor sit amecininundcw cwbihsectetur adipiscing elit. Nullam vel turpis nec nunc aliquet vestibulum.',
  },
  {
    id: 2,
    author: 'Jane',
    discription: 'social influencer',
    text: 'shjhje hwhj sample review. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec nunc aliquet vestibulum.',
  },
  {
    id: 3,
    author: 'Rahul',
    discription: 'social influencer',
    text: 'noewn iuewqniu sample review. Lorem ipsum dolor sit amet, adipiscing elit. Nullam vel turpis nec nunc aliquet vestibulum.',
  },
  {
    id: 4,
    author: 'nisha',
    discription: 'social influencer',
    text: 'lorem uonbicbiebw ijqeibcis a sample review. Lorem ipsum dolor sit amet,adipiscing elit. Nullam vel turpis nec nunc aliquet vestibulum.',
  },
  {
    id: 5,
    author: 'sonali',
    discription: 'social influencer',
    text: 'heloooooooooo is a sample review. Lorem ipsum dolor sit amet, cg elit. Nullam vel turpis nec nunc aliquet vestibulum.',
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
    const rotationInterval = setInterval(rotateReview, 5000);

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
