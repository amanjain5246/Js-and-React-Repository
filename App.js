import "./App.css";
// import Sign from "./NewsApplication/Signuppage/Sign";
import Home from "./NewsApplication/Homepage/Home";
// import Details from "./NewsApplication/Detailspage/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import First from "./NewsApplication/Loginpage/First";
import Forgotpass from "./NewsApplication/Forgotpasswordpage/Forgotpass";
import First from "./NewsApplication/Loginpage/First";
import Sign from "./NewsApplication/Signuppage/Sign";
import Details from "./NewsApplication/Detailspage/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Link to="/">First</Link>
        <Link to="/Sign">Sign</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Home/Details">Details</Link>
        <Link to="/Forgotpass">Forgotpass</Link> */}

        <Routes>
          <Route path="/" element={<First/>} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/Details" element={<Details />} />
          <Route path="/Forgotpass" element={<Forgotpass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
