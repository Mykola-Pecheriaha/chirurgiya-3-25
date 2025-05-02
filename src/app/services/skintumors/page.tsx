import React from 'react';
import { Skintumors } from '@/app/components/Skintumors';
import { SkintumorsDetails } from '@/app/components/SkintumorsDetails';

const SkintumorsPage: React.FC = () => {
  return (
    <div>
      <Skintumors backgroundColor="#8b000019" />
      <SkintumorsDetails backgroundColor="#8B626221" />
    </div>
  );
};

export default SkintumorsPage;
