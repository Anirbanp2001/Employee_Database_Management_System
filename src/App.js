import logo from './logo.svg';
import './App.css';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Option from './pages/option/Option';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Emp_sheet from './pages/emp_sheet/Emp_sheet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Emp_sheet/>
    </div>
  );
}

export default App;
