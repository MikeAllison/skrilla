import React from 'react';
import { Link } from 'react-router-dom';

const MerchantItem = props => {
  return <li><Link to={`merchants/${props.id}`}>{props.name}</Link></li>;
}

export default MerchantItem;