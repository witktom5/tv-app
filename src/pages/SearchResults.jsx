import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/search/SearchContext';

import Header from '../components/Header';

function SearchResults() {
  const { searchText, searchData } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText.replace(/\s/g, '') === '') navigate('/');
  }, []);

  return (
    <section>
      <Header title={`Search results for "${searchText}"`} />
      <div>
        {searchData.map((show, id) => (
          <div key={id}>Show {id}</div>
        ))}
      </div>
    </section>
  );
}
export default SearchResults;
