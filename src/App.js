import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/Navbar.jsx'
import SignupPage from './pages/SignUp';
import LoginPage from './pages/Login';

function App() {
  return (
    <div>
      <NavBar />
    <div className="min-h-full h-screen flex justify-center py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-10">
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
    </div>
  );
}

export default App;
