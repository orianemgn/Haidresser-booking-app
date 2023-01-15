import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/registration/customer/SignUp";
import Login from "./pages/registration/customer/Login";
import AdminSignUp from "./pages/registration/admin/AdminSignUp";
import AdminLogin from "./pages/registration/admin/AdminLogin";
import CustomerAccount from "./pages/CustomerAccount";
import BookingService from "./pages/booking/BookingService";
import BookingEmployee from "./pages/booking/BookingEmployee";
import BookingCalendar from "./pages/booking/BookingCalendar";
import BookingConfirmation from "./pages/booking/BookingConfirmation";
import StoreSetup from "./pages/setup/StoreSetup";
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
          <Route path="/booking-employee" element={<BookingEmployee />} />
          <Route path="/booking-calendar" element={<BookingCalendar />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="admin-signup" element={<AdminSignUp />} />
          <Route path="store-setup" element={<StoreSetup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
