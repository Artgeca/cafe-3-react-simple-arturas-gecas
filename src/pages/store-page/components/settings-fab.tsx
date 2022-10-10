import { Fab } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

interface Props {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsFab: React.FC<Props> = ({ setDrawerOpen }) => (
  <Fab
    size='large'
    onClick={() => setDrawerOpen(true)}
    sx={(theme) => ({
      display: { xs: 'flex', xl: 'none' },
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
