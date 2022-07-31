import * as Page from '../../components';
import * as Contacts from './components';

const ContactsPage = () => (
  <Page.Content sx={{
    display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', px: { xs: 0, md: 5 }, gap: 5,
  }}
  >
    <Contacts.ContactsInfo />
    <Contacts.ContactsForm />
  </Page.Content>
);

export default ContactsPage;
