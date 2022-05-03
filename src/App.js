import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/search' element={<Search />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
