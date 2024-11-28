import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import '@fontsource/poppins';

function CustomButton({ text, onClick, bgColor, textColor, hoverColor, borderRadius }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: bgColor || '#121212', // Default background color
        color: textColor || '#34C94B', // Default text color
        borderRadius: borderRadius || '10px', // Default border radius
        textTransform: 'none', // Prevent uppercase transformation
        fontFamily: 'Poppins, sans-serif', // Use correct camelCase
        '&:hover': {
          backgroundColor: hoverColor || '#1a1a1a', // Default hover color
        },
      }}
    >
      {text}
    </Button>
  );
}

// Define PropTypes for validation
CustomButton.propTypes = {
  text: PropTypes.string.isRequired, // Button text
  onClick: PropTypes.func, // Click event handler
  bgColor: PropTypes.string, // Background color
  textColor: PropTypes.string, // Text color
  hoverColor: PropTypes.string, // Hover color
  borderRadius: PropTypes.string, // Border radius
};

// Define default props
CustomButton.defaultProps = {
  bgColor: '#121212',
  textColor: '#34C94B',
  hoverColor: '#1a1a1a',
  borderRadius: '10px',
};

export default CustomButton;
