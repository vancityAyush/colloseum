import React from 'react';
import Link from 'next/link';
import events from '../data/events.json';



const Skills = () => {
  return (
    <div id='events' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Events
        </p>
        {
          events.map((event, index) => (

            <div key={index}>
              <h2 className='z-10 py-4'>{event.name}</h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {

                  event.eventsList.map((event, index1) => (

                    <div key={index1} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-900 '>
                      <div className=' gap-4 justify-center items-center'>
                        <div className='flex flex-col items-center justify-center'>
                          <Link href='/offstage'>
                            <h3>{event.name}</h3>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>


            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;
