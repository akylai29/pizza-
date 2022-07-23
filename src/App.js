import './App.css';
import Header from './components/header/Header';

import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
