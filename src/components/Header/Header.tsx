import React from 'react'
import { Box, Typography } from '@mui/material';

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => (
    <Box textAlign='left'>
        <Typography sx={{fontSize: 36 }} variant='h1' component='h1' gutterBottom>
            мативация поднять {todoCount} раз
        </Typography>
    </Box>
)
  