import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Hello() {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
            }}
        >
            <Typography variant="h3" component="h1">
                Hello, User!
            </Typography>
        </Box>
    );
}
