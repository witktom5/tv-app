import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SearchProvider } from './context/search/SearchContext';
import { TopShowsProvider } from './context/topShows/TopShowContext';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TopShows from './pages/TopShows';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <SearchProvider>
          <TopShowsProvider>
            <Navbar />
            <Container>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/top' element={<TopShows />} />
                <Route path='/search' element={<Search />} />
                <Route path='/search/results' element={<SearchResults />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </Container>
            <Footer />
          </TopShowsProvider>
        </SearchProvider>
      </Router>
    </>
  );
}

export default App;
