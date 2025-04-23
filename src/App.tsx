import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProjectEdit from './pages/admin/AdminProjectEdit';
import AdminEducationEdit from './pages/admin/AdminEducationEdit';
import AdminSkillsEdit from './pages/admin/AdminSkillsEdit';
import AdminExperienceEdit from './pages/admin/AdminExperienceEdit';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
      <Route path="/admin/projects/:id" element={
        <ProtectedRoute>
          <AdminProjectEdit />
        </ProtectedRoute>
      } />
      <Route path="/admin/education/:id" element={
        <ProtectedRoute>
          <AdminEducationEdit />
        </ProtectedRoute>
      } />
      <Route path="/admin/skills/:id" element={
        <ProtectedRoute>
          <AdminSkillsEdit />
        </ProtectedRoute>
      } />
      <Route path="/admin/experience/:id" element={
        <ProtectedRoute>
          <AdminExperienceEdit />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;