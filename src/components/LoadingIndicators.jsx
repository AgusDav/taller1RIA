import { Box, CircularProgress, LinearProgress } from '@mui/material';

const LoadingIndicators = ({ loading }) => {
  if (!loading) return null;
  
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <LinearProgress 
        sx={{ 
          height: 6, 
          borderRadius: 3,
          mb: 3
        }} 
      />
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 2,
          '& .MuiCircularProgress-root': {
            animation: 'grow 2s infinite',
            '@keyframes grow': {
              '0%': { transform: 'scale(0.8)' },
              '50%': { transform: 'scale(1)' },
              '100%': { transform: 'scale(0.8)' },
            }
          }
        }}
      >
        <CircularProgress size={60} thickness={4} />
      </Box>
    </Box>
  );
};

export default LoadingIndicators;