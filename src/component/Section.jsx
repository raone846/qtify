import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, Grid, Box, Tabs, Tab } from '@mui/material';
import AlbumCard from './AlbumCard';
import Carousel from './Carousel';

function Section({ title, fetchUrl, uniqueId, isSongsSection = false }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Fetch albums or songs data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  // Fetch genres for songs section
  useEffect(() => {
    if (isSongsSection) {
      const fetchGenres = async () => {
        try {
          const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
          const genresArray = response.data.data; // Access the `data` key within the response
          setGenres(['All', ...genresArray.map((genre) => genre.label)]); // Add "All" and map over the genres
        } catch (error) {
          console.error('Error fetching genres:', error);
        }
      };
      fetchGenres();
    }
  }, [isSongsSection]);

  // Filter songs based on selected genre
  const filteredData =
    selectedGenre === 'All'
      ? data
      : data.filter((song) => song.genre?.label.toLowerCase() === selectedGenre.toLowerCase());

  // Handle Tab Change
  const handleTabChange = (event, newValue) => {
    setSelectedGenre(genres[newValue]);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#121212',
        color: 'white',
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

        {!isSongsSection && (
          <Button
            variant="text"
            onClick={() => setCollapsed(!collapsed)}
            sx={{
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: '#34C94B',
              '&:hover': {
                color: '#2FA03E',
              },
            }}
          >
            {collapsed ? 'Show all' : 'Collapse'}
          </Button>
        )}
      </Box>

      {/* Genre Filter Tabs */}
      {isSongsSection && genres.length > 0 && (
        <Box sx={{ marginBottom: '16px' }}>
          <Tabs
            value={genres.indexOf(selectedGenre)}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#34C94B', // Green rectangle for selected tab
              },
            }}
            sx={{
              '.MuiTab-root': {
                color: '#FFFFFF', // Default text color
                textTransform: 'none', // Prevent uppercase
              },
              '.Mui-selected': {
                color: '#FFFFFF !important', // Force white text even when selected
              },
            }}
          >
            {genres.map((genre, index) => (
              <Tab
                key={index}
                label={genre}
                sx={{
                  color: '#FFFFFF', // Text remains white
                }}
              />
            ))}
          </Tabs>
        </Box>
      )}

      {/* Carousel or Full Grid View */}
      {collapsed ? (
        <Carousel
          data={filteredData}
          renderItem={(item) => <AlbumCard {...item} isSongsSection={isSongsSection} />}
          uniqueId={uniqueId}
        />
      ) : (
        <Grid container spacing={3}>
          {filteredData.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={1.71}
              xl={1.71}
            >
              <AlbumCard {...item} isSongsSection={isSongsSection} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Section;
