function Footer() {
  return (
    <footer className='flex justify-center p-4 bg-neutral text-neutral-content mt-auto'>
      <div className='footer lg:w-4/5 flex'>
        <div className='items-center opacity-75'>
          <p>
            TV Show Finder 2022 | By Tomasz Witkowski |
            <a
              href='https://tomaszwitkowski.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='font-semibold'
            >
              {' '}
              My portfolio
            </a>
          </p>
        </div>
        <div className='gap-1 ml-auto opacity-75 flex'>
          Credits:{' '}
          <a
            href='https://www.tvmaze.com/api'
            target='_blank'
            rel='noreferrer'
            className='font-semibold'
          >
            TV API (TVmaze)
          </a>{' '}
          |{' '}
          <a
            href='https://www.episodate.com/api'
            target='_blank'
            rel='noreferrer'
            className='font-semibold'
          >
            TV Shows API (EpisoDate)
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
