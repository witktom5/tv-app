import ColorSchemeToggler from '../ColorSchemeToggler';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-base-300 flex justify-center custom-navbar'>
      <div className='navbar lg:w-4/5'>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            TV Finder
          </Link>
        </div>
        <div className='flex-none'>
          <Link to='/categories' className='btn btn-ghost'>
            Categories
          </Link>
          <ColorSchemeToggler />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
