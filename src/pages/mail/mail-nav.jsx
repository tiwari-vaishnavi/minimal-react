import PropTypes from 'prop-types';
import React from 'react';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { MailNavItemSkeleton } from './mail-skeleton';
import { useResponsive } from '../../components/hooks/use-responsive';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar/scrollbar';
import MailNavItem from './mail-nav-item';
import ListView from './list-view';

// ----------------------------------------------------------------------

export default function MailNav({
  loading,
  openNav,
  onCloseNav,
  labels,
  selectedLabelId,
  handleClickLabel,
  onToggleCompose,
}) {
  const mdUp = useResponsive('up', 'md');

  const renderSkeleton = (
    <>
      {[...Array(8)].map((_, index) => (
        <MailNavItemSkeleton key={index} />
      ))}
    </>
  );

  const renderList = (
    <>
      {labels?.map((label) => (
        <MailNavItem
          key={label.id}
          label={label}
          selected={selectedLabelId === label.id}
          onClickNavItem={() => {
            handleClickLabel(label.id);
          }}
        />
      ))}
    </>
  );

  const renderContent = (
    <>
      <Stack
        sx={{
          p: (theme) => ({
            xs: theme.spacing(2.5, 2.5, 2, 2.5),
            md: theme.spacing(2, 1.5),
          }),
        }}
      >
        <Button
          fullWidth
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="solar:pen-bold" />}
          onClick={onToggleCompose}
        >
          Compose
        </Button>
      </Stack>
<ListView/>
      <Scrollbar>
        <Stack
          sx={{
            px: { xs: 3.5, md: 2.5 },
          }}
        >
          {loading && renderSkeleton}

          {!!labels?.length && renderList}
        </Stack>
      </Scrollbar>
    </>
  );

  return mdUp ? (
    <Stack
      sx={{
        width: 200,
        flexShrink: 0,
      }}
    >
      {renderContent}
    </Stack>
  ) : (
    <Drawer
      open={openNav}
      onClose={onCloseNav}
      slotProps={{
        backdrop: { invisible: true },
      }}
      PaperProps={{
        sx: {
          width: 260,
        },
      }}
    >
      {renderContent}
    </Drawer>
  );
}

MailNav.propTypes = {
  handleClickLabel: PropTypes.func,
  labels: PropTypes.array,
  loading: PropTypes.bool,
  onCloseNav: PropTypes.func,
  onToggleCompose: PropTypes.func,
  openNav: PropTypes.bool,
  selectedLabelId: PropTypes.string,
};
