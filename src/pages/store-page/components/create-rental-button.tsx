import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateRentalButton: React.FC<Props> = ({ setOpenCreateModal }) => (
  <Fab
    size='large'
    onClick={() => setOpenCreateModal(true)}
    sx={{
      position: 'sticky',
      bottom: { xs: 100, sm: 110 },
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
