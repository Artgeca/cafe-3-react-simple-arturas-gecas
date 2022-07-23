import {
  Box,
  Button, Card, CardContent, CardMedia, colors, Typography, useTheme,
} from '@mui/material';

interface Props {
  img: string,
  title: string,
  description: string
}

const HomeCard = ({ img, title, description }: Props) => {
  const theme = useTheme();

  return (
    <Card sx={{
      p: 2, width: 300, bgcolor: colors.lime[100],
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
            color='text.secondary'
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
          <Button variant='outlined' fullWidth color='inherit' sx={{ fontSize: 24, fontWeight: 400 }}>
            {title}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
