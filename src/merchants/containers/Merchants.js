import React from 'react';

import MerchantsList from '../components/MerchantsList';

const Merchants = () => {
  const MERCHANTS = [
    {
      id: '1',
      name: 'Solid State'
    }
  ];

  return <MerchantsList items={MERCHANTS} />;
};

export default Merchants;