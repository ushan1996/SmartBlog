import React, { useContext } from 'react';
import Topbar from './components/Topbar/Topbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Single from './Pages/Single/Single';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';
import About from './Pages/About/About';
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Login />}
        ></Route>
        <Route path="/About-us" element={user ? <About /> : <Login />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
