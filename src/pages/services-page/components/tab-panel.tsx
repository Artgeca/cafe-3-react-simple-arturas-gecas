import { Box } from '@mui/material';
import React from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const {
    children, index, value,
  } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
    >
      {value === index && (
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          sx={{ p: 3, color: 'common.white' }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
