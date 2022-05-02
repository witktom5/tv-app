import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
