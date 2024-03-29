import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/search/SearchContext';
import { FaSearch } from 'react-icons/fa';
import Header from '../components/Header';
import axios from 'axios';
import Spinner from '../components/Spinner';

function Search() {
  const [isLoading, setIsLoading] = useState(false);

  const { setSearchData, searchText, searchData, setSearchText } =
    useContext(SearchContext);

  const API_URL = 'https://api.tvmaze.com/search/shows?q=';

  const navigate = useNavigate();

  useEffect(() => {
    if (searchData && searchData.length > 1) navigate('/search/results');
  });

  // fetch tv shows from api

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}${searchText}`);
      setSearchData(res.data);
      navigate('/search/results');
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <section className='w-4/5'>
      <Header title={'Search for TV Shows'} />
      <div>
        <form onSubmit={onSubmit}>
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
                type='submit'
                className='btn btn-square btn-primary'
                aria-label='search'
              >
                <FaSearch className='w-5 h-5' />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Search;
