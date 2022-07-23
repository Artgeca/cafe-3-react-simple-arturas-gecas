import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Card, CardContent, CardMedia, Theme, Typography, useMediaQuery,
} from '@mui/material';

interface Props {
  img: string,
  title: string,
  description: string
}

const HomeCard = ({ img, title, description }: Props) => {
  const navigate = useNavigate();

  return (
    <Card sx={{
      p: 2, width: 300, bgcolor: 'primary.light',
    }}
    >
      <CardMedia
        component='img'
        height={200}
        image={img}
        alt='design'
      />
      <CardContent sx={{ height: 190, '&:last-child': { pb: 0 } }}>
        <Box sx={{
          height: '100%', display: 'flex', flexDirection: 'column', gap: 2,
        }}
        >
          <Button variant='outlined' fullWidth color='secondary' sx={{ fontSize: 24, fontWeight: 400 }} onClick={() => navigate('/services')}>
            {title}
          </Button>
          <Typography
            variant='body2'
            color='text'
            align='left'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '5',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
