import React from 'react';
import Image from 'next/image';
import left from '../public/assets/left.png';
import right from '../public/assets/right.png';
import logo from '../public/assets/logo.svg';



const Main = ({ children }) => {
  return (
    <>
      <div className='fixed flex w-full h-full justify-between'>
        <div className='md:w-[20%] w-1/3 h-[50%]'>
          <Image
            src={left}
            alt='/'
            fit="contain"
            objectPosition={{ x: 0, y: 0 }}
            className='fixed -z-10 left-0 top-0'
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <div className='md:w-[40%] h-[50%] w-1/2'>
          <Image
            src={right}
            alt='/'
            fit="contain"
            className='fixed -z-10 right-0 top-0'
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div >
      <div className=''>
        {children}
      </div>
    </>
  );
};

export default Main;
