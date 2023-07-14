import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./container/Auth/SignIn";
import "./App.css";
import NotFound from "./container/Auth/NotFound";
import MainApp from "./container/Main/MainApp";
import { connect } from "react-redux";
import Dashboard from "./container/Dashboard/Dashboard";
import CategoryBookById from "./container/Category/CategoryBookById";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainApp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/category/:_id" element={<CategoryBookById />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  fetchingUserDetails: user.fetchingUserDetails,
});
export default connect(mapStateToProps)(App);
