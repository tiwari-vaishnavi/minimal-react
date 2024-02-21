
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

import { useBoolean } from '../../components/hooks/use-boolean';

import Iconify from '../../components/iconify';

import PaymentCardItem from '../../components/payment/payment-card-item';
import PaymentNewCardDialog from '../../components/payment/payment-new-card-dialog';

// ----------------------------------------------------------------------

export default function AccountBillingPayment({ cards }) {
  const newCard = useBoolean();

  return (
    <>
      <Card sx={{ my: 3 }}>
        <CardHeader
          title="Payment Method"
          action={
            <Button
              size="small"
              color="primary"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={newCard.onTrue}
            >
              New Card
            </Button>
          }
        />

        <Box
          rowGap={2.5}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          sx={{ p: 3 }}
        >
      
        </Box>
      </Card>

      <PaymentNewCardDialog open={newCard.value} onClose={newCard.onFalse} />
    </>
  );
}


