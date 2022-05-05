import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SearchContext from '../context/search/SearchContext';

function DisplayShow() {
  const { searchData } = useContext(SearchContext);
  const { showId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchData || searchData.length === 0) navigate('/search');
  }, [searchData, navigate]);

  // Destructure show, if there is no data give a default value to avoid error

  const { show } = searchData[showId] || [];

  return searchData && <div>DisplayShow</div>;
}
export default DisplayShow;
