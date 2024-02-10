
import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Contact from './pages/contact/Contact';
import { useContext } from 'react';
import { Context } from './context/Context';
import Footer from './components/footer/Footer';
import About from './pages/about/About';

function App() {
  const {user} = useContext(Context);
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Topbar />
      <Routes>
      <Route exact path="/" element={user ?  <Home /> : <Register/>}></Route>
      <Route exact path="/write" element={user ?  <Write /> : <Register/> }></Route>
      <Route exact path="/setting" element={ user ? <Setting /> : <Register/> }></Route>
      <Route exact path="/post/:postId" element={ <Single />  }></Route>
      <Route exact path="/login" element={user ? <Home/> : <Login /> }></Route>
      <Route exact path="/register" element={ user ? <Navigate to={"/"}/> : <Register/>  }></Route>
      <Route exact path="/contact" element={ user ? <Contact/> : <Register/>  }></Route>
      <Route exact path="/about" element={ user ? <About/> : <Register/>  }></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
