import {
  Box, Button, Dialog, DialogActions, DialogTitle, Typography,
} from '@mui/material';
import { ProjectsDataInterface } from '../types';

interface Props {
  open: boolean,
  onClose: () => void,
  project: ProjectsDataInterface
}

const ProjectCardModal = ({
  open, project, onClose,
}: Props) => (
  <Dialog onClose={onClose} open={open} fullWidth>
    <DialogTitle>{project.address}</DialogTitle>
    <Box display='flex' flexDirection='column' gap={2}>
      <Box
        component='img'
        src={project.img}
        height={{ xs: 200, sm: 300 }}
        sx={{ objectFit: 'cover' }}
      />
      <Box
        display='flex'
        flexDirection='column'
        gap={1}
        px={2}
      >
        <Box>
          <Typography fontWeight={500}>Building Type: </Typography>
          <Typography>{project.type}</Typography>
        </Box>
        <Box>
          <Typography fontWeight={500}>Description:</Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis, excepturi. Nesciunt facere ut, pariatur
            dolores optio tempora error itaque consequuntur vero
            deserunt eaque modi dolore veniam asperiores aspernatur,
            temporibus consequatur repudiandae consectetur delectus?
            Eos possimus quisquam consectetur exercitationem ad quasi
            voluptate aliquam beatae autem, hic voluptates deleniti
            aliquid esse cupiditate reiciendis numquam ut commodi
            reprehenderit dolor deserunt corporis qui. Pariatur
            aspernatur ratione sed ab quisquam quidem odio officia
            tempore quos cumque dolor cupiditate dolorum voluptate
            est, placeat ullam modi non perspiciatis molestiae illo
            asperiores magnam? Corrupti autem explicabo quae
            laboriosam labore nisi esse ipsam illum. Aliquid porro,
            aut iure dicta modi ipsum nobis libero labore fugit et
            velit minima commodi blanditiis iusto corrupti ullam.
            Nulla cum minus ducimus nesciunt praesentium optio
            dignissimos voluptatibus vitae voluptate veniam animi
            iusto in at rem, ipsam hic sed accusamus adipisci,
            accusantium magni provident sit dolore saepe! Quod
            architecto soluta nisi iste voluptatum exercitationem
            vero!
          </Typography>
        </Box>
      </Box>
    </Box>
    <DialogActions>
      <Button color='secondary' onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

export default ProjectCardModal;
