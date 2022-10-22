import {
  Dialog, DialogTitle, DialogActions, Button, TextField, Box, MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { rentalCategories } from '../../../assets/data/rentals-data';

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormInterface {
  title: string,
  category: string,
  spec1?: string,
  spec2?: string,
  spec3?: string,
  img?: string
}

const formInitialValues: FormInterface = {
  title: '',
  category: '',
  spec1: '',
  spec2: '',
  spec3: '',
  img: '',
};

const CreateRentalModal: React.FC<Props> = ({ open, setOpen }) => {
  const [formValues, setFormValues] = useState(formInitialValues);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
      <Box p={2}>
        <DialogTitle>
          Create New Rental
        </DialogTitle>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mb: 2,
        }}
        >
          <TextField
            name='title'
            color='secondary'
            label='Title'
            value={formValues.title}
            onChange={handleOnChange}
          />
          <TextField
            name='category'
            color='secondary'
            label='Category'
            select
            value={formValues.category}
            onChange={handleOnChange}
          >
            {rentalCategories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name='spec1'
            color='secondary'
            label='Spec 1'
            value={formValues.spec1}
            onChange={handleOnChange}
          />
          <TextField
            name='spec2'
            color='secondary'
            label='Spec 2'
            value={formValues.spec2}
            onChange={handleOnChange}
          />
          <TextField
            name='spec3'
            color='secondary'
            label='Spec 3'
            value={formValues.spec3}
            onChange={handleOnChange}
          />
          <TextField
            name='img'
            color='secondary'
            label='Image URL'
            value={formValues.img}
            onChange={handleOnChange}
          />
        </Box>
        <DialogActions>
          <Button variant='contained' color='secondary' onClick={() => setOpen(false)}>Close</Button>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: 'primary.main' }}
          >
            Create
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CreateRentalModal;
