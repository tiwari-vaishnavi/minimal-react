import React from 'react';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export default function TourDetailsBookers({ bookers }) {
  const [approved, setApproved] = useState([]);

  const handleClick = useCallback(
    (item) => {
      const selected = approved.includes(item)
        ? approved.filter((value) => value !== item)
        : [...approved, item];

      setApproved(selected);
    },
    [approved]
  );

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {bookers.map((booker) => (
        <BookerItem
          key={booker.id}
          booker={booker}
          selected={approved.includes(booker.id)}
          onSelected={() => handleClick(booker.id)}
        />
      ))}
    </Box>
  );
}


// ----------------------------------------------------------------------

function BookerItem({ booker, selected, onSelected }) {
  return (
    <Stack component={Card} direction="row" spacing={2} key={booker.id} sx={{ p: 3 }} alignItems="flex-start">
      <Avatar alt={booker.name} src={booker.avatarUrl} sx={{ width: 48, height: 48 }} />

      <Stack spacing={2} flexGrow={1}>
        <ListItemText
          primary={booker.name}
          secondary={
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box icon="solar:users-group-rounded-bold" component={Icon}
            className="component-iconify" sx={{ width:16 , height:16 }} />
              {booker.guests} guests
            </Stack>
          }
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
            color: 'text.disabled',
          }}
        />

        <Stack spacing={1} direction="row">
          <IconButton
            size="small"
            color="error"
            sx={{
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
              '&:hover': {
                bgcolor: (theme) => alpha(theme.palette.error.main, 0.16),
              },
            }}
          >

            <Box icon="solar:phone-bold" component={Icon}
            className="component-iconify" sx={{ width:18 , height:18 }} />
          </IconButton>

          <IconButton
            size="small"
            color="info"
            sx={{
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.info.main, 0.08),
              '&:hover': {
                bgcolor: (theme) => alpha(theme.palette.info.main, 0.16),
              },
            }}
          >

            <Box icon="solar:chat-round-dots-bold" component={Icon}
            className="component-iconify" sx={{ width:18 , height:18 }} />
          </IconButton>

          <IconButton
            size="small"
            color="primary"
            sx={{
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
              '&:hover': {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
              },
            }}
          >
            <Box icon="fluent:mail-24-filled" component={Icon}
            className="component-iconify" sx={{ width:18 , height:18 }} />
          </IconButton>
        </Stack>
      </Stack>

      <Button
        size="small"
        variant={selected ? 'text' : 'outlined'}
        color={selected ? 'success' : 'inherit'}
        startIcon={
          selected ? 
          <Box icon="eva:checkmark-fill" component={Icon}
          className="component-iconify" sx={{ width:18 , height:18 }} />: null
        }
        onClick={onSelected}
      >
        {selected ? 'Approved' : 'Approve'}
      </Button>
    </Stack>
  );
}

