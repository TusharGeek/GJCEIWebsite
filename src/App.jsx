import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

// Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Infrastructure from "./Pages/Infrastructure";
import ContactUs from "./Pages/ContactUs";
import Staff from "./Pages/Staff";
import StudentCouncil from "./Pages/StudentCouncil";
import NewsEvents from "./Pages/NewsEvents";
import Activities from "./Pages/Activities";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Infrastructure" element={<Infrastructure />} />
        <Route path="/OrganizationalStructure" element={<Staff />} />
        <Route path="/StudentCouncil" element={<StudentCouncil />} />
        <Route path="/NewsEvents" element={<NewsEvents />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
