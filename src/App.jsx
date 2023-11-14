// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/UserAuth/Login";
import Register from "./Components/UserAuth/Register";
import OTP from "./Components/UserAuth/OTP";
import "./App.css";
import CustomerList from "./Components/Customer/CustomerList";
import DashBoardLayout from "./Components/DashBoard/DashBoardLayout";
import AllTickets from "./Components/Customer/AllTickets";
import CustomerProfile from "./Components/Customer/CustomerProfile";
import DashBoard from "./Components/DashBoard/DashBoard";
import Help from "./Components/Help/Help";
import AddTicket from "./Components/Customer/AddTicket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/newTicket" element={<AddTicket />} />
          <Route path="/tickets" element={<AllTickets />} />
          <Route path="/Customers" element={<CustomerList />} />
          <Route path="/Customers/Profile/:id" element={<CustomerProfile />} />
          <Route path="/Customers/tickets/:id" element={<AllTickets />} />
          <Route path="/Profile/:id" element={<CustomerProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<OTP />} />

        {/* Add more routes for other pages as you create them */}
      </Routes>
    </Router>
  );
}

export default App;
