import { Box, Dialog } from '@mui/material';

interface Props {
  open: boolean,
  src: string,
  onClose: () => void,
}

const PhotoModal = ({
  open, src, onClose,
}: Props) => (
  <Dialog open={open} onClose={onClose}>
    <Box
      component='img'
      src={src}
      height='100%'
      width='100%'
      overflow='hidden'
      sx={{ objectFit: 'cover' }}
    />
  </Dialog>
);

export default PhotoModal;
