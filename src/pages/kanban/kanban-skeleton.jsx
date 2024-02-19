
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { _taskNames } from '../../_mock';

export function KanbanColumnSkeleton({ }) {
  return (
    <Grid container spacing={2}>
      {_taskNames.map((taskName, index) => (
        <Grid item key={index} xs={4}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Skeleton sx={{ paddingTop: '75%', borderRadius: 1.5 }} />
            <div>{taskName}</div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
