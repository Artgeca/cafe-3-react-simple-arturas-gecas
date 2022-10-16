import {
  Accordion,
  AccordionSummary,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  searchParams: URLSearchParams,
  handleOnChange: (_e: React.MouseEvent<HTMLElement>, newFilter: string) => void
}

interface Category {
  title: string,
  value: string
}

const rentalCategories: Category[] = [
  {
    title: 'Backhoe Loader',
    value: '1',
  },
  {
    title: 'Skid-Steer Loader',
    value: '2',
  },
  {
    title: 'Mini Excavator',
    value: '3',
  },
  {
    title: 'Excavator',
    value: '4',
  },
  {
    title: 'Dozer',
    value: '5',
  },
  {
    title: 'Wheel Loder',
    value: '6',
  },
  {
    title: 'Generator',
    value: '7',
  },

];

const CategoryFilter: React.FC<Props> = ({ searchParams, handleOnChange }) => (
  <Accordion sx={{ width: '100%', bgcolor: 'secondary.main' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
      <Typography color='primary.main'>Category</Typography>
    </AccordionSummary>
    <ToggleButtonGroup
      fullWidth
      color='secondary'
      orientation='vertical'
      value={searchParams.get('categoryType')}
      onChange={handleOnChange}
      exclusive
    >
      {
        rentalCategories.map((category) => (
          <ToggleButton key={category.value} value={category.value} sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
            {category.title}
          </ToggleButton>
        ))
      }
    </ToggleButtonGroup>
  </Accordion>
);

export default CategoryFilter;
