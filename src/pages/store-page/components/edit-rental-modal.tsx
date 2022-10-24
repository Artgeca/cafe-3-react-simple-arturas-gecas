import {
  Dialog, DialogTitle, DialogActions, Button, TextField, Box, MenuItem,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { rentalCategories } from '../../../assets/data/rentals-data';
import RentalsService from '../../../services/rentals-service';
import { RentalItemFetch } from '../types';

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  editRentalId: string | null,
  setEditRentalId: React.Dispatch<React.SetStateAction<string | null>>,
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

const EditRentalModal: React.FC<Props> = ({
  open, setOpen, editRentalId, setEditRentalId,
}) => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const [rental, setRental] = useState<RentalItemFetch>();
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleEditRental = () => {

  };

  const handleClose = () => {
    setOpen(false);
    setEditRentalId(null);
  };

  useEffect(() => {
    (async () => {
      if (editRentalId) {
        const item = await RentalsService.fetchById(editRentalId);
        setRental(item);
      }
    })();
  }, [editRentalId]);

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
    >
      <Box p={2}>
        <DialogTitle>
          Edit Rental
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
            required
            color='secondary'
            label='Title'
            value={formValues.title}
            onChange={handleOnChange}
          />
          <TextField
            name='category'
            required
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
          <Button variant='contained' color='secondary' onClick={handleClose}>Close</Button>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: 'primary.main' }}
            onClick={handleEditRental}
          >
            Edit
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditRentalModal;
