import Link from "next/link";
import Image from "next/image";

import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ProjectsCards from "@components/ProjectsCards/ProjectsCards";
import ProjectsSection from "@components/ProjectsSection/ProjectsSection";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsSection />
      <ProjectsCards />
    </>
  );
};

export default ProjectsPage;
