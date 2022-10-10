import { Fab } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const SettingsFab: React.FC = () => (
  <Fab
    size='large'
    sx={(theme) => ({
      position: 'sticky',
      bottom: 40,
      left: '90%',
      bgcolor: theme.palette.common.black,
      color: theme.palette.primary.main,
      '&:hover': { bgcolor: theme.palette.grey[900] },
    })}
  >
    <TuneIcon />
  </Fab>
);

export default SettingsFab;
