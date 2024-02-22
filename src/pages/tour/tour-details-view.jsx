import PropTypes from 'prop-types';
import React,{ useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';


import { _tours, TOUR_DETAILS_TABS, TOUR_PUBLISH_OPTIONS } from '../../_mock';

import Label from '../../components/label';
import { useSettingsContext } from '../../components/settings';

import TourDetailsToolbar from './tour-details-toolbar';
import TourDetailsBookers from './tour-details-bookers';

// ----------------------------------------------------------------------

export default function TourDetailsView({ id }) {
  const settings = useSettingsContext();
  // console.log(_tours);

  const currentTour = _tours[0];

  const [publish, setPublish] = useState(currentTour?.publish);

  const [currentTab, setCurrentTab] = useState('bookers');

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
      {TOUR_DETAILS_TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === 'bookers' ? (
              <Label variant="filled">{currentTour?.bookers.length}</Label>
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
      <TourDetailsToolbar
        liveLink="#"
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={TOUR_PUBLISH_OPTIONS}
      />
      {renderTabs}

      {currentTab === 'bookers' && <TourDetailsBookers bookers={currentTour?.bookers} />}


    </Container>
  );
}

TourDetailsView.propTypes = {
  id: PropTypes.string,
};
