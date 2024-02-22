import { useEffect, useCallback } from 'react';
import React from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useRouter } from '../../components/hooks/use-router';
import { useSearchParams } from '../../components/hooks/use-search-params';
import { useBoolean } from '../../components/hooks/use-boolean';
import { useResponsive } from '../../components/hooks/use-responsive';
import EmptyContent from '../../components/empty-content/empty-content';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import MailNav from './mail-nav';
import MailList from './mail-list';
import MailHeader from './mail-header';
import MailCompose from './mail-compose';
import MailDetails from './mail-details';

const LABEL_INDEX = 'inbox';

export default function MailView() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const selectedLabelId = searchParams.get('label') || LABEL_INDEX;

  const selectedMailId = searchParams.get('id') || '';

  const mdUp = useResponsive('up', 'md');


  const openNav = useBoolean();
  // const { mails, mailsLoading, mailsError, mailsEmpty } = useGetMails(selectedLabelId);

  const openMail = useBoolean();

  const openCompose = useBoolean();
  const handleToggleCompose = useCallback(() => {
    if (openNav.value) {
      openNav.onFalse();
    }
    openCompose.onToggle();
  }, [openCompose, openNav]);

  const handleClickLabel = useCallback(
    (labelId) => {
      if (!mdUp) {
        openNav.onFalse();
      }

      if (labelId) {
      
        router.push(href);
      }
    },
    [openNav, router, mdUp]
  );

  const handleClickMail = useCallback(
    (mailId) => {
      if (!mdUp) {
        openMail.onFalse();
      }

      const href =
       
      router.push(href);
    },
    [openMail, router, selectedLabelId, mdUp]
  );


  useEffect(() => {
    if (openCompose.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openCompose.value]);

  const renderLoading = (
    <LoadingScreen
      sx={{
        borderRadius: 1.5,
        bgcolor: 'background.default',
      }}
    />
  );

  const renderEmpty = (
    <EmptyContent
      title={`Nothing in ${selectedLabelId}`}
      description="This folder is empty"
      imgUrl="/assets/icons/empty/ic_folder_empty.svg"
      sx={{
        borderRadius: 1.5,
        maxWidth: { md: 320 },
        bgcolor: 'background.default',
      }}
    />
  );

  const renderMailNav = (
    <MailNav
      openNav={openNav?.value}
      onCloseNav={openNav?.onFalse}
      selectedLabelId={selectedLabelId}
      handleClickLabel={handleClickLabel}
      onToggleCompose={handleToggleCompose}
    />
  );

  const renderMailList = (
    <MailList
      openMail={openMail?.value}
      onCloseMail={openMail?.onFalse}
      onClickMail={handleClickMail}
      selectedLabelId={selectedLabelId}
      selectedMailId={selectedMailId}
    />
  );

  const renderMailDetails = (
    <>
      <MailDetails
          renderLabel={(id) => labels.filter((label) => label.id === id)[0]}
        />
      </>
  );

  return (
    <>
      <Container>
        <Typography
          variant="h4"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          Mail
        </Typography>

        <Stack
          spacing={1}
          sx={{
            p: 1,
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'background.neutral',
          }}
        >
          {!mdUp && (
            <MailHeader
              onOpenNav={openNav?.onTrue}
            />
          )}

          <Stack
            spacing={1}
            direction="row"
            sx={{
              minHeight: { md: 720 },
              height: { xs: 800, md: '72vh' },
            }}
          >
            {renderMailNav}
            {renderMailList}
            {renderMailDetails}
          </Stack>
        </Stack>
      </Container>

      {openCompose.value && <MailCompose onCloseCompose={openCompose.onFalse} />}
    </>
  );
}
