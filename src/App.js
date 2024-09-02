import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              tag=""
              limit={28}
              heading="Top Articles"
            />
          }
        />
        <Route
          exact
          path="/ai"
          element={
            <News setProgress={setProgress} tag="ai" limit={16} heading="AI" />
          }
        />
        <Route
          exact
          path="/programming"
          element={
            <News
              setProgress={setProgress}
              tag="programming"
              limit={16}
              heading="Programming"
            />
          }
        />
        <Route
          exact
          path="/blockchain"
          element={
            <News
              setProgress={setProgress}
              tag="blockchain"
              limit={16}
              heading="Blockchain"
            />
          }
        />
        <Route
          exact
          path="/iot"
          element={
            <News
              setProgress={setProgress}
              tag="iot"
              limit={16}
              heading="IOT"
            />
          }
        />
        <Route
          exact
          path="/cybersecurity"
          element={
            <News
              setProgress={setProgress}
              tag="cybersecurity"
              limit={16}
              heading="Cyber Security"
            />
          }
        />
        <Route
          exact
          path="/softwaredevelopment"
          element={
            <News
              setProgress={setProgress}
              tag="softwaredevelopment"
              limit={16}
              heading="Software Development"
            />
          }
        />
        <Route
          exact
          path="/gamedevelopment"
          element={
            <News
              setProgress={setProgress}
              tag="gamedevelopment"
              limit={16}
              heading="Game Development"
            />
          }
        />
        <Route
          exact
          path="/vr-ar"
          element={
            <News
              setProgress={setProgress}
              tag="vr"
              limit={16}
              heading="VR / AR"
            />
          }
        />
        <Route
          exact
          path="/datascience"
          element={
            <News
              setProgress={setProgress}
              tag="datascience"
              limit={16}
              heading="Data Science"
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
