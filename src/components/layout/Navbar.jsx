import ColorSchemeToggler from '../ColorSchemeToggler';
import { FaHome, FaTv, FaSearch } from 'react-icons/fa';
import MenuButton from '../MenuButton';
import DropdownMenu from '../DropdownMenu';

function Navbar() {
  return (
    <nav className='bg-base-300 bg-opacity-80 flex justify-center custom-navbar z-50'>
      <div className='navbar lg:w-4/5'>
        <div className='flex-none'></div>
        <DropdownMenu>
          <MenuButton url='/' icon={<FaHome />} text='Home' />
          <MenuButton url='/top' icon={<FaTv />} text='Top Shows' />
          <MenuButton url='/search' icon={<FaSearch />} text='Search' />
        </DropdownMenu>
        <div className='hidden lg:flex'>
          <MenuButton url='/' icon={<FaHome />} text='Home' />
          <MenuButton url='/top' icon={<FaTv />} text='Top Shows' />
          <MenuButton url='/search' icon={<FaSearch />} text='Search' />
        </div>
        <div className='ml-auto'>
          <ColorSchemeToggler />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
