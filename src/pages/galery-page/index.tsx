import { Box, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import * as Page from '../../components';
import * as Photo from './components';

interface PhotosInterface {
  id: number,
  url: string
}

const GaleryPage = () => {
  const [photos, setPhotos] = useState<PhotosInterface[] | []>([]);
  const [photoModal, setPhotoModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const getGaleryPhotos = async () => {
    const response = await fetch('http://localhost:8000/galeryPhotos');
    const data = await response.json();
    setPhotos([...data]);
  };

  const handleClick = (url: string) => {
    setPhotoModal(true);
    setImgSrc(url);
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
      <Grid container maxWidth={1440} sx={{ justifyContent: 'center' }}>
        {
        photos.map(({ id, url }) => (
          <Grid item key={id}>
            <Button
              color='secondary'
              sx={{
                opacity: 0.8,
                '&:hover': {
                  opacity: 1,
                },
              }}
              onClick={() => handleClick(url)}
            >
              <Box
                component='img'
                src={url}
                height={300}
                width={300}
                sx={{ objectFit: 'cover' }}
              />
            </Button>
          </Grid>
        ))
      }
      </Grid>
      <Photo.PhotoModal open={photoModal} src={imgSrc} onClose={() => setPhotoModal(false)} />
    </Page.Content>
  );
};

export default GaleryPage;
