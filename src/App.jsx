import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Preloader from './Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

   
    const timer = setTimeout(handleLoad, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Pages />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;