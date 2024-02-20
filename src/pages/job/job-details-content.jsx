import PropTypes from 'prop-types';
import React from 'react';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fCurrency } from '../../components/utils/format-number';
import Iconify from '../../components/iconify';
import { fDate } from '../../components/utils/format-time';
import { _jobTitles,_companyNames, _fullAddress, _phoneNumbers } from '../../_mock/assets';
import {JOB_SKILL_OPTIONS, JOB_BENEFIT_OPTIONS, CONTENT} from '../../_mock/_job';

export default function JobDetailsContent({ job }) {
  const {
    title,
    skills,
    salary,
    content,
    benefits,
    createdAt,
    experience,
    expiredDate,
    employmentTypes,
  } = job;
  const firstThreeBenefits = JOB_BENEFIT_OPTIONS.slice(0, 3);
  const ContentComponent = () => {
    return (
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    );
  };
  const renderContent = (
    <Stack component={Card} spacing={3} sx={{ p: 3 }}>
      <Typography variant="h4">
        {_jobTitles[1]}
      </Typography>
<ContentComponent/>
  

      <Stack spacing={2}>
        <Typography variant="h6">Skills</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {JOB_SKILL_OPTIONS?.slice(0, 3)?.map((skill) => (
            <Chip key={skill} label={skill} variant="soft" />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6">Benefits</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
      {firstThreeBenefits.map(benefit => (
        <Chip key={benefit.value} label={benefit.label} variant="soft" />
      ))}
    </Stack>
      </Stack>
    </Stack>
  );

  const renderOverview = (
    <Stack component={Card} spacing={2} sx={{ p: 3 }}>
      {[
        {
          label: 'Date Posted',
          value: fDate(createdAt),
          icon: <Iconify icon="solar:calendar-date-bold" />,
        },
        {
          label: 'Expiration date',
          value: fDate(expiredDate),
          icon: <Iconify icon="solar:calendar-date-bold" />,
        },
        {
          label: 'Employment type',
          value: employmentTypes,
          icon: <Iconify icon="solar:clock-circle-bold" />,
        },
        {
          label: 'Offered salary',
          value: salary?.negotiable ? 'Negotiable' : fCurrency(salary?.price),
          icon: <Iconify icon="solar:wad-of-money-bold" />,
        },
        {
          label: 'Experience',
          value: experience,
          icon: <Iconify icon="carbon:skill-level-basic" />,
        },
      ]?.map((item) => (
        <Stack key={item.label} spacing={1.5} direction="row">
          {item.icon}
          <ListItemText
            primary={item.label}
            secondary={item.value}
            primaryTypographyProps={{
              typography: 'body2',
              color: 'text.secondary',
              mb: 0.5,
            }}
            secondaryTypographyProps={{
              typography: 'subtitle2',
              color: 'text.primary',
              component: 'span',
            }}
          />
        </Stack>
      ))}
    </Stack>
  );

  const renderCompany = (
    <Stack
      component={Paper}
      variant="outlined"
      spacing={2}
      direction="row"
      sx={{ p: 3, borderRadius: 2, mt: 3 }}
    >
      <Avatar
        alt={job?.company?.name}
        src={job?.company?.logo}
        variant="rounded"
        sx={{ width: 64, height: 64 }}
      />

      <Stack spacing={1}>
        <Typography variant="subtitle1">{_companyNames[0]}</Typography>
        <Typography variant="body2">{_fullAddress[0]}</Typography>
        <Typography variant="body2">{_phoneNumbers[0]}</Typography>
      </Stack>
    </Stack>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        {renderContent}
      </Grid>

      <Grid xs={12} md={4}>
        {renderOverview}

        {renderCompany}
      </Grid>
    </Grid>
  );
}

JobDetailsContent.propTypes = {
  job: PropTypes.object,
};
