import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper, Grid, Link } from '@mui/material';

const ShowPersonProfile = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {profile.firstName} {profile.middleName} {profile.lastName}
        </Typography>
        <Typography variant="body1">Primary Phone: {profile.primaryPhone}</Typography>
        <Typography variant="body1">Primary Email: {profile.primaryEmail}</Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Addresses:</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">Home: {profile.addresses.home}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Office: {profile.addresses.office}</Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Social Media Links:</Typography>
        <Typography variant="body1">
          Facebook: <Link href={profile.socialMediaLinks.facebook} target="_blank" rel="noopener">Facebook Profile</Link>
        </Typography>
        <Typography variant="body1">
          LinkedIn: <Link href={profile.socialMediaLinks.linkedIn} target="_blank" rel="noopener">LinkedIn Profile</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ShowPersonProfile;
