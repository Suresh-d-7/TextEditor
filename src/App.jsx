import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import LoginPage from './pages/LoginPage';
import EditorPage from './pages/EditorPage';
import DrawingPage from './pages/DrawingPage';

import ThemeSelector from './components/ThemeSelector';
import QRCodeGenerator from './components/QRCodeGenerator';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ padding: '20px' }}>
          {/* Theme Selector */}
          <ThemeSelector />

          {/* Main App Routes */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/drawing" element={<DrawingPage />} />
            <Route path="/qrcode" element={<QRCodeGenerator text="Hello World" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
