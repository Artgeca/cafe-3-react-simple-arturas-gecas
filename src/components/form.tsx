import {
  Box, Button, Paper, Typography,
} from '@mui/material';

interface Props {
  children: React.ReactNode,
  title: string,
  btnText: string,
  onSubmit: () => void,
  disabled: boolean
}

const Form: React.FC<Props> = ({
  children, title, btnText, onSubmit, disabled,
}) => (
  <Paper
    component='form'
    onSubmit={onSubmit}
    sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 400, p: 3, mx: 3, mt: { xs: 12, md: 12 }, mb: { xs: 5, md: 3 },
    }}
  >
    <Typography variant='h4' fontWeight={100} mb={3}>{title}</Typography>
    <Box sx={{
      display: 'flex', flexDirection: 'column', width: '100%', gap: 2,
    }}
    >
      {children}
    </Box>
    <Button
      type='submit'
      variant='contained'
      fullWidth
      color='secondary'
      disabled={disabled}
      sx={{ mt: 4 }}
    >
      {btnText}
    </Button>
  </Paper>
);

export default Form;
