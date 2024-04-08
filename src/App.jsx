import { Outlet, Navigate,   BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import BrowserRouter
import Contact from "./components/contact/Contact";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import { useSelector } from "react-redux";
import ServicesSection from "./components/services/ServiceSection";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import {HomePage, Login, Profile, Register, ResetPassword} from './pages';

function Layout() {
  const user = useSelector((state) => state.user) ;
  const location = useLocation();
  console.log(user);
  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );


}

function App() {
  const {theme} = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <>
      <Router>
        <Contact />
        <Navbar />
        <Hero />
        <ServicesSection />
        <Blogs />
        <Footer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<Profile />} />
           
          </Route>
          <Route path="login" element={<Login />} />
          <Route path = "register" element={<Register />} />
          <Route path = "resetpassword" element={<ResetPassword />} />

        </Routes>


      </Router>
    </>
  );
}

export default App;
