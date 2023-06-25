import React from 'react';
import Image from 'next/image';
import poster from '../public/assets/poster.png';


const Main = () => {
  return (
    <div id='home' className=''>
      <div className='w-full h-full m-auto  rounded-xl flex items-center justify-center p-4 S'>
        <Image
          src={poster}
          alt='/'
          fit="contain"
          width={550}
          height={800}
        />
      </div>
    </div>
  );
};

export default Main;
