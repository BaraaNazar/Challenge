import React from 'react';
import CategoryButton from './CategoryButton/CategoryButton';
import dataset from '../../../asset/dataset.json';

const NewArrivals = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full  font-serif'>
      <section className='flex flex-col justify-center items-center text-center space-y-4 w-full py-8'>
        <h1 className='text-gray-700 text-4xl'>Miswag New Arrivals</h1>
        <div className='w-[90%] text-xs font-sans text-gray-500'>
          Stay Ahead of the Curve with Miswag&#39;g Fresh Arrivals!
        </div>
      </section>
      <section>
        <ul className='flex justify-around items-center space-x-6 py-8'>
          {dataset.map((data) => (
            <CategoryButton key={data.id} categoryName={data.category} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NewArrivals;
