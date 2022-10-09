import {
  Box, Button, TextField,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  amount: number,
  onInc: () => void,
  onDec: () => void,
}

const AmountField: React.FC<Props> = ({
  amount, onInc, onDec,
}) => (
  <Box display='flex' gap={1}>
    <Button variant='contained' color='secondary' onClick={onDec}>
      <RemoveIcon />
    </Button>
    <TextField
      color='secondary'
      size='small'
      inputProps={{
        style: {
          padding: 0, height: 36, textAlign: 'center',
        },
        readOnly: true,
      }}
      value={amount}
    />
    <Button variant='contained' color='secondary' onClick={onInc}>
      <AddIcon />
    </Button>
  </Box>
);

export default AmountField;
