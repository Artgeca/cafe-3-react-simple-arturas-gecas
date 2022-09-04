import { Box } from '@mui/material';

interface Props {
  src: string,
  width: number,
}

const Image: React.FC<Props> = ({ src, width }) => (
  <Box
    component='img'
    src={src}
    width={width}
  />
);

export default Image;
