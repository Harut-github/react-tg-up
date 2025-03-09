import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Payment from "./pages/Payment";
import "./assets/css/App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<Platform />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  );
}
