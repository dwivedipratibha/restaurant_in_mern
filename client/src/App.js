import "./styles.css";
import Navbar from './components/Navbar.js'
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Menu from "./pages/Menu/Menu"
import Helpme from "./pages/Helpme/Helpme";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
       <Router>
       <Navbar username='Pratibha' page='home'/>
        <Routes >
          <Route path="/login" element={<Login />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/helpme" element={<Helpme />}/>
          <Route path="/" element={<Home />}/>

        </Routes>
    </Router>     
    </div>
  );
}
