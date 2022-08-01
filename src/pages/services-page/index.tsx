import * as Page from '../../components';

const ServicesPage = () => (
  <Page.Content sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 3, md: 5 }, pb: 5, gap: 3,
  }}
  >
    <Page.Title title='ServicesPage' />
  </Page.Content>
);

export default ServicesPage;
