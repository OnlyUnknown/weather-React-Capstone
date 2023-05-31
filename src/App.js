import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainpage';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Details/:country" element={<Details />} />
    </Routes>
  );
}

export default App;
