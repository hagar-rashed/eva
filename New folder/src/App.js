import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Sidenav from "./components/home/sidenav/sidenav";
import Profile from "./components/profile/profile";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Setting from "./components/settings/setting";
function App() {
  return (
    <div className="App">
      <Sidenav />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile"  element={<Profile />} />
        <Route path="/setting"  element={<Setting/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup"  element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
