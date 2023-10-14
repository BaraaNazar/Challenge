import React from 'react';

interface CategoryButtonProps {
  key: string;
  categoryName: string;
  onClick: () => void;
  active: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  key,
  categoryName,
  onClick,
  active,
}) => {
  return (
    <li className='py-4 ' id={key}>
      <button
        onClick={onClick}
        className={`
          ${
            active && categoryName === active
              ? 'bg-black text-white shadow-xl'
              : 'bg-gray-50 text-[#8A8A8A] hover:bg-gray-100 '
          } text-xs md:text-base font-light font-sans  md:py-4 md:px-8  py-2 px-4 h-16 w-28 md:h-full md:w-full border-none  rounded-xl`}
      >
        {categoryName
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </button>
    </li>
  );
};

export default CategoryButton;
