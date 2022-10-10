import {
  SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, Box,
} from '@mui/material';

interface Props {
  drawerOpen: boolean,
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsDrawer: React.FC<Props> = ({ drawerOpen, setDrawerOpen }) => (
  <SwipeableDrawer
    anchor='left'
    open={drawerOpen}
    onOpen={() => setDrawerOpen(true)}
    onClose={() => setDrawerOpen(false)}
    sx={{ zIndex: 1099 }}
    PaperProps={{ sx: { bgcolor: 'primary.light' } }}
  >
    <List sx={{
      py: 3, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center',
    }}
    >
      <ListItem disablePadding>
        <ListItemButton sx={{ px: 5 }} onClick={() => { }}>
          <ListItemText primary='page.title' />
        </ListItemButton>
      </ListItem>
    </List>
  </SwipeableDrawer>
);

export default SettingsDrawer;
