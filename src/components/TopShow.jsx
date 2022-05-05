function TopShow({
  name,
  rank,
  start_date,
  end_date,
  image_path,
  genres,
  country,
  runtime,
  status,
  network,
  rating,
  link,
}) {
  return (
    <div className='card w-full max-w-sm bg-base-300 image-full shadow-xl mx-auto'>
      <img src={image_path} alt={name} className='w-full h-full' />
      <div className='card-body p-0'>
        <h2 className='card-title text-2xl sm:text-3xl lg:text-2xl xl:text-3xl bg-base-300 bg-opacity-50 mt-10 py-1 justify-center w-full relative pr-12'>
          {name}
          <span className='absolute right-0 bg-primary py-3 px-6'>{rank}</span>
        </h2>
        <div className='px-5 w-max-content mt-8 flex flex-col h-full sm:text-xl lg:text-lg xl:text-xl'>
          <p>
            <strong>Start date: </strong>
            {start_date}
          </p>
          <p>
            <strong>Status: </strong>
            {status}
          </p>
          <p>
            <strong>User rating: </strong>
            {parseFloat(rating).toFixed(2)}
          </p>
          {end_date && (
            <p>
              <strong>End date: {end_date}</strong>
            </p>
          )}
          <p>
            <strong>Country: </strong>
            {country}
          </p>
          <p>
            <strong>Network: </strong>
            {network}
          </p>
          <p>
            <strong>Runtime: </strong>
            {runtime} minutes
          </p>
          <p>
            <strong>Genres: </strong>
            {genres.join(', ')}
          </p>
          <p>
            <strong>External link: </strong>
            <a href={link} className='underline'>
              Click
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default TopShow;
