import React from "react";
import AddContacts from "pages/AddContacts";
import Tasks from "pages/Tasks";
import AddProducts from "pages/AddProducts";
import Addnotes from "pages/Addnotes";
import Account from "pages/Account";
import AddTask from "pages/AddTask";
import Dashboard from "pages/Dashboard";
import AddMeeting from "pages/AddMeeting";
import Products from "pages/Products";
import Contacts from "pages/Contacts";
import AddAccount from "pages/AddAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addmeeting" element={<AddMeeting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addnotes" element={<Addnotes />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/addcontacts" element={<AddContacts />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
