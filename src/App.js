import './App.css';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login';
import Register from './Components/Register';
import ViewQuestion from './Components/ViewQuestion';
import Question from './Components/AddQuestion/Question';
import StackOverFlow from "./Components/StackOverFlow/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './Components/user_context';
import { useState } from 'react';
import Nav from './Components/Nav';


function App() {
  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <UserProvider value={{ user, setUser }}>
        <Navbar />
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path='/main' element={<StackOverFlow />} />
          <Route path='/add-question' element={<Question />} />
          <Route path='/question' element={<ViewQuestion />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;