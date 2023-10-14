import React from 'react';

interface AvailableColorsProps {
  colors: string[];
}

const AvailableColors: React.FC<AvailableColorsProps> = ({ colors }) => {
  return (
    <ul className='flex items-center w-fit justify-center py-4'>
      {colors.length < 2 ? (
        colors.map((color) => (
          <li
            className={`w-7 h-7 rounded-l-full rounded-r-none shadow-lg `}
            style={{ backgroundColor: color }}
            key={color}
          ></li>
        ))
      ) : (
        <ul className='flex justify-between w-fit'>
          <li
            className={` w-7 h-7   rounded-full shadow-lg `}
            key={colors[0]}
            style={{ backgroundColor: colors[0] }}
          ></li>
          <li
            className={`absolute ml-3 w-7 h-7  rounded-full shadow-lg `}
            key={colors[1]}
            style={{ backgroundColor: colors[1] }}
          ></li>
          <li
            className={`absolute ml-6  w-7 h-7 font-light text-sm rounded-full shadow-lg bg-gray-300 text-center flex justify-center items-center`}
            key='more-colors'
          >
            +{colors.length - 2}
          </li>
        </ul>
      )}
    </ul>
  );
};

export default AvailableColors;
