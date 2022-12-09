import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Loader } from "@mantine/core";
import Layout from "./Components/Layout";

// Pages
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Infrastructure = lazy(() => import("./Pages/Infrastructure"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Staff = lazy(() => import("./Pages/Staff"));
const StudentCouncil = lazy(() => import("./Pages/StudentCouncil"));
const NewsEvents = lazy(() => import("./Pages/NewsEvents"));
const Activities = lazy(() => import("./Pages/Activities"));

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
