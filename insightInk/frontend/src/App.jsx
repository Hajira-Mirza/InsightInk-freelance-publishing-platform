import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Plans from "./components/plans";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Index from "./notYourComps/index";
import Success from "./notYourComps/pages/Success";
import Failure from "./notYourComps/pages/Failure";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}

        <Routes path="/">
          <Route path="">
            <Route index element={<Home />} />
          </Route>
          <Route path="login">
            <Route index element={<SignIn />} />
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
            <Route index element={<Index />} />
          </Route>
          <Route exact path="/success" element={<Success />} />
            <Route exact path="/failure" element={<Failure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
