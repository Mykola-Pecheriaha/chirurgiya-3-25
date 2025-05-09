import React from 'react';
import { Varicose } from '@/app/components/Varicose';
import { VaricoseBaner } from '@/app/components/VaricoseBaner';

const VaricosePage: React.FC = () => {
  return (
    <div>
      <VaricoseBaner backgroundColor="#90D3FFFF" />
      <Varicose backgroundColor="#DCF1FFFF" />
    </div>
  );
};

export default VaricosePage;
