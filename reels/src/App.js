
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Feed from './components/Feed';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from './context/Authcontext';
function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
     
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/' element={<Feed/>}></Route>
    
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
