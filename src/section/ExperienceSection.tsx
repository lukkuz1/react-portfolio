import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

// Define motion components for animations
const MotionBox = motion(Box);

const ExperienceSection: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 6, px: { xs: 3, md: 6 } }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", mb: 3 }}>
        My Experience
      </Typography>

      {/* Animated Grid for Experience Cards */}
      <Grid container spacing={3} justifyContent="center">
        {/* React Experience Card */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExperienceCard
              name="React"
              picture="/images/React-icon.svg.png" // Accessing the React logo from public/images/
              experienceLevel="Advanced"
            />
          </MotionBox>
        </Grid>

        {/* TypeScript Experience Card */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ExperienceCard
              name="TypeScript"
              picture="/images/Typescript_logo_2020.png" // Accessing the TypeScript logo from public/images/
              experienceLevel="Intermediate"
            />
          </MotionBox>
        </Grid>

        {/* C# Experience Card */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ExperienceCard
              name="C#"
              picture="/images/C_Sharp_Logo_2023.svg.png" // Accessing the C# logo from public/images/
              experienceLevel="Intermediate"
            />
          </MotionBox>
        </Grid>

        {/* SQL Experience Card */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ExperienceCard
              name="SQL"
              picture="/images/SQL.png" // Accessing the SQL logo from public/images/
              experienceLevel="Intermediate"
            />
          </MotionBox>
        </Grid>

        {/* Git Experience Card */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ExperienceCard
              name="Git"
              picture="/images/Git-Icon-1788C.png" // Accessing the Git logo from public/images/
              experienceLevel="Intermediate"
            />
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceSection;