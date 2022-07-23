import {
  Box, Button, Card, CardContent, CardMedia, Typography,
} from '@mui/material';

interface Props {
  img: string,
  title: string,
  description: string
}

const HomeCard = ({ img, title, description }: Props) => (
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
    <CardContent sx={{ height: 200, '&:last-child': { pb: 0 } }}>
      <Box sx={{
        height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
      >
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
        <Button variant='outlined' fullWidth color='secondary' sx={{ fontSize: 24, fontWeight: 400 }}>
          {title}
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default HomeCard;
