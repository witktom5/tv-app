import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import bgImage from '../assets/bg.jpg';
import Spinner from '../components/Spinner';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Wait for image to load

  return (
    <section className='absolute h-screen w-screen top-0 left-0 right-0 bottom-0 container-home flex bg-base-300'>
      <img
        src={bgImage}
        alt='...'
        /*preload img*/ onLoad={() => setIsLoading(false)}
        className='opacity-0 absolute w-1 h-1'
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img
            src={bgImage}
            alt='...'
            className='absolute h-screen w-screen top-0 left-0 right-0 bottom-0 object-cover'
          />
          <div className='bg-opacity-70 card-home rounded-md p-10 w-4/5 max-w-xl z-50'>
            <Header title={'TV Show Finder'} />
            <div className='flex flex-col sm:flex-row gap-3 justify-between sm:justify-evenly pb-4'>
              <Link className='btn sm:btn-lg btn-home' to='/search'>
                Find TV Shows
              </Link>
              <Link className='btn sm:btn-lg btn-home' to='/search'>
                See Top Shows
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
export default Home;
