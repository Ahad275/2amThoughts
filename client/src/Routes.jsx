import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import EditBlog from "./components/EditBlog";
import FormComponent from "./components/FormComponent";
import Login from "./components/Login";
import SingleBlog from "./components/SingleBlog";
import Contact from "./components/Contact";
import ProtectedRoute from "./ProtectedRoute";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <FormComponent />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route
          path="/blog/edit/:slug"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
