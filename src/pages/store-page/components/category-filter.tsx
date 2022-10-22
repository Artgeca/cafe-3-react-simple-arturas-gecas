import {
  Accordion,
  AccordionSummary,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { rentalCategories } from '../../../assets/data/rentals-data';

interface Props {
  searchParams: URLSearchParams,
  handleOnChange: (_e: React.MouseEvent<HTMLElement>, newFilter: string) => void
}

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
