import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import motion for animations
import ProjectCard from "../components/ProjectCard";
import projectList from "../content/projects.json";

// Define motion components for animations
const MotionBox = motion(Box);

const ProjectsSection: React.FC = () => {
  return (
    <Box sx={{ paddingY: 6, backgroundColor: "#f8f8f8" }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          fontWeight: "700",
          color: "#333",
        }}
      >
        My Projects
      </Typography>

      {/* Animated Grid for Project Cards */}
      <Grid container spacing={4} justifyContent="center">
        {projectList.map(
          (project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}  // Animation when element enters
                animate={{ opacity: 1, scale: 1 }}    // End state of animation
                transition={{
                  duration: 0.6,
                  delay: 0.3 * (Number(index) || 0), // Apply dynamic delay based on index
                }}
              >
                <ProjectCard project={project} />
              </MotionBox>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;