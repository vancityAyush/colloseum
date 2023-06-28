import React from 'react';
import Image from 'next/image';
import left from '../public/assets/left.png';
import right from '../public/assets/right.png';
import logo from '../public/assets/logo.svg';



const Main = () => {
  return (
    <div id='home' className='fixed flex w-full h-full justify-between'>
      <div className='w-[20%] h-[50%]'>
        <Image
          src={left}
          alt='/'
          fit="contain"
          className='fixed z-1 left-0 top-0'
        />
      </div>
      <div className='w-[40%] h-[50%]'>
        <Image
          src={right}
          alt='/'
          fit="contain"
          className='fixed z-1 right-0 top-0'
        />
      </div>
    </div>
  );
};

export default Main;
