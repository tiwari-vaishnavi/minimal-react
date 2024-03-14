import { m } from 'framer-motion';
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { fDate } from '../../components/utils/format-time';
import { TOUR_SERVICE_OPTIONS, _tourGuides } from '../../_mock';
import Image from '../../components/image';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export default function TourDetailsContent({ tour }) {
  const {
    name,
    images,
    content,
    services,
    tourGuides,
    available,
    durations,
    destination,
    ratingNumber,
  } = tour;

  const slides = images.map((slide) => ({
    src: slide,
  }));



  const renderGallery = (
    <>
      <Box
        gap={1}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <m.div
          key={slides[0].src}
          whileHover="hover"
          variants={{
            hover: { opacity: 0.8 },
          }}
        
        >
          <Image
            alt={slides[0].src}
            src="https://i.ibb.co/Fq3Jt8D/travel-2.jpg"
            ratio="1/1"
            
            sx={{ borderRadius: 2, cursor: 'pointer' }}
          />
        </m.div>

        <Box gap={1} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          {slides.slice(1, 5).map((slide) => (
            <m.div
              key={slide.src}
              whileHover="hover"
              variants={{
                hover: { opacity: 0.8 },
              }}
              
            >
              <Image
                alt={slide.src}
                src="https://i.ibb.co/tsNywBj/travel-3.jpg"
                ratio="1/1"
              
                sx={{ borderRadius: 2, cursor: 'pointer' }}
              />
            </m.div>
          ))}
        </Box>
      </Box>


    </>
  );

  const renderHead = (
    <>
      <Stack direction="row" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
        Historic Heritage Tour
        </Typography>

        <IconButton>
          <Box icon="solar:share-bold" component={Icon}
            className="component-iconify" sx={{ width:16 , height:16 }} />
        </IconButton>

        <Checkbox
          defaultChecked
          color="error"  
           icon={
       
          <Box icon="solar:heart-outline" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />
        }
          checkedIcon={
          <Box icon="solar:heart-bold" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />
        }
        />
      </Stack>

      <Stack spacing={3} direction="row" flexWrap="wrap" alignItems="center" gap="10px">
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
      

          <Box icon="eva:star-fill" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 ,color: 'warning.main'}} />
          <Box component="span" sx={{ typography: 'subtitle2' }}>
            {ratingNumber}
          </Box>
          <Link sx={{ color: 'text.secondary' }}>(234 reviews)</Link>
        </Stack>

        <Stack direction="row" alignItems="center" gap="5px" spacing={0.5} sx={{ typography: 'body2' }}>
          <Box icon="mingcute:location-fill" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 , color: 'error.main' }} />
          India
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5} gap="10px" sx={{ typography: 'subtitle2' }}>
        <Box icon="solar:flag-bold" component={Icon}
        className="component-iconify" sx={{ width:20 , height:20 , color: 'info.main' }} />
          <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
            Guide by
          </Box>
          Lucian Obrien, Deja Brady
        </Stack>
      </Stack>
    </>
  );

  const renderOverview = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
    >
      {[
        {
          label: 'Available',
          value: `${fDate(available.startDate)} - ${fDate(available.endDate)}`,
          icon: 
          <Box icon="solar:calendar-date-bold" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />
          ,
        },
        {
          label: 'Contact name',
          value: 'Lucian Obrien, Deja Brady',
          icon:
          <Box icon="solar:user-rounded-bold" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />
          ,
        },
        {
          label: 'Durations',
          value: durations,
          icon: 
          <Box icon="solar:clock-circle-bold" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />
          ,
        },
        {
          label: 'Contact phone',
          value: '904-966-2836, 399-757-9909',
          icon: 

          <Box icon="solar:phone-bold" component={Icon}
          className="component-iconify" sx={{ width:16 , height:16 }} />

          ,
        },
      ].map((item) => (
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
    </Box>
  );

  const renderContent = (
    <>
      

      <Stack spacing={2}>
        <Typography variant="h6"> Services</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {TOUR_SERVICE_OPTIONS.map((service) => (
            <Stack
              key={service.label}
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{
                ...(services.includes(service.label) && {
                  color: 'text.disabled',
                }),
              }}
            >


              <Box icon="eva:checkmark-circle-2-outline" component={Icon}
              className="component-iconify" sx={{ width:16 , height:16  }} />
              {service.label}
            </Stack>
          ))}
        </Box>
      </Stack>
    </>
  );

  return (
    <>
      {renderGallery}

      <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
        {renderHead}

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        {renderOverview}

        <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

        {renderContent}
      </Stack>
    </>
  );
}

