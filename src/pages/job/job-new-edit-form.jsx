import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useMemo, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import ButtonBase from '@mui/material/ButtonBase';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useRouter } from '../../components/hooks/use-router';
import { countries } from '../../assets/data/countries';
import { useResponsive } from '../../components/hooks/use-responsive';
import Iconify from '../../components/iconify';
import { JOB_BENEFIT_OPTIONS, JOB_EMPLOYMENT_TYPE_OPTIONS, JOB_EXPERIENCE_OPTIONS, JOB_SKILL_OPTIONS, JOB_WORKING_SCHEDULE_OPTIONS, _roles } from '../../_mock';
import RHFEditor from '../../components/hook-form/rhf-editor';
import RHFSwitch from '../../components/hook-form/rhf-switch';
import RHFTextField from '../../components/hook-form/rhf-text-field';
import RHFRadioGroup from '../../components/hook-form/rhf-radio-group';
import RHFAutocomplete from '../../components/hook-form/rhf-autocomplete';
import { RHFMultiCheckbox } from '../../components/hook-form/rhf-checkbox';
import FormProvider from '../../components/hook-form/form-provider';


export default function JobNewEditForm({ currentJob }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');


  const NewJobSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    employmentTypes: Yup.array().min(1, 'Choose at least one option'),
    role: Yup.string().required('Role is required'),
    skills: Yup.array().min(1, 'Choose at least one option'),
    workingSchedule: Yup.array().min(1, 'Choose at least one option'),
    benefits: Yup.array().min(1, 'Choose at least one option'),
    locations: Yup.array().min(1, 'Choose at least one option'),
    expiredDate: Yup.mixed().nullable().required('Expired date is required'),
    salary: Yup.object().shape({
      type: Yup.string(),
      price: Yup.number().min(1, 'Price is required'),
      negotiable: Yup.boolean(),
    }),
    experience: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentJob?.title || '',
      content: currentJob?.content || '',
      employmentTypes: currentJob?.employmentTypes || [],
      experience: currentJob?.experience || '1 year exp',
      role: currentJob?.role || _roles[1],
      skills: currentJob?.skills || [],
      workingSchedule: currentJob?.workingSchedule || [],
      locations: currentJob?.locations || [],
      benefits: currentJob?.benefits || [],
      expiredDate: currentJob?.expiredDate || null,
      salary: currentJob?.salary || {
        type: 'Hourly',
        price: 0,
        negotiable: false,
      },
    }),
    [currentJob]
  );

  const methods = useForm({
    resolver: yupResolver(NewJobSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentJob) {
      reset(defaultValues);
    }
  }, [currentJob, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentJob ? 'Update success!' : 'Create success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderDetails = (
    <>

      <Grid md={4}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Details
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Title, short description, image...
        </Typography>
      </Grid>


      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="title" label="Job Title" />

            <RHFTextField name="description" label="Description" multiline rows={3} />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Content</Typography>
              <RHFEditor simple name="content"/>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Cover</Typography>

            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Properties
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Employment type</Typography>
              <RHFMultiCheckbox
                row
                spacing={4}
                name="employmentTypes"
                options={JOB_EMPLOYMENT_TYPE_OPTIONS}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2">Experience</Typography>
              <RHFRadioGroup row spacing={4} name="experience" options={JOB_EXPERIENCE_OPTIONS} />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Role</Typography>
              <RHFAutocomplete
                name="role"
                autoHighlight
                options={_roles.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Skills</Typography>
              <RHFAutocomplete
                name="skills"
                placeholder="+ Skills"
                multiple
                disableCloseOnSelect
                options={JOB_SKILL_OPTIONS.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Working schedule</Typography>
              <RHFAutocomplete
                name="workingSchedule"
                placeholder="+ Schedule"
                multiple
                disableCloseOnSelect
                options={JOB_WORKING_SCHEDULE_OPTIONS.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Locations</Typography>
              <RHFAutocomplete
                name="locations"
                type="country"
                placeholder="+ Locations"
                multiple
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Expired</Typography>

              <DatePicker
                format="dd/MM/yyyy"
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
              />
            </Stack>

            <Stack spacing={2}>
              <Typography variant="subtitle2">Salary</Typography>


              <Box gap={2} display="grid" gridTemplateColumns="repeat(2, 1fr)">
                {[
                  {
                    label: 'Hourly',
                    icon: <Iconify icon="solar:clock-circle-bold" width={32} sx={{ mb: 2 }} />,
                  },
                  {
                    label: 'Custom',
                    icon: <Iconify icon="solar:wad-of-money-bold" width={32} sx={{ mb: 2 }} />,
                  },
                ].map((item) => (
                  <Paper
                    component={ButtonBase}
                    variant="outlined"
                    key={item.label}
                    sx={{
                      p: 2.5,
                      borderRadius: 1,
                      typography: 'subtitle2',
                      flexDirection: 'column',

                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Paper>
                ))}
              </Box>


              <RHFTextField
                name="salary.price"
                placeholder="0.00"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ typography: 'subtitle2', color: 'text.disabled' }}>$</Box>
                    </InputAdornment>
                  ),
                }}
              />
              <RHFSwitch name="salary.negotiable" label="Salary is negotiable" />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2">Benefits</Typography>
              <RHFMultiCheckbox
                name="benefits"
                options={JOB_BENEFIT_OPTIONS}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Publish"
          sx={{ flexGrow: 1, pl: 3 }}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2 }}
        >
          {!currentJob ? 'Create Job' : 'Save Changes'}
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Grid>

    </FormProvider>
  );
}

JobNewEditForm.propTypes = {
  currentJob: PropTypes.object,
};
