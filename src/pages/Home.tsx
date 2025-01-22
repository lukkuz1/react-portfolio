import React from "react";
import { Box, Typography, Slide, Button, Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import ProjectsSection from "../section/ProjectSection";
import ContactForm from "../components/ContactForm";
import ExperienceSection from "../section/ExperienceSection";

const Home: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f9f9f9", p: 4 }}>
      {/* Intro Section */}
      <Box sx={{ textAlign: "center", mt: { xs: 4, md: 5 }, mb: 6 }}>
        <Slide in={true} direction="up" timeout={500}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
            Hey there! 👋 My name is
          </Typography>
        </Slide>

        <Slide in={true} direction="up" timeout={600}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "6xl", md: "9xl" },
              letterSpacing: "-2px",
              backgroundImage: "linear-gradient(to right, #00bcd4, #4caf50)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "extrabold",
              mb: 3,
            }}
          >
            Lukas Kuzmickas
          </Typography>
        </Slide>

        <Slide in={true} direction="up" timeout={700}>
          <Typography variant="h5" sx={{ fontSize: { xs: "xl", md: "2xl" }, color: "#666" }}>
            I am a React developer passionate about crafting user-friendly applications. Check out my projects below! 🚀
          </Typography>
        </Slide>

        {/* GitHub Button */}
        <Slide in={true} direction="up" timeout={800}>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              fontSize: "1.25rem",
              padding: "12px 40px",
              borderColor: "#333",
              color: "#333",
              borderRadius: 25,
              "&:hover": { backgroundColor: "#333", color: "#fff" },
            }}
            href="https://github.com/lukkuz1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ mr: 2 }} />
            My GitHub
          </Button>
        </Slide>
      </Box>


      {/* Projects Section */}
      <ProjectsSection />  {/* Integrated ProjectsSection here */}

      {/* Experience Section (Now integrated) */}
      <ExperienceSection /> {/* Add the ExperienceSection here */}


            {/* Contact Information Section */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
          Contact Information
        </Typography>

        <Typography variant="body1" sx={{ color: "#666", mb: 2 }}>
          You can reach me via:
        </Typography>

        {/* Phone Number */}
        <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
          <Link href="tel:+37067454439" sx={{ color: "#00bcd4", textDecoration: "none" }}>
            +370 674 54439
          </Link>
        </Typography>

        {/* Email */}
        <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
          <Link href="mailto:lukas6bkuzmickas@gmail.com" sx={{ color: "#00bcd4", textDecoration: "none" }}>
            lukas6bkuzmickas@gmail.com
          </Link>
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", mb: 3 }}>
          Contact Me
        </Typography>

        

        <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
          Feel free to get in touch by filling out the form below:
        </Typography>

        

        {/* Contact Form */}
        <ContactForm />
        
      </Box>
    </Box>
  );
};

export default Home;