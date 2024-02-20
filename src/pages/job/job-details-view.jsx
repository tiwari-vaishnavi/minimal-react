import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';

import Label from '../../components/label/label';
import { useSettingsContext } from '../../components/settings/context/settings-context';
import JobDetailsToolbar from './job-details-toolbar';
import { _jobTitles } from '../../_mock/assets';
import { JOB_DETAILS_TABS, JOB_PUBLISH_OPTIONS } from '../../_mock/_job';
import JobDetailsContent from './job-details-content';
import JobDetailsCandidates from './job-details-candidates';


// ----------------------------------------------------------------------

export default function JobDetailsView({ id }) {
  const settings = useSettingsContext();

  const currentJob = _jobTitles?.filter((job) => job.id === id)[0];

  const [publish, setPublish] = useState(currentJob?.publish);

  const [currentTab, setCurrentTab] = useState('content');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const handleChangePublish = useCallback((newValue) => {
    setPublish(newValue);
  }, []);

  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      sx={{
        mb: { xs: 3, md: 5 },
      }}
    >
      {JOB_DETAILS_TABS?.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === 'candidates' ? (
              <Label variant="filled">{currentJob?.candidates?.length}</Label>
            ) : (
              ''
            )
          }
        />
      ))}
    </Tabs>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <JobDetailsToolbar
        liveLink="#"
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={JOB_PUBLISH_OPTIONS}
      />
      {renderTabs}

      {currentTab === 'content' && <JobDetailsContent job={currentJob} />}

      {currentTab === 'candidates' && <JobDetailsCandidates candidates={currentJob?.candidates} />}
    </Container>
  );
}

JobDetailsView.propTypes = {
  id: PropTypes.string,
};
