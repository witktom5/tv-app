import { useState, useContext } from 'react';
import { useEffectOnce } from '../hooks/useEffectOnce';
import TopShowsContext from '../context/topShows/TopShowContext';

import axios from 'axios';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

function TopShows() {
  const [isLoading, setIsLoading] = useState(false);
  const { topShows, setTopShows } = useContext(TopShowsContext);

  useEffectOnce(() => {
    // fetch most popular shows from API (returns top 20)
    const fetchTopShows = async () => {
      try {
        setIsLoading(true);
        const API_URL = 'https://www.episodate.com/api/';
        const res = await axios.get(`${API_URL}most-popular?page=1`);
        const { tv_shows } = res.data;
        const ids = tv_shows.map((show) => show.id);
        // only take top 5 shows to not fetch the API too much
        for (let i = 0; i < 5; i++) {
          console.log(i);
          const res = await axios.get(`${API_URL}show-details?q=${ids[i]}`);
          setTopShows((prevState) => [...prevState, res.data]);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    if (topShows.length === 0) fetchTopShows();
  }, [topShows.length, setTopShows]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className='w-4/5 lg:w-3/5'>
      <Header title={'Top Shows'} />
    </section>
  );
}
export default TopShows;
