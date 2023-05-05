import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import First from "./Pages/First";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<First />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
