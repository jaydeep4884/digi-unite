import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
