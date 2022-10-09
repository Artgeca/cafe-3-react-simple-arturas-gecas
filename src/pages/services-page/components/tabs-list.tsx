import { Tab, Tabs } from '@mui/material';

interface Props {
  value: number,
  onChange: (e: React.SyntheticEvent, newValue: number) => void
}

const tabsData = [
  {
    label: 'Design',
    value: 1,
  },
  {
    label: 'Construction',
    value: 2,
  },
  {
    label: 'Demolition',
    value: 3,
  },
  {
    label: 'Equipment',
    value: 4,
  },
];

const TabsList = ({ value, onChange }: Props) => (
  <Tabs
    value={value}
    onChange={onChange}
    variant='scrollable'
    allowScrollButtonsMobile
  >
    {
      tabsData.map((tab) => (
        <Tab
          key={tab.value}
          label={tab.label}
          value={tab.value}
          sx={{
            color: 'grey.300', fontSize: 16, fontWeight: { xs: 300, sm: 400 },
          }}
        />
      ))
    }
  </Tabs>
);

export default TabsList;
