import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { Popover } from '@mui/material';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export default function TourDetailsToolbar({
  publish,
  backLink,
  editLink,
  liveLink,
  publishOptions,
  onChangePublish,
  sx,
  ...other
}) {
  // const popover = usePopover();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Stack
        spacing={1.5}
        direction="row"
        sx={{
          mb: { xs: 3, md: 5 },
          ...sx,
          
        }}
        {...other}
      >
        <Button
          href={backLink}
          startIcon={
          <Box icon="eva:arrow-ios-back-fill" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />

        }
        >
          Back
        </Button>

        <Box sx={{ flexGrow: 1 }} />

 

        <Tooltip title="Edit">
          <IconButton href={editLink}>
            <Box icon="solar:pen-bold" component={Icon}
            className="component-iconify" sx={{ width:16 , height:16 }} />
          </IconButton>
        </Tooltip>

        <Button
        onClick={handlePopoverOpen}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        >
        {publish === 'published' &&
        <Box icon="eva:cloud-upload-fill" component={Icon}
            className="component-iconify" sx={{ width:16 , height:16 }} />}
        {publish === 'draft' && 
        <Box icon="solar:file-text-bold" component={Icon}
        className="component-iconify" sx={{ width:16 , height:16 }} />
      }
        {publish}
        </Button>
        <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        >
        {publishOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === publish}
            onClick={() => {
              onChangePublish(option.value);
              handlePopoverClose();
            }}
          >
            {option.value === 'published' &&

            <Box icon="eva:cloud-upload-fill" component={Icon}
            className="component-iconify" sx={{ width:16 , height:16 }} />
          }
            {option.value === 'draft' && 
            <Box icon="solar:file-text-bold" component={Icon}
            className="component-iconify" sx={{ width:16 , height:16 }} />
          }
            {option.label}
          </MenuItem>
        ))}
        </Popover>
      </Stack>


    </>
  );
}