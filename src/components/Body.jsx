import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import ListingsPage from "./ListingsPage/Body.jsx";
import ListingDetailPage from "./ListingDetailPage/Body.jsx";
import AboutUsPage from "./AboutUsPage/Body.jsx";
import ContactUsPage from "./ContactUsPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";
import DashboardPage from "./DashboardPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/listingspage" element={<ListingsPage />} />
        <Route path="/listingdetailpage" element={<ListingDetailPage />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/contactuspage" element={<ContactUsPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
};

export default Body;