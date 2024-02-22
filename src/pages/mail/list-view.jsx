import { useState, useCallback } from 'react';
import React from 'react';
import List from '@mui/material/List';
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

import Iconify from '../../components/iconify';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';
import ComponentHero from './component-hero';
import ComponentBlock from './component-block';

function ListItemLink(props) {
  return <ListItemButton component="a" {...props} />;
}

export default function ListView() {
  const [open, setOpen] = useState(true);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const [checked, setChecked] = useState([0]);

  const [toggle, setToggle] = useState(['wifi']);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleListItemClick = useCallback((event, index) => {
    setSelectedIndex(index);
  }, []);

  const handleCheck = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleToggle = (value) => () => {
    const currentIndex = toggle.indexOf(value);
    const newChecked = [...toggle];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setToggle(newChecked);
  };

  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="fluent:mail-24-filled" width={24} />
        </ListItemIcon>
        <ListItemText primary="All" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="solar:inbox-in-bold" width={24} />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>


      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="iconamoon:send-fill" width={24} />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="fluent:mail-24-filled" width={24} />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="solar:trash-bin-trash-bold" width={24} />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItemButton>
      
      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="solar:danger-bold" width={24} />
        </ListItemIcon>
        <ListItemText primary="Spam" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="material-symbols:label-important-rounded" width={24} />
        </ListItemIcon>
        <ListItemText primary="Important" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="eva:star-fill" width={24} />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="solar:tag-horizontal-bold-duotone" width={24} />
        </ListItemIcon>
        <ListItemText primary="Social" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="solar:tag-horizontal-bold-duotone" width={24} />
        </ListItemIcon>
        <ListItemText primary="Promotions" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Iconify icon="solar:tag-horizontal-bold-duotone" width={24} />
        </ListItemIcon>
        <ListItemText primary="Formus" />
      </ListItemButton>
    </>
  );
}
