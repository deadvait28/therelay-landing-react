import React, { useRef } from 'react';
import { Box } from '@mui/material';
import useInView from '../hooks/useInView';

const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};

export default FadeIn; 