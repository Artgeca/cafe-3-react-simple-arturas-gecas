import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateRentalButton: React.FC<Props> = ({ setOpen }) => (
  <Fab
    size='large'
    onClick={() => setOpen(true)}
    sx={{
      position: 'sticky',
      bottom: { xs: 80, sm: 90 },
      left: { xs: '75%', sm: '100%' },
      bgcolor: 'common.black',
      color: 'common.white',
      '&:hover': { bgcolor: 'grey.900' },
    }}
  >
    <AddIcon color='primary' />
  </Fab>
);

export default CreateRentalButton;
