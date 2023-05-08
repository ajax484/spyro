import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MainDashboard from "./Pages/Dashboard";
import SignUp from "./Pages/Auth/SignUp";
import UserDashboard from "./Pages/Dashboard/Users/UserDashboard";
import UserList from "./Pages/Dashboard/Users/UserList";
import { useEffect } from "react";
import TestTable from "./Pages/Dashboard/Users/TestTable";

function App() {
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/admin"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="users" element={<MainDashboard />}>
            <Route exact path="dashboard" element={<UserDashboard />} />
            <Route exact path="list" element={<UserList />} />
            <Route exact path="testtable" element={<TestTable />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
