import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Header from '../components/Header';

function Home() {
  const [searchText, setSearchText] = useState('');

  const onClick = () => {
    console.log('clicked');
  };

  return (
    <section className='w-4/5'>
      <Header title={'Search TV Shows'} />
      <div>
        <div className='form-control'>
          <div className='input-group justify-center mt-7'>
            <input
              type='text'
              placeholder='Search...'
              className='input input-bordered w-full max-w-lg'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className='btn btn-square'
              aria-label='search'
              onClick={onClick}
            >
              <FaSearch className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
