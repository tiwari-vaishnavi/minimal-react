import * as Yup from "yup";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import React, { useMemo, useEffect, useCallback } from "react";

import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Unstable_Grid2";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useResponsive } from "../../components/hooks/use-responsive";

import { countries } from "../../assets/data/countries";
import { _tags, _tourGuides, TOUR_SERVICE_OPTIONS } from "../../_mock";

import FormProvider, {
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
  // RHFMultiCheckbox,
} from "../../components/hook-form";
import { RHFMultiCheckbox } from "../../components/hook-form/rhf-checkbox";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import Editor from "../../components/editor";

// ----------------------------------------------------------------------

export default function TourNewEditForm() {
  const mdUp = useResponsive("up", "md");
  const currentTour = "fsdf";

  const NewTourSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    content: Yup.string().required("Content is required"),
    images: Yup.array().min(1, "Images is required"),
    //
    tourGuides: Yup.array().min(1, "Must have at least 1 guide"),
    durations: Yup.string().required("Duration is required"),
    tags: Yup.array().min(2, "Must have at least 2 tags"),
    services: Yup.array().min(2, "Must have at least 2 services"),
    destination: Yup.string().required("Destination is required"),
    available: Yup.object().shape({
      startDate: Yup.mixed().nullable().required("Start date is required"),
      endDate: Yup.mixed()
        .required("End date is required")
        .test(
          "date-min",
          "End date must be later than start date",
          (value, { parent }) => value.getTime() > parent.startDate.getTime()
        ),
    }),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentTour?.name || "",
      content: currentTour?.content || "",
      images: currentTour?.images || [],
      //
      tourGuides: currentTour?.tourGuides || [],
      tags: currentTour?.tags || [],
      durations: currentTour?.durations || "",
      destination: currentTour?.destination || "",
      services: currentTour?.services || [],
      available: {
        startDate: currentTour?.available?.startDate || null,
        endDate: currentTour?.available?.endDate || null,
      },
    }),
    [currentTour]
  );

  const methods = useForm({
    resolver: yupResolver(NewTourSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentTour) {
      reset(defaultValues);
    }
  }, [currentTour, defaultValues, reset]);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const files = values.images || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue("images", [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveFile = useCallback(
    (inputFile) => {
      const filtered =
        values.images && values.images?.filter((file) => file !== inputFile);
      setValue("images", filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue("images", []);
  }, [setValue]);

  const renderDetails = <>
  
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
            <Stack>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                Tour Guide
              </Typography>

           
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Available</Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              <DatePicker />

              <DatePicker label="date" />
              </Stack>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Duration</Typography>
              <TextField name="durations" placeholder="Ex: 2 days, 4 days 3 nights..." />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Destination</Typography>
              <TextField
                name="destination"
                placeholder="+ Destination"
              />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2">Services</Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend">Tour Service Options</FormLabel>
                <FormGroup>
                  {TOUR_SERVICE_OPTIONS.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      control={<Checkbox />}
                      label={option.label}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Tags</Typography>
       <TextField/>
            </Stack>
          </Stack>
        </Card>
      </Grid></>;

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Properties
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                Tour Guide
              </Typography>

              <TextField placeholder="+ Tour Guides" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Available</Typography>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <DatePicker />

                <DatePicker label="date" />
              </Stack>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Duration</Typography>
              <TextField
                name="durations"
                placeholder="Ex: 2 days, 4 days 3 nights..."
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Destination</Typography>
              <TextField />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2">Services</Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend">Tour Service Options</FormLabel>
                <FormGroup>
                  {TOUR_SERVICE_OPTIONS.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      control={<Checkbox />}
                      label={option.label}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Tags</Typography>
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Publish"
          sx={{ flexGrow: 1, pl: 3 }}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          sx={{ ml: 2 }}
        >
          Create Tour
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <Grid container spacing={3}>
      {renderDetails}

      {renderProperties}

      {renderActions}
    </Grid>
  );
}

TourNewEditForm.propTypes = {
  currentTour: PropTypes.object,
};
