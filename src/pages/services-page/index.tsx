import { useContext } from 'react';
import { Box } from '@mui/material';
import * as Page from '../../components';
import * as Content from './components';
import { ServiceNavigationContext } from '../../contexts/services-page-navigation-context';

const ServicesPage = () => {
  const { index, setIndex } = useContext(ServiceNavigationContext);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setIndex(newValue);
  };

  return (
    <Page.Content sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 0, md: 5 }, pb: 5, gap: 3,
    }}
    >
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Box display='flex' justifyContent='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Content.TabsList value={index} onChange={handleChange} />
        </Box>
        <Content.TabPanel value={index} index={1}>
          <Content.DesignTab />
        </Content.TabPanel>
        <Content.TabPanel value={index} index={2}>
          <Content.ConstructionTab />
        </Content.TabPanel>
        <Content.TabPanel value={index} index={3}>
          <Content.DemolitionTab />
        </Content.TabPanel>
        <Content.TabPanel value={index} index={4}>
          <Content.EquipmentTab />
        </Content.TabPanel>
      </Box>
    </Page.Content>
  );
};

export default ServicesPage;
