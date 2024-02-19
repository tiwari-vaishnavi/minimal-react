import React, { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import { useMockedUser } from '../../components/hooks/use-mocked-user';


import { useSettingsContext } from '../../components/settings';

import ChatNav from './chat-nav';
import ChatRoom from './chat-room';
import ChatMessageList from './chat-message-list';
import ChatMessageInput from './chat-message-input';
import ChatHeaderDetail from './chat-header-detail';
import ChatHeaderCompose from './chat-header-compose';

// ----------------------------------------------------------------------

export default function ChatView() {


  const { user } = useMockedUser();

  const settings = useSettingsContext();




  const [recipients, setRecipients] = useState([]);

 

 

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      flexShrink={0}
      sx={{ pr: 1, pl: 2.5, py: 1, minHeight: 72 }}
    >
    
    </Stack>
  );

 
  const renderMessages = (
    <Stack
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
     
      <ChatMessageInput />
        
    </Stack>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Chat
      </Typography>

      <Stack component={Card} direction="row" sx={{ height: '72vh' }}>
      

        <Stack
          sx={{
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          {renderHead}

          <Stack
            direction="row"
            sx={{
              width: 1,
              height: 1,
              overflow: 'hidden',
              borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            {renderMessages}

            
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
