import { Tab, Tabs } from '@mui/material';

interface Props {
  value: number,
  onChange: (e: React.SyntheticEvent, newValue: number) => void
}

const TabsList = ({ value, onChange }: Props) => (
  <Tabs
    value={value}
    onChange={onChange}
    variant='scrollable'
    allowScrollButtonsMobile
  >
    <Tab label='Design' value={1} sx={{ color: 'grey.300' }} />
    <Tab label='Construction' value={2} sx={{ color: 'grey.300' }} />
    <Tab label='Demolition' value={3} sx={{ color: 'grey.300' }} />
    <Tab label='Equipment' value={4} sx={{ color: 'grey.300' }} />
  </Tabs>
);

export default TabsList;
