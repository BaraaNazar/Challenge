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
    <li className='rounded-lg shadow-lg font-sans lg:w-60 max-w-sm my-4'>
      <div className='flex justify-center items-center  py-4 w-full '>
        <Image
          className='h-64 w-auto'
          src={imgSrc}
          alt=''
          width={240}
          height={288}
        />
      </div>
      <div className='px-4'>
        <h5 className=' text-xl  text-[#484848]'>
          {itemName.length > 27 ? itemName.slice(0, 27) + '...' : itemName}
        </h5>
      </div>
      <div className='flex flex-col justify-center  py-1'>
        <div className='flex justify-between px-4'>
          <div className='flex flex-col'>
            <div className=''>
              <p className=' font-normal text-[#8A8A8A] text-sm'>{brandName}</p>
            </div>
            <div className=''>
              <div className='line-through text-[#c0464b] text-base'>
                {originalValue == value ? '' : `${originalValue} ${currency}`}
              </div>
              <div className='text-2xl font-base text-[#484848] '>{`${value} ${currency}`}</div>
            </div>
          </div>
          <section className='flex flex-wrap justify-center items-start'>
            <StarRating rating={rating} />
            <AvailableColors colors={colors} />
          </section>
        </div>
      </div>
    </li>
  );
};

export default Card;
