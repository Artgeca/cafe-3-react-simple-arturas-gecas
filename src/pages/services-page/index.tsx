import { useState } from 'react';
import { Box } from '@mui/material';
import * as Page from '../../components';
import * as Content from './components';
import TabPanel from './components/tab-panel';
import TabsList from './components/tabs-list';

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
          <TabsList value={value} onChange={handleChange} />
        </Box>
        <TabPanel value={value} index={1}>
          <Content.DesignTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Content.ConstructionTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Content.DemolitionTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Content.EquipmentTab />
        </TabPanel>
      </Box>
    </Page.Content>
  );
};

export default ServicesPage;
