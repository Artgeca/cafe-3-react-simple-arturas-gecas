import {
  Box, Button, Paper, Typography,
} from '@mui/material';

interface Props {
  children: React.ReactNode,
  title: string,
  btnText: string,
  onSubmit: () => void
}

const Form = ({
  children, title, btnText, onSubmit,
}: Props) => (
  <Paper
    component='form'
    onSubmit={onSubmit}
    sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 400, p: 3, m: 3,
    }}
  >
    <Typography variant='h4' fontWeight={100}>{title}</Typography>
    <Box sx={{
      display: 'flex', flexDirection: 'column', width: '100%', gap: 1,
    }}
    >
      {children}
    </Box>
    <Button
      type='submit'
      variant='contained'
      fullWidth
      color='secondary'
      sx={{ mt: 4 }}
    >
      {btnText}
    </Button>
  </Paper>
);

export default Form;
