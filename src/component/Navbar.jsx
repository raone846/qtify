import React from 'react';
import Logo from './Logo';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CustomeButton from './CustomeButton';

function Navbar() {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#34C94B', // Navbar background color
        color: '#fff', // Text color for the navbar
      }}
    >
      {/* Logo Section */}
      <Logo />

      {/* Search Bar */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          mx: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="search" 
          label="search" 
          placeholder="search a song|search a album|search an album"
          variant="outlined" 
          size="small"
          sx={{ 
            width: '100%', 
            maxWidth: '400px',
            backgroundColor: '#fff', // Search bar background
            borderRadius: '4px',
            border: '1px solid #121212', // Add border
            '& .MuiOutlinedInput-root': {
              borderRadius: '4px',
            },
          }} 
          InputLabelProps={{
            style: { color: '#121212' }, // Green label text
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment 
                position="end"
                sx={{
                  height: '100%', // Match the height of the search box
                  borderLeft: '2px solid #121212', // Add border between text field and icon
                }}
              >
                <Box 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%', // Match the height of the search box
                    width: '40px', // Set consistent width for the icon area
                    backgroundColor: '#fff', // Match the search box background
                    color: '#121212', // Icon color
                    border: 'none',
                  }}
                >
                  <SearchIcon />
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Action Button */}
      <CustomeButton
        text="Give Feedback"
      />
      
    </Box>
  );
}

export default Navbar;
