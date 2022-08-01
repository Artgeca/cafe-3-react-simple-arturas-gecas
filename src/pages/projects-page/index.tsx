import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import * as Page from '../../components';
import ProjectCard from './components/project-card';
import { ProjectsDataInterface } from './types';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<ProjectsDataInterface[] | []>([]);

  const getProjects = async () => {
    const response = await fetch('http://localhost:8000/projectsData');
    const data = await response.json();

    setProjects([...data]);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Page.Content sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 3, md: 5 }, pb: 5, gap: 3,
    }}
    >
      <Page.Title title='Projects' />
      <Grid
        container
        justifyContent='center'
        gap={2}
        maxWidth={1440}
      >
        {
          projects.map((project) => (
            <Grid
              item
              key={project.id}
            >
              <ProjectCard project={project} />
            </Grid>
          ))
        }
      </Grid>
    </Page.Content>
  );
};

export default ProjectsPage;
