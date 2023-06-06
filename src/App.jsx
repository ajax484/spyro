import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
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
import DummyUsers from "../data/DummyUsers";
import ReferralPayoutData from "../data/ReferralPayoutData";
import SubscriptionData from "../data/SubscriptionData";

const queryClient = new QueryClient();

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
    // <QueryClientProvider client={queryClient}>
    //   <GlobalContext>
    //     <Router>
    //       <Routes>
    //         <Route path="/auth" element={<Auth />}>
    //           <Route exact path="signup" element={<SignUp />} />
    //           <Route exact path="signin" element={<SignIn />} />
    //         </Route>
    //         <Route
    //           path="/admin"
    //           element={
    //             <>
    //               <Outlet />
    //             </>
    //           }
    //         >
    //           <Route path="users" element={<MainDashboard />}>
    //             <Route exact path="dashboard" element={<UserDashboard />} />
    //             <Route exact path="list" element={<UserList data={DummyUsers} rowsPerPage={6} />} />
    //             <Route exact path="create" element={<CreateUser />} />
    //             <Route exact path="monitor" element={<UserMonitor />} />
    //             {/* <Route exact path="testtable" element={<TestTable />} /> */}
    //           </Route>
    //           <Route path="Finance" element={<MainDashboard />}>
    //             <Route
    //               exact
    //               path="referrals_system"
    //               element={<ReferralSystem />}
    //             />
    //             <Route
    //               exact
    //               path="referrals_payout"
    //               element={<ReferralPayout data={ReferralPayoutData} rowsPerPage={6}  />}
    //             />
    //             <Route exact path="subscription" element={<Subscription data={SubscriptionData} rowsPerPage={6} />} />
    //             <Route exact path="subscribers" element={<Subscribers data={DummyUsers} rowsPerPage={6} />} />
    //           </Route>
    //         </Route>
    //       </Routes>
    //     </Router>
    //   </GlobalContext>
    // </QueryClientProvider>
      <SignIn />
      // <ReferralPayout  data={ReferralPayoutData} rowsPerPage={6}/>

  );
}

export default App;
