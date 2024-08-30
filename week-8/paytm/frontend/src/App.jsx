import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="poolcab" element={<PoolCar />} /> */}
        <Route index element={<Home/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;