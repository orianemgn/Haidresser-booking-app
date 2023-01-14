import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CustomerAccount from "./pages/CustomerAccount";
import BookingService from "./pages/BookingService";
import BookingEmployee from "./pages/BookingEmployee";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<CustomerAccount />} />
          <Route path="/booking-service" element={<BookingService />} />
          <Route
            path="/booking-service/booking-employee"
            element={<BookingEmployee />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
