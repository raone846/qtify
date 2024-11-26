import React from 'react';
import { Button } from '@mui/material';

function RightArrow() {
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
        <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    </Button>
  );
}

export default RightArrow;
