import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Router>
        <div className='page-container'>
          <Navbar />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/categories' element={<Categories />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
