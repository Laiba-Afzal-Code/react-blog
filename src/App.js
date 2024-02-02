
import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Contact from './pages/contact/Contact';

function App() {
  const user = true;
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Topbar />
      <Routes>
      <Route exact path="/" element={user ?  <Home /> : <Register/>}></Route>
      <Route exact path="/write" element={user ?  <Write /> : <Register/> }></Route>
      <Route exact path="/setting" element={ user ? <Setting /> : <Register/> }></Route>
      <Route exact path="/single" element={ <Single />  }></Route>
      <Route exact path="/login" element={user ? <Home/> : <Login /> }></Route>
      <Route exact path="/register" element={ user ? <Home/> : <Register/>  }></Route>
      <Route exact path="/contact" element={ user ? <Contact/> : <Register/>  }></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
