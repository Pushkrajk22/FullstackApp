import './App.css';
import Login from './templates/Login';
import Hello from './templates/Hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './templates/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
