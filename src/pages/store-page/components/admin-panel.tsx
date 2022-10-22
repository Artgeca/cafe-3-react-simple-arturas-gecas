import { Box, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TuneIcon from '@mui/icons-material/Tune';

const AdminPanel = () => (
  <Box sx={{
    display: 'flex', width: '100%', gap: 2,
  }}
  >
    <Button
      variant='contained'
      color='secondary'
      fullWidth
    >
      <Box display='flex' gap={1}>
        Edit
        <TuneIcon color='warning' />
      </Box>
    </Button>
    <Button
      variant='contained'
      color='secondary'
      fullWidth
    >
      <Box display='flex' gap={1}>
        Delete
        <DeleteOutlineIcon color='error' />
      </Box>
    </Button>
  </Box>
);

export default AdminPanel;
