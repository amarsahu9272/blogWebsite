import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import NoMatchRoute from "./NoMatchRoute";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Homepage from "./pages/homepage/Homepage";
import Write from "./pages/write/Write";

function Router() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="Write" element={<Write />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/homepage/Homepage" element={<Homepage />} />
          <Route path="/login/Login" element={<Login />} />
          <Route path="/register/Register" element={<Register />} />

          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default Router;
