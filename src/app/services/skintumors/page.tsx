import React from 'react';
import { Skintumors } from '@/app/components/Skintumors';
import { SkintumorsDetails } from '@/app/components/SkintumorsDetails';

const SkintumorsPage: React.FC = () => {
  return (
    <div>
      <Skintumors backgroundColor="#4DE3F771" />
      <SkintumorsDetails backgroundColor="#97E9F76C" />
    </div>
  );
};

export default SkintumorsPage;
