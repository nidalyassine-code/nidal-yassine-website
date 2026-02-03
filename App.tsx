
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioHome from './pages/PortfolioHome';
import PortfolioGallery from './pages/PortfolioGallery';
import PortfolioContact from './pages/PortfolioContact';
import AdminDashboard from './pages/AdminDashboard';
import AdminProjects from './pages/AdminProjects';
import AdminEditor from './pages/AdminEditor';
import AdminMedia from './pages/AdminMedia';
import AdminSettings from './pages/AdminSettings';
import AdminPages from './pages/AdminPages'; // New Page
import PortfolioLayout from './components/PortfolioLayout';
import AdminLayout from './components/AdminLayout';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Portfolio Routes */}
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<PortfolioHome />} />
          <Route path="gallery" element={<PortfolioGallery />} />
          <Route path="contact" element={<PortfolioContact />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="pages" element={<AdminPages />} />
          <Route path="editor" element={<AdminEditor />} />
          <Route path="editor/:id" element={<AdminEditor />} />
          <Route path="media" element={<AdminMedia />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
