import * as Page from '../../components';

const AboutPage = () => (
  <Page.Content sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 3, md: 5 }, pb: 5, gap: 3,
  }}
  >
    <Page.Title title='AboutPage' />
  </Page.Content>
);

export default AboutPage;
