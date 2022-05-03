import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/search/SearchContext';
import { FaArrowLeft } from 'react-icons/fa';

import Header from '../components/Header';
import SearchItem from '../components/SearchItem';

function SearchResults() {
  const { searchText, searchData, setSearchData, setSearchText } =
    useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchData) navigate('/search');
  }, []);

  const onClickBack = () => {
    setSearchData(null);
    setSearchText('');
    navigate('/search');
  };

  return (
    <section className='w-4/5 lg:w-3/5'>
      <Header title={`Search results for "${searchText}"`} />
      <button
        onClick={onClickBack}
        className='btn btn-outline btn-sm flex gap-2 mb-4'
      >
        <FaArrowLeft /> Back to Search
      </button>

      <div>
        {searchData &&
          searchData.map((el, id) => (
            <SearchItem
              key={id}
              name={el.show.name}
              summary={el.show.summary}
              image={
                el.show.image
                  ? el.show.image.medium ?? el.show.image.original
                  : null
              }
            />
          ))}
      </div>
    </section>
  );
}
export default SearchResults;
