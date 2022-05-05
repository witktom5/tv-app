import noPhoto from '../assets/nophoto.svg';
import { Link } from 'react-router-dom';

function SearchItem({
  name,
  language,
  genres,
  image,
  summary,
  runtime,
  status,
  premiered,
  ended,
  id,
}) {
  // shorten summary to max 220 characters,
  // handle no summary situations

  const shortenSummary = (summary) => {
    if (summary) {
      if (summary.toString().length < 220) return summary;
      return (
        summary.toString().slice(3, 220).trim() +
        '<span class="opacity-80">... (more in details)</span>'
      );
    } else {
      return 'Summary for this TV show is unavaiable';
    }
  };

  return (
    <div className='bg-base-200 rounded-xl shadow-xl mb-8 flex flex-col sm:flex-row gap-2 mx-auto'>
      <div className='flex flex-row sm:flex-col bg-base-300 flex-none rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none'>
        <img
          src={image ?? noPhoto}
          alt={name}
          className='tv-show-img object-scale-down bg-no-repeat rounded-tl-xl'
        />
        <div className='p-3 flex flex-col justify-evenly h-full mx-auto'>
          <p>
            <strong>Language:</strong> {language ?? 'Unknown'}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime ? runtime + ' min' : 'Unknown'}
          </p>
          <p>
            <strong>Premiered:</strong> {premiered ?? 'Unknown'}
          </p>
          <p>
            <strong>Status:</strong> {status ? status : 'Unknown'}
          </p>
          {status === 'Ended' && (
            <p>
              <strong>Ended:</strong> {ended ?? 'Unknown'}
            </p>
          )}
        </div>
      </div>
      <div className='flex flex-col gap-4 p-3 pr-6 w-full'>
        <h2 className='card-title text-2xl pt-2 md:pt-4 pb-4 self-center'>
          {name}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: shortenSummary(summary) }}
          className='my-auto px-2'
        />
        <Link to={`/search/results/${id}`} className='btn btn-block mt-auto'>
          Details
        </Link>
        <p>
          <strong>Genres:</strong>{' '}
          {genres && genres.length > 0 ? genres.join(', ') : 'Unknown'}
        </p>
      </div>
    </div>
  );
}
export default SearchItem;
