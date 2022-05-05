import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
import { FaSearch, FaTv } from 'react-icons/fa';

function NotFound() {
  return (
    <section>
      <Header title={'Page Not Found'} />
      <div className='flex gap-3 mt-3'>
        <MenuButton text='Go To Search' url='/search' icon={<FaSearch />} />
        <MenuButton text='See Top Shows' url='/top' icon={<FaTv />} />
      </div>
    </section>
  );
}
export default NotFound;
