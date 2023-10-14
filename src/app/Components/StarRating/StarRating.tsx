import React from 'react';

interface StarRatingProps {
  rating: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.round(+rating);
  const emptyStars = maxRating - filledStars;

  return (
    <div className='flex items-center'>
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg
          key={`star-empty-${index}`}
          className='h-5 w-5 fill-current text-gray-300'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 51 48'
        >
          <path d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z' />
        </svg>
      ))}
      {Array.from({ length: filledStars }).map((_, index) => (
        <svg
          key={`star-filled-${index}`}
          className='h-5 w-5 fill-current text-yellow-500'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 51 48'
        >
          <path d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z' />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
