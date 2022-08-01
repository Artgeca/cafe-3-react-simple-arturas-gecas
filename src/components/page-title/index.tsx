import { Typography } from '@mui/material';

const index = ({ title }: { title: string }) => (
  <Typography
    variant='h2'
    component='h1'
    fontWeight={100}
    fontSize={{ xs: 30, sm: 40 }}
    color='primary'
  >
    {title}
  </Typography>
);

export default index;
