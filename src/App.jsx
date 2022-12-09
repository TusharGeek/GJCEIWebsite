import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Loader } from "@mantine/core";
import Layout from "./Components/Layout";
import Infrastructure from "./Pages/Infrastructure";
import ContactUs from "./Pages/ContactUs";
import Staff from "./Pages/Staff"
import StudentCouncil from "./Pages/StudentCouncil";
import NewsEvents from "./Pages/NewsEvents";
import Activities from "./Pages/Activities";

// Pages
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));

const App = () => {
  return (
    <Suspense
      fallback={
        <Flex py="md" align="center">
          <Loader variant="dots" />
        </Flex>
      }
    >
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
    </Suspense>
  );
};

export default App;
