'use client';

import React, { useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import dataset from '../../../asset/dataset.json';
import Card from '../Card/Card';

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [active, setActive] = useState(false);

  const onClickCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setActive(true);
  };
  return (
    <div className='flex flex-col justify-center items-center w-full  font-serif p-12'>
      <section className='flex flex-col justify-center items-center text-center space-y-8 w-full py-9'>
        <h1 className='text-[#484848] md:text-[48px] text-4xl font-medium font-serif leading-none'>
          Miswag New Arrivals
        </h1>
        <div className='w-[90%] md:text-base text-sm font-sans font-light text-[#8A8A8A]'>
          Stay Ahead of the Curve with Miswag&#39;g Fresh Arrivals!
        </div>
      </section>
      <section>
        <ul className='flex justify-around items-center space-x-8 py-5 overflow-x-auto'>
          {Array.from(
            new Set(dataset.map((item) => item.category)).values()
          ).map((categoryName) => (
            <CategoryButton
              onClick={() => onClickCategory(categoryName)}
              key={categoryName}
              categoryName={categoryName}
              active={selectedCategory}
            />
          ))}
        </ul>
      </section>
      <section>
        <ul className='flex md:justify-start justify-center  items-center flex-wrap gap-4'>
          {dataset
            .filter(
              (item) =>
                selectedCategory === 'all' || item.category === selectedCategory
            )
            .map((item) => (
              <Card
                key={item.id}
                imgSrc={item.image}
                brandName={item.brand}
                colors={item.colors}
                itemName={item.title.EN}
                originalValue={item.price.original_value}
                value={item.price.value}
                currency={item.price.currency}
                rating={item.rating}
              />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default NewArrivals;
