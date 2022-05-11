import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import SearchContext from '../context/search/SearchContext';
import noPhoto from '../assets/nophoto.svg';

import Header from '../components/Header';
import Spinner from '../components/Spinner';

function DisplayShow() {
  const { searchData } = useContext(SearchContext);
  const { showId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!searchData || searchData.length === 0) navigate('/search');
  }, [searchData, navigate]);

  // Destructure show, if there is no data give a default value to avoid error

  const { show } = searchData[showId] || [];
  const image = show?.image?.original || show?.image?.medium || noPhoto;

  return (
    searchData &&
    searchData.length > 0 && (
      <section className='w-4/5 lg:w-3/5'>
        <img
          src={image}
          alt={show.name}
          className='w-1 h-1 absolute opacity-0'
          onLoad={() => setIsLoading(false)}
        />{' '}
        {/*preload img*/}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='flex flex-col-reverse sm:flex-row justify-evenly items-center '>
            <div className='sm:mr-12'>
              <Header title={show.name}></Header>
              <Link
                to='/search'
                className='btn btn-outline btn-sm flex gap-2 -mt-6 mb-5 mx-auto sm:w-64'
              >
                <FaArrowLeft />
                Back to search results
              </Link>

              <div className='bg-base-300 p-4 rounded-xl flex flex-col gap-4 sm:max-w-3xl'>
                {/*using dangerouslySetInnerHTML because data is in rich text (has <p> tags etc) */}
                <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
                <div className='flex flex-col gap-1'>
                  <p>
                    <strong>Language:</strong> {show.language ?? 'Unknown'}
                  </p>
                  <p>
                    <strong>Runtime:</strong>{' '}
                    {show.runtime ? show.runtime + ' min' : 'Unknown'}
                  </p>
                  <p>
                    <strong>Network:</strong> {show.network?.name ?? 'Unknown'}
                  </p>
                  <p>
                    <strong>Premiered:</strong> {show.premiered ?? 'Unknown'}
                  </p>
                  <p>
                    <strong>Status:</strong>{' '}
                    {show['status'] ? show['status'] : 'Unknown'}
                  </p>
                  {show['status'] === 'Ended' && (
                    <p>
                      <strong>Ended:</strong> {show.ended ?? 'Unknown'}
                    </p>
                  )}
                </div>
                <div>
                  <p>
                    <strong>Type:</strong> {show.type ?? 'Unknown'}
                  </p>
                  <p>
                    <strong>Genres:</strong>{' '}
                    {show.genres && show.genres.length > 0
                      ? show.genres.join(', ')
                      : 'Unknown'}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={image}
              alt={show.name}
              className='w-2/3 sm:w-2/5 rounded-lg'
            />
          </div>
        )}
      </section>
    )
  );
}
export default DisplayShow;
