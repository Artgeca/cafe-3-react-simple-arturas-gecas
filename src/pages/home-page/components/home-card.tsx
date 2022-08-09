import {
  Box, Button, Card, CardContent, CardMedia, Typography,
} from '@mui/material';

interface Props {
  img: string,
  title: string,
  description: string,
  handleNavigation: (i: number) => void,
  i: number
}

const HomeCard = ({
  img, title, description, handleNavigation, i,
}: Props) => (
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
    <CardContent sx={{
      height: 190, '&:last-child': { pb: 0 }, p: 0, pt: 2,
    }}
    >
      <Box sx={{
        height: '100%', display: 'flex', flexDirection: 'column', gap: 2,
      }}
      >
        <Button
          variant='outlined'
          fullWidth
          color='secondary'
          sx={{ fontSize: 18, fontWeight: 400 }}
          onClick={() => handleNavigation(i)}
        >
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

export default HomeCard;
