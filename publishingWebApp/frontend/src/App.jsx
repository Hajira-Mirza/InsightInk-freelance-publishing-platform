import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-300 flex justify-center">
      <BrowserRouter>
        <Routes path="/">
          <Route path="">
            <Route index element={<Home />} />
          </Route>
          <Route path="login">
            <Route index element={<signIn />} />
          </Route>
          <Route path="register">
            <Route index element={<signUp />} />
          </Route>
          <Route path="about">
            <Route index element={<About />} />
          </Route>
          <Route path="services">
            <Route index element={<Services />} />
          </Route>
          <Route path="contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
