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
  }, [navigate, searchData]);

  const onClickBack = () => {
    setSearchData(null);
    setSearchText('');
    navigate('/search');
  };

  return (
    <section className='w-4/5'>
      <Header title={`Search results for "${searchText}"`} />
      <h3 className='text-center text-xl -mt-10 mb-6'>
        {searchData.length > 0
          ? searchData.length +
            ` result${searchData.length === 1 ? '' : 's'} found`
          : 'No results found'}
      </h3>

      <button
        onClick={onClickBack}
        className='btn btn-outline btn-sm flex gap-2 mb-7 mx-auto'
      >
        <FaArrowLeft /> Back to Search
      </button>

      <div className='grid xl:grid-cols-2 gap-x-8 w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-full 2xl:w-3/4 3xl:w-2/3 mx-auto'>
        {searchData &&
          searchData.map((el, id) => (
            <SearchItem
              key={id}
              name={el.show.name}
              summary={el.show.summary}
              language={el.show.language}
              runtime={el.show.runtime}
              genres={el.show.genres}
              status={el.show.status}
              premiered={el.show.premiered}
              ended={el.show.ended}
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
