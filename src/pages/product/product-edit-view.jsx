import PropTypes from 'prop-types';
import React from 'react';
import Container from '@mui/material/Container';


// import { useGetProduct } from 'src/api/product';

// import { useSettingsContext } from 'src/components/settings';
import ProductNewEditForm from './product-new-edit-form';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs/custom-breadcrumbs';


export default function ProductEditView({ id }) {
  // const settings = useSettingsContext();

  // const { product: currentProduct } = useGetProduct(id);

  return (
    <Container>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard' },
          {
            name: 'Product',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProductNewEditForm/>
    </Container>
  );
}

ProductEditView.propTypes = {
  id: PropTypes.string,
};
