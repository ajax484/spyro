import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import MainDashboard from "./Pages/Dashboard";
import SignUp from "./Pages/Auth/SignUp";
import UserDashboard from "./Pages/Dashboard/Users/UserDashboard";
import UserList from "./Pages/Dashboard/Users/UserList";
import TestTable from "./Pages/Dashboard/Users/TestTable";
import CreateUser from "./Pages/Dashboard/Users/CreateUser";
import UserMonitor from "./Pages/Dashboard/Users/UserMonitor";
import ReferralSystem from "./Pages/Dashboard/Finance/ReferralSystem";
import ReferralPayout from "./Pages/Dashboard/Finance/ReferralPayout";
import Subscription from "./Pages/Dashboard/Finance/Subscription";
import Subscribers from "./Pages/Dashboard/Finance/Subscribers";
import { QueryClient, QueryClientProvider } from "react-query";
import Auth from "./Pages/Auth";
import SignIn from "./Pages/Auth/SignIn";
import GlobalContext from "./Context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useAuth } from "./Context/AuthContext";
import DummyUsers from "../data/DummyUsers";

const queryClient = new QueryClient();

function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();

  console.log(user);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/signin" />;
  }

  return <Outlet />;
}

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
    <GoogleOAuthProvider clientId="587340367067-gb98net5hq10ajjqf22cfrghkf6ossd7.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <GlobalContext>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to={"/auth/signin"} />} />
              <Route path="/auth" element={<Auth />}>
                <Route exact path="signup" element={<SignUp />} />
                <Route exact path="signin" element={<SignIn />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <RequireAuth>
                    <Outlet />
                  </RequireAuth>
                }
              >
                <Route path="users" element={<MainDashboard />}>
                  <Route exact path="dashboard" element={<UserDashboard />} />
                  <Route exact path="list" element={<UserList />} />
                  <Route exact path="create" element={<CreateUser />} />
                  <Route exact path="monitor" element={<UserMonitor />} />
                  {/* <Route exact path="testtable" element={<TestTable />} /> */}
                </Route>
                <Route path="Finance" element={<MainDashboard />}>
                  <Route
                    exact
                    path="referrals_system"
                    element={<ReferralSystem />}
                  />
                  <Route
                    exact
                    path="referrals_payout"
                    element={<ReferralPayout />}
                  />
                  <Route exact path="subscription" element={<Subscription />} />
                  <Route exact path="subscribers" element={<Subscribers />} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate to={"/auth/signin"} />} />
            </Routes>
          </Router>
        </GlobalContext>
      </QueryClientProvider>
    </GoogleOAuthProvider>

  );
}

export default App;
