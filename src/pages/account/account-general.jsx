import * as Yup from "yup";
import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

import { useMockedUser } from "../../components/hooks/use-mocked-user";
import { fData } from "../../components/utils/format-number";

import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from "../../components/hook-form";
import { countries } from "../../assets/data";
import { Autocomplete, Switch, TextField } from "@mui/material";

export default function AccountGeneral() {
  const { user } = useMockedUser();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    photoURL: Yup.mixed().nullable().required("Avatar is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().required("Zip code is required"),
    about: Yup.string().required("About is required"),
    // not required
    isPublic: Yup.boolean(),
  });

  const defaultValues = {
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || null,
    phoneNumber: user?.phoneNumber || "",
    country: user?.country || "",
    address: user?.address || "",
    state: user?.state || "",
    city: user?.city || "",
    zipCode: user?.zipCode || "",
    about: user?.about || "",
    isPublic: user?.isPublic || false,
  };

  return (
    <FormProvider>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: "center" }}>
            <RHFUploadAvatar name="photoURL" maxSize={3145728} />
            <Typography
              variant="caption"
              sx={{
                mt: 3,
                mx: "auto",
                display: "block",
                textAlign: "center",
                color: "text.disabled",
              }}
            >
              Allowed *.jpeg, *.jpg, *.png, *.gif
              <br /> max size of {fData(3145728)}
            </Typography>
            <Switch
              name="isPublic"
              labelPlacement="start"
              label="Public Profile"
              sx={{ mt: 5 }}
            />

            <Button variant="soft" color="error" sx={{ mt: 3 }}>
              Delete User
            </Button>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              }}
            >
              <TextField name="displayName" label="Name" />
              <TextField name="email" label="Email Address" />
              <TextField name="phoneNumber" label="Phone Number" />
              <TextField name="address" label="Address" />

              <Autocomplete
                disablePortal
                name="country"
                type="country"
                label="Country"
                options={countries.map((option) => option?.label)}
                renderInput={(params) => (
                  <TextField {...params} label="Country" />
                )}
              />
              <TextField name="state" label="State/Region" />
              <TextField name="city" label="City" />
              <TextField name="zipCode" label="Zip/Code" />
            </Box>

            <Stack spacing={3}  sx={{ mt: 3 }}>
              <TextField name="about" multiline rows={4} label="About" />

              <LoadingButton type="submit" variant="contained">
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
