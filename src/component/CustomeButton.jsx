import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

function CustomeButton({ text, onClick, bgColor, textColor, hoverColor, borderRadius }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: bgColor || '#121212', // Default background color
        color: textColor || '#34C94B', // Default text color
        borderRadius: borderRadius || '10px', // Default border radius
        textTransform: 'none', // Prevent uppercase transformation
        '&:hover': {
          backgroundColor: hoverColor || '#1a1a1a', // Default hover color
        },
      }}
    >
      {text}
    </Button>
  )
}

CustomeButton.propTypes = {
    text: PropTypes.string.isRequired, // Button text
    onClick: PropTypes.func, // Click event handler
    bgColor: PropTypes.string, // Background color
    textColor: PropTypes.string, // Text color
    hoverColor: PropTypes.string, // Hover color
    borderRadius: PropTypes.string, // Border radius
};

export default CustomeButton