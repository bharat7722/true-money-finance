import React, { Suspense, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/assets/css/dashboard.css'
import './components/assets/css/ion.rangeSlider.css'
import './components/assets/css/style1.css'
import MetaMaskPopup from './components/MetamaskPopup';
const Home = React.lazy(() => import('./Pages/Home'))
const MainPage = React.lazy(() => import('./Pages/MainPage'))
const AppComponent = React.lazy(() => import('./Pages/AppComponent'))
const Calculator = React.lazy(() => import('./Pages/Calculator'))
function App() {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    checkMetaMaskInstalled();
  }, []);

  const checkMetaMaskInstalled = () => {
    if (typeof window.ethereum === 'undefined') {
      setIsMetaMaskInstalled(false);
      setIsPopupOpen(true);
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleDownloadClick = () => {
    window.open('https://metamask.io/download/', '_blank');
  };
  return (
    <BrowserRouter>
    <MetaMaskPopup
        isOpen={isPopupOpen}
        onRequestClose={handlePopupClose}
        onDownloadClick={handleDownloadClick}
      />
      <div>
        <Routes>
          <Route path='' element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>}
          />
          <Route path='dashboard' class="app-main" element={
            <Suspense fallback={null}>
              <MainPage />
            </Suspense>
          }>
            <Route index element={
              <Suspense fallback={null}>
                <AppComponent />
              </Suspense>
            } />
            <Route path='calculator' element={
              <Suspense fallback={null}>
                <Calculator />
              </Suspense>}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
