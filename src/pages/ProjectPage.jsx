import React from "react";
import UniverseProjects from "../Project_Section/UniverseProjects"; // adjust path if needed
import Footer from "../components/layout/Footer";

const ProjectPage = () => {
  return (
    <div className="pt-20 bg-black text-white">

      {/* 🌌 SECTION 1: Universe Projects */}
      <UniverseProjects />

      {/* 🔻 Footer */}
      <Footer />

    </div>
  );
};

export default ProjectPage;