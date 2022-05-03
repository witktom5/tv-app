import { useState, useEffect, useContext } from 'react';
import TopShowsContext from '../context/topShows/TopShowContext';

import axios from 'axios';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

function TopShows() {
  const [isLoading, setIsLoading] = useState(false);
  const { topShows, setTopShows } = useContext(TopShowsContext);

  useEffect(() => {
    const fetchTopShows = async () => {
      try {
        setIsLoading(true);
        const API_URL = 'https://www.episodate.com/api/';
        const res = await axios.get(`${API_URL}most-popular?page=1`);
        const { tv_shows } = res.data;
        const ids = tv_shows.map((show) => show.id);
        for (let id of ids) {
          const res = await axios.get(`${API_URL}show-details?q=${id}`);
          console.log(res);
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
