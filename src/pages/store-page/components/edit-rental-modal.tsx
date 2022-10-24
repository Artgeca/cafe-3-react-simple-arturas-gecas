import {
  Dialog, DialogTitle, DialogActions, Button, TextField, Box, MenuItem,
} from '@mui/material';
import { useState, useEffect } from 'react';
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
  const [formValues, setFormValues] = useState<FormInterface>(formInitialValues);

  const formatRental = (rental: RentalItemFetch) => {
    const {
      title, rentalCategoryId, specs, img,
    } = rental;

    return {
      title,
      category: rentalCategoryId.toString(),
      spec1: specs && specs[0] ? specs[0] : '',
      spec2: specs && specs[1] ? specs[1] : '',
      spec3: specs && specs[2] ? specs[2] : '',
      img: img || '',
    };
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const formatFormValues = () => {
    const {
      title,
      category,
      spec1,
      spec2,
      spec3,
      img,
    } = formValues;

    const specs: string[] = [];

    [spec1, spec2, spec3].forEach((spec) => {
      if (spec && spec !== '') {
        specs.push(spec);
      }
    });

    return {
      title,
      rentalCategoryId: +category,
      img,
      specs,
    };
  };

  const handleEditRental = async () => {
    const formatedData = formatFormValues();
    await RentalsService.update(editRentalId!, formatedData);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setEditRentalId(null);
    setFormValues(formInitialValues);
  };

  useEffect(() => {
    (
      async () => {
        if (editRentalId) {
          const item: RentalItemFetch = await RentalsService.fetchById(editRentalId);
          if (item) {
            setFormValues(formatRental(item));
          }
        }
      }
    )();
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
