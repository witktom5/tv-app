import noPhoto from '../assets/nophoto.svg';

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
}) {
  // shorten summary to max 300 characters

  const shortenSummary = (summary) => {
    if (summary) {
      if (summary.toString().length < 300) return summary;
      return summary.toString().slice(3, 300).trim() + '... (more in details)';
    } else {
      return 'Summary unavaiable';
    }
  };

  return (
    <div className='bg-base-200 rounded-xl shadow-xl mb-8 flex flex-col sm:flex-row gap-2'>
      <div className='flex flex-row sm:flex-col bg-base-300 flex-none rounded-t-xl lg:rounded-l-xl'>
        <img
          src={image ?? noPhoto}
          alt={name}
          className='tv-show-img object-scale-down bg-no-repeat rounded-tl-xl'
        />
        <div className='p-3 flex flex-col justify-center h-full'>
          <p>
            <strong>Language:</strong> {language ?? 'Unknown'}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime ? runtime + ' min' : 'Unknown'}
          </p>
          <p>
            <strong>Premiere:</strong> {premiered ?? 'Unknown'}
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
        <h2 className='card-title text-2xl pt-2 pb-4'>{name}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: shortenSummary(summary) }}
          className='my-auto'
        />
        <button className='btn btn-block mt-auto'>Details</button>
        <p>
          <strong>Genres:</strong>{' '}
          {genres && genres.length > 0 ? genres.join(', ') : 'Unknown'}
        </p>
      </div>
    </div>
  );
}
export default SearchItem;
