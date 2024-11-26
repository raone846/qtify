import React from 'react';
import { Button } from '@mui/material';

function LeftArrow() {
  return (
    <Button
      sx={{
        minWidth: '40px',
        minHeight: '40px',
        borderRadius: '50%',
        backgroundColor: '#34C94B', // Green fill for the button
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        '&:hover': {
          backgroundColor: '#2FA03E', // Slightly darker green on hover
        },
        svg: {
          width: '24px',
          height: '24px',
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF" // White icon color
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </Button>
  );
}

export default LeftArrow;
