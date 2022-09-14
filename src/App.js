import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/index';

export const App = () => {
 return(<>
      <Routes>
          <Route path="/" element={<Layout />} />
      </Routes>
  </>)
}