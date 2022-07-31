import {
  Box,
  Button, Card, CardMedia, Typography,
} from '@mui/material';
import { ProjectsDataInterface } from '../types';

const ProjectCard = ({ project }: { project: ProjectsDataInterface }) => (
  <Card sx={{ p: 2, width: 300 }}>
    <CardMedia
      component='img'
      image={project.img}
      height={200}
      sx={{ pb: 2 }}
    />
    <Box
      display='flex'
      flexDirection='column'
      height={{ xs: 120, md: 140 }}
      justifyContent='space-between'
    >
      <Box>
        <Typography>{`Building type: ${project.type}`}</Typography>
        <Typography>{`Address: ${project.address}`}</Typography>
      </Box>
      <Button variant='contained' color='secondary'>More about project</Button>
    </Box>
  </Card>
);

export default ProjectCard;
