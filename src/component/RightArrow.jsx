import React from 'react';
import { Button } from '@mui/material';

function RightArrow() {
  return (
    <Button
      sx={{
        minWidth: '40px',
        minHeight: '40px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        '&:hover': {
          backgroundColor: '#2F2F2F', // Optional: Add hover background for better UX
        },
        svg: {
          fill: '#34C94B', // Apply color to the SVG
          width: '32px',
          height: '32px',
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#34C94B"
        viewBox="0 0 24 24"
        width="32px"
        height="32px"
      >
        <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    </Button>
  );
}

export default RightArrow;
