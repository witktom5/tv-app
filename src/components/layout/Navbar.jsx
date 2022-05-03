import ColorSchemeToggler from '../ColorSchemeToggler';
import { FaHome, FaTv } from 'react-icons/fa';
import MenuButton from '../MenuButton';
import DropdownMenu from '../DropdownMenu';

function Navbar() {
  return (
    <div className='bg-base-300 flex justify-center custom-navbar'>
      <nav className='navbar lg:w-4/5'>
        <div className='flex-none'></div>
        <DropdownMenu>
          <MenuButton url='/' icon={<FaHome />} text='Home' />
          <MenuButton url='/categories' icon={<FaTv />} text='Categories' />
        </DropdownMenu>
        <div className='hidden lg:block'>
          <MenuButton url='/' icon={<FaHome />} text='Home' />
        </div>
        <div className='hidden lg:block'>
          <MenuButton url='/categories' icon={<FaTv />} text='Categories' />
        </div>
        <div className='ml-auto'>
          <ColorSchemeToggler />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
