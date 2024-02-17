import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React from 'react';





import Iconify from '../../components/iconify/iconify';
import { useSettingsContext } from '../../components/settings/context/settings-context';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';

import UserCardList from './user-card-list';
import { _userCards } from '../../_mock';

// ----------------------------------------------------------------------

export default function UserCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="User Cards"
        links={[
          { name: 'Dashboard' },
          { name: 'User' },
          { name: 'Cards' },
        ]}
        action={
          <Button
            
        
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New User
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <UserCardList users={_userCards} />
    </Container>
  );
}
