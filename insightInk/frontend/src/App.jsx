import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Plans from "./components/pages/plans";
import Contact from "./components/pages/contact";
import NotFound from "./components/notFound";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Dashboard from "./vendorFiles/pages/dashboard"
import ManageProfile from "./vendorFiles/pages/manageProfile"
import Books from "./vendorFiles/pages/books";
import Marketplace from "./vendorFiles/pages/marketplace"
import OffersReceived from "./vendorFiles/pages/offersReceived";
import UpgradePlan from "./vendorFiles/pages/upgradePlan";
function App() {
  const signIn = window.localStorage.getItem("isLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route path="">
            <Route index element={<Home />} />
          </Route>
          <Route path="login">
            <Route index element={signIn ? <Dashboard /> : <SignIn />} />
          </Route>
          <Route path="register">
            <Route index element={<SignUp />} />
          </Route>
          <Route path="about">
            <Route index element={<About />} />
          </Route>
          <Route path="plans">
            <Route index element={<Plans />} />
          </Route>
          <Route path="contact">
            <Route index element={<Contact />} />
          </Route>
           <Route path="dashboard">
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="manageProfile">
            <Route index element={<ManageProfile />} />
          </Route>
          <Route path="books">
            <Route index element={<Books />} />
          </Route>
          <Route path="marketplace">
            <Route index element={<Marketplace />} />
          </Route>
          <Route path="offersReceived">
            <Route index element={<OffersReceived />} />
          </Route>
          <Route path="upgradePlan">
            <Route index element={<UpgradePlan />} />
          </Route>
          {/* <Route exact path="/success" element={<Success />} />
          <Route exact path="/failure" element={<Failure />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
