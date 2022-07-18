
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
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
     
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route
          path="/"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />




    {/* <PrivateRoute path="/" element={<Feed/>} /> */}
  
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
