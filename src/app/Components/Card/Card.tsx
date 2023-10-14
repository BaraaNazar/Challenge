import React from 'react';
import Image from 'next/image';
import img from '../../../../public/my-full-about-photo.jpg';
import StarRating from '../StarRating/StarRating';
import AvailableColors from '../AvailableColors/AvailableColors';

interface CardProps {
  imgSrc: string;
  brandName: string;
  itemName: string;
  originalValue: string;
  value: string;
  colors: string[];
  currency: string;
  rating: string;
}

const Card: React.FC<CardProps> = ({
  imgSrc,
  itemName,
  brandName,
  value,
  originalValue,
  colors,
  currency,
  rating,
}) => {
  return (
    <li className='rounded-lg shadow-lg font-sans md:w-[240px] max-w-sm my-4'>
      <div className='flex justify-center items-center  p-3 w-full '>
        <Image
          className='h-56 w-auto'
          src={imgSrc}
          alt=''
          width={240}
          height={288}
        />
      </div>
      <div className='px-4 space-x-2 '>
        <h5 className=' text-xl  text-[#484848]'>
          {itemName.length > 27 ? itemName.slice(0, 27) + '...' : itemName}
        </h5>
      </div>
      <div className='flex items-center justify-between px-4 space-x-2 pb-2 '>
        <p className=' font-normal text-[#8A8A8A] text-sm'>{brandName}</p>
        <StarRating rating={rating} />
      </div>
      <div className='flex items-end justify-between px-4 space-x-2 pb-2  h-14 md:w-[244px]'>
        <div className=''>
          <div className='line-through text-[#c0464b] text-base'>
            {originalValue == value ? '' : `${originalValue} ${currency}`}
          </div>
          <div className='text-2xl font-base text-[#484848] '>{`${value} ${currency}`}</div>
        </div>
        <AvailableColors colors={colors} />
      </div>
    </li>
  );
};

export default Card;
