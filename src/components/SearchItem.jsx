import noPhoto from '../assets/nophoto.svg';

function SearchItem({ name, type, genres, image, summary }) {
  return (
    <div className='bg-base-300 rounded-xl shadow-xl mb-8 flex'>
      <div className='flex flex-col'>
        <img
          src={image ?? noPhoto}
          alt={name}
          className='tv-show-img object-cover bg-no-repeat rounded-xl rounded-tr-none rounded-bl-none'
        />
        <div>Hey hey</div>
      </div>
      <div className='flex flex-col'>
        <h2 className='card-title'>{name}</h2>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Watch</button>
        </div>
      </div>
    </div>
  );
}
export default SearchItem;
