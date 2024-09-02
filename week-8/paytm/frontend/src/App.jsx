import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Send from "./pages/Send";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoadingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="send" element={<Send />} />
      </Routes>
    </Router>
  );
}

export default App;
