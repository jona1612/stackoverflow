import './App.css';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login';
import Register from './Components/Register';
import ViewQuestion from './Components/ViewQuestion';
import Question from './Components/AddQuestion/Question';
import StackOverFlow from "./Components/StackOverFlow/index";
// import Auth from "./Components/Auth/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './Components/user_context';
import { useState } from 'react';
// import Header from './Components/Header/header';
// import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./feature/userSlice";


function App() {
  const [user, setUser] = useState({})

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(
  //         login({
  //           uid: authUser.uid,
  //           photo: authUser.photoURL,
  //           displayName: authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //     // console.log(authUser);
  //   });
  // }, [dispatch]);


  return (
    <BrowserRouter>
      <UserProvider value={{ user, setUser }}>
        <Navbar />
        {/* <Header /> */}
        <Routes>
          {/* <Route path={user ? "/" : "/login"} element={user ? <StackOverFlow /> : <Login />} /> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/auth' element={<Auth />} /> */}
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