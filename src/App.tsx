import { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './screens/Home';
import AboutPage from './screens/About';
import AppLayout from './components/AppLayout';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
