import {
  Box, Paper, Typography,
} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import contactsMapImg from '../../../assets/images/contacts_map.jpg';

const ContactsInfo: React.FC = () => (
  <Paper
    elevation={3}
    sx={{
      p: 5, mt: { xs: 0, md: 12 }, mb: 5, textAlign: 'center', height: { md: 780 }, width: '85%', maxWidth: 500, order: { xs: 2, md: 1 }, backgroundColor: 'primary.light',
    }}
  >
    <Typography variant='h4' fontWeight={100} mb={3}>Contact Information</Typography>
    <Box
      display='flex'
      flexDirection='column'
    >
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        mb={5}
      >
        <Box display='flex' gap={2}>
          <PhoneIphoneIcon />
          <Typography variant='body1'>
            +0123 4567 8910
          </Typography>
        </Box>
        <Box display='flex' gap={2}>
          <MailOutlineIcon />
          <Typography variant='body1'>
            engservices@mail.com
          </Typography>
        </Box>
        <Box display='flex' gap={2}>
          <PlaceIcon />
          <Typography variant='body1'>
            1875 Atlantic Ave, 11233
          </Typography>
        </Box>
      </Box>
      <Box
        component='img'
        height={{ xs: 300, md: 370 }}
        width='100%'
        src={contactsMapImg}
        sx={{ objectFit: 'cover' }}
      />
    </Box>
  </Paper>
);

export default ContactsInfo;
