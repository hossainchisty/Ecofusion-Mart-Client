import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path={"/"} element={<Home />} />

          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Route>
      
      </Routes>
  
      <Footer />

    </>
  );
}
