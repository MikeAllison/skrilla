import React from 'react';

import MerchantItem from './MerchantItem';

const MerchantsList = props => {
  if (props.items.length === 0) {
    return (
      <div>
        <h3>Please add a merchant.</h3>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map(merchant => (
        <MerchantItem 
          key={merchant.id}
          id={merchant.id}
          name={merchant.name} 
        />
      ))}
    </ul>
  );
};

export default MerchantsList;