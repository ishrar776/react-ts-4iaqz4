import * as React from 'react';
import '../style.css';
import CustomerThank from './customerthanks';
import RegisterUser from './registerUser';
import App from './App';
//import App from './App';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
const MenuBar = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<CustomerThank />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
};
export default MenuBar;
