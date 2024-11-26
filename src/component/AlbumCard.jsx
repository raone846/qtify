import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

function AlbumCard({ image, title, follows, likes, isSongsSection = false }) {
  return (
    <Card
      sx={{
        maxWidth: 159,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent', // Transparent background to highlight title placement
      }}
    >
      {/* Image and Followers/Likes Pill Container */}
      <Box
        sx={{
          backgroundColor: '#121212',
          borderRadius: '8px', // Rounded corners for the combined container
          overflow: 'hidden', // Ensures the image and pill fit within the container
        }}
      >
        {/* Album/Song Image */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: '170px',
            width: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Followers or Likes Pill */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            backgroundColor: '#FFFFFF', // White background for the pill
            padding: '2px 8px', // Add spacing inside the container
            borderBottomLeftRadius: '8px', // Rounded corners at the bottom
            borderBottomRightRadius: '8px',
          }}
        >
          <Chip
            label={isSongsSection ? `${likes} Likes` : `${follows} Follows`}
            sx={{
              fontSize: '10px',
              height: '24px',
              backgroundColor: '#121212', // Black pill color
              color: 'white',
              fontFamily: 'Poppins, sans-serif', // Font family
            }}
          />
        </Box>
      </Box>

      {/* Title */}
      <Typography
        variant="body2"
        sx={{
          marginTop: '8px',
          color: 'white',
          backgroundColor: '#121212', // Keeps the title visually separate
          width: '100%',
          padding: '1px',
          textAlign: 'left',
          fontFamily: 'Poppins, sans-serif', // Font family
          fontWeight: 'normal', // Non-bold text
        }}
      >
        {title}
      </Typography>
    </Card>
  );
}

AlbumCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  follows: PropTypes.number,
  likes: PropTypes.number,
  isSongsSection: PropTypes.bool,
};

export default AlbumCard;
