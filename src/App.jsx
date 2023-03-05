import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
