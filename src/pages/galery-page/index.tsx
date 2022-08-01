import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import * as Page from '../../components';

interface PhotosInterface {
  id: number,
  url: string
}

const GaleryPage = () => {
  const [photos, setPhotos] = useState<PhotosInterface[] | []>([]);

  const getGaleryPhotos = async () => {
    const response = await fetch('http://localhost:8000/galeryPhotos');
    const data = await response.json();
    setPhotos([...data]);
  };

  useEffect(() => {
    getGaleryPhotos();
  }, []);

  return (
    <Page.Content sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 3, md: 5 }, pb: 5, gap: 3,
    }}
    >
      <Page.Title title='Photo galery' />
      <Grid container gap={2} sx={{ justifyContent: 'center' }}>
        {
        photos.map((photo) => (
          <Grid item key={photo.id}>
            <Box
              component='img'
              src={photo.url}
              height={300}
              width={300}
              sx={{ objectFit: 'cover' }}
            />
          </Grid>
        ))
      }
      </Grid>
    </Page.Content>
  );
};

export default GaleryPage;
