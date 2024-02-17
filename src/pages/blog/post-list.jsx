import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

import Iconify from "../../components/iconify";

import PostItem from "./post-item";
import { PostItemSkeleton } from "./post-skeleton";

// ----------------------------------------------------------------------

export default function PostList({ posts, loading, disabledIndex }) {
  const smUp = useResponsive("up", "sm");

  if (variant === "horizontal") {
    return (
      <Stack
        component={Paper}
        direction="row"
        variant="outlined"
        sx={{
          borderRadius: 2,
          ...sx,
        }}
        {...other}
      >
        <Stack spacing={2} flexGrow={1} sx={{ p: 3 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
            <Skeleton sx={{ width: 24, height: 12 }} />
          </Stack>

          <Skeleton sx={{ width: 1, height: 10 }} />
          <Skeleton sx={{ width: `calc(100% - 40px)`, height: 10 }} />
          <Skeleton sx={{ width: `calc(100% - 80px)`, height: 10 }} />
        </Stack>

        {smUp && (
          <Stack sx={{ p: 1 }}>
            <Skeleton sx={{ width: 170, height: 240, flexShrink: 0 }} />
          </Stack>
        )}
      </Stack>
    );
  }
  const renderSkeleton = (
    <>
      {[...Array(16)].map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={3}>
          <Stack
            component={Paper}
            variant="outlined"
            sx={{
              borderRadius: 2,
              ...sx,
            }}
            {...other}
          >
            <Stack sx={{ p: 1 }}>
              <Skeleton sx={{ paddingTop: "100%" }} />
            </Stack>

            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{ p: 3, pt: 2 }}
            >
              <Skeleton
                variant="circular"
                sx={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <Stack flexGrow={1} spacing={1}>
                <Skeleton sx={{ height: 10 }} />
                <Skeleton sx={{ width: 0.5, height: 10 }} />
              </Stack>
            </Stack>
          </Stack>{" "}
        </Grid>
      ))}
    </>
  );

  const renderList = (
    <>
      {posts.map((post, index) => (
        <Grid
          key={post.id}
          xs={12}
          sm={6}
          md={!disabledIndex && index === 0 ? 6 : 3}
        >
          <PostItem post={post} index={!disabledIndex ? index : undefined} />
        </Grid>
      ))}
    </>
  );

  return (
    <>
      <Grid container spacing={3}>
        {loading ? renderSkeleton : renderList}
      </Grid>

      {posts.length > 8 && (
        <Stack
          alignItems="center"
          sx={{
            mt: 8,
            mb: { xs: 10, md: 15 },
          }}
        >
          <Button
            size="large"
            variant="outlined"
            startIcon={
              <Iconify icon="svg-spinners:12-dots-scale-rotate" width={24} />
            }
          >
            Load More
          </Button>
        </Stack>
      )}
    </>
  );
}
