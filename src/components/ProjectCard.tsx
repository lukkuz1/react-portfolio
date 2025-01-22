import React from "react";
import { Box, Button, Typography, Badge, Grid, Link } from "@mui/material";
import { VscGithubInverted, VscLinkExternal } from "react-icons/vsc";
import { useLazyImage } from "../hooks/useLazyImage";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    tags: string[];
    link?: string; // Make link optional
    github: string;
    source: string;
    image?: string; // Optional field for the project image
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Lazy load background image for mobile
  const lazyLoadedImage = useLazyImage(
    `https://res.cloudinary.com/gokulv/image/upload/co_rgb:09424c,e_colorize:80/v1627890100/${project.source}.jpg`
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px", // Rounded corners for a soft look
        overflow: "hidden",
        marginBottom: 4,
        backgroundColor: "#fff", // Neutral background color
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // Softer, larger shadow
        border: "1px solid #e0e0e0", // Light border for separation
        transition: "transform 0.3s ease", // Smooth transform on hover
        "&:hover": {
          transform: "scale(1.05)", // Slight zoom effect on hover
        },
      }}
    >
      {/* If an image is provided, display it, otherwise use the background image */}
      {project.image ? (
        <Box
          sx={{
            height: { xs: "220px", md: "240px" }, // Fixed height for uniformity
            backgroundImage: `url(${project.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "12px 12px 0 0", // Rounded top corners
          }}
        />
      ) : (
        <Box
          sx={{
            height: { xs: "220px", md: "240px" }, // Fixed height for uniformity
            backgroundImage: `url(${lazyLoadedImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "12px 12px 0 0", // Rounded top corners
          }}
        />
      )}

      <Box sx={{ padding: 3 }}>
        {/* Project Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            color: "#333", // Dark text for readability
            marginBottom: 1,
          }}
        >
          {project.name}
        </Typography>

        {/* Project Description */}
        <Typography
          variant="body2"
          sx={{
            color: "#666", // Lighter text color
            marginBottom: 2,
            lineHeight: 1.8, // Improved line height for readability
          }}
        >
          {project.description}
        </Typography>

        {/* Tags Section */}
        <Box sx={{ marginY: 1 }}>
          <Tags tags={project.tags} />
        </Box>

        {/* Buttons Section */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {/* Render website button only if a link is provided */}
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  paddingX: 3,
                  color: "#333",
                  borderColor: "#333",
                  "&:hover": {
                    borderColor: "#333",
                    backgroundColor: "#f0f0f0", // Light background hover effect
                  },
                }}
                startIcon={<VscLinkExternal />}
              >
                Website
              </Button>
            </Link>
          )}
          {/* Render GitHub button */}
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  paddingX: 3,
                  color: "#333",
                  borderColor: "#333",
                  "&:hover": {
                    borderColor: "#333",
                    backgroundColor: "#f0f0f0",
                  },
                }}
                startIcon={<VscGithubInverted />}
              >
                Source Code
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

// Tags component to render the tags for each project
const Tags = ({ tags }: { tags: string[] }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
    {tags.map((tag, index) => (
      <Badge
        key={index}
        sx={{
          backgroundColor: "#f0f0f0", // Subtle background color for badges
          color: "#333", // Dark text
          padding: "5px 10px",
          fontSize: "0.85rem", // Smaller text size
          borderRadius: "12px", // Rounded badges for modern feel
        }}
      >
        {tag}
      </Badge>
    ))}
  </Box>
);

export default ProjectCard;