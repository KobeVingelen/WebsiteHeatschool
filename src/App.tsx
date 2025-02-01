import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingOverlay from './components/LoadingOverlay';
import ScrollToTop from './components/ScrollToTop';
import { usePageTransition } from './hooks/usePageTransition';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Program = React.lazy(() => import('./pages/Program'));
const More = React.lazy(() => import('./pages/More'));
const DJContest = React.lazy(() => import('./pages/DJContest'));

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  usePageTransition(setIsLoading);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {isLoading && <LoadingOverlay  onLoadingComplete={() => setIsLoading(false)} />}
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingOverlay onLoadingComplete={() => setIsLoading(false)} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/more" element={<More />} />
            <Route path="/dj-contest" element={<DJContest />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;