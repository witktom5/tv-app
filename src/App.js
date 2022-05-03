import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SearchProvider } from './context/search/SearchContext';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <SearchProvider>
          <Navbar />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/search' element={<Search />} />
              <Route path='/search/results' element={<SearchResults />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </Container>
          <Footer />
        </SearchProvider>
      </Router>
    </>
  );
}

export default App;
