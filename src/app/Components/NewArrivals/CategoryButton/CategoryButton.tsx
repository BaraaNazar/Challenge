import React from 'react';

interface CategoryButtonProps {
  key: string;
  categoryName: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  key,
  categoryName,
}) => {
  return (
    <li id={key}>
      <button className='bg-gray-50 font-sans hover:bg-gray-100 text-gray-500 font-semibold py-3 px-8 border  rounded-lg shadow'>
        {categoryName
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </button>
    </li>
  );
};

export default CategoryButton;
