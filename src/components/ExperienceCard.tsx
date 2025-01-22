import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

interface ExperienceCardProps {
  name: string;
  picture: string;
  experienceLevel: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ name, picture, experienceLevel }) => {
  return (
    <Card sx={{
      maxWidth: 345,
      m: 2,
      borderRadius: '12px', // Soft rounded corners
      backgroundColor: '#fff', // Neutral background color
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)', // Light shadow for depth
      border: '1px solid #ddd', // Light border for separation
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
      '&:hover': {
        transform: 'translateY(-10px)', // Slight upward movement on hover
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', // Darker shadow on hover
      }
    }}>
      <CardMedia
        component="img"
        height="120"
        image={picture}
        alt={name}
        sx={{
          objectFit: 'contain', // Maintain image aspect ratio
          marginTop: 2, // Small margin for spacing
        }}
      />
      <CardContent sx={{ paddingBottom: '16px' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#333', // Dark text color
            fontWeight: 500, // Slightly bold text
            marginBottom: 1,
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', fontSize: '0.875rem' }}>
          {experienceLevel}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;