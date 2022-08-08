import { useState } from 'react';
import { Box } from '@mui/material';
import * as Page from '../../components';
import * as Content from './components';

const ServicesPage = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page.Content sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 0, md: 5 }, pb: 5, gap: 3,
    }}
    >
      {/* <Page.Title title='Services' /> */}
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Box display='flex' justifyContent='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Content.TabsList value={value} onChange={handleChange} />
        </Box>
        <Content.TabPanel value={value} index={1}>
          <Content.DesignTab />
        </Content.TabPanel>
        <Content.TabPanel value={value} index={2}>
          <Content.ConstructionTab />
        </Content.TabPanel>
        <Content.TabPanel value={value} index={3}>
          <Content.DemolitionTab />
        </Content.TabPanel>
        <Content.TabPanel value={value} index={4}>
          <Content.EquipmentTab />
        </Content.TabPanel>
      </Box>
    </Page.Content>
  );
};

export default ServicesPage;
