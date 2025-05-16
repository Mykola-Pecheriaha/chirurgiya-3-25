import React from 'react';
import { Varicose } from '@/app/components/Varicose';
import { VaricoseBaner } from '@/app/components/VaricoseBaner';
import TreatmentResults from '../../components/TreatmentResults/TreatmentResults';

const VaricosePage: React.FC = () => {
  return (
    <div>
      <VaricoseBaner backgroundColor="#90D3FFFF" />
      <Varicose backgroundColor="#DCF1FFFF" />
      <TreatmentResults backgroundColor="#F8FCFFFF" />
    </div>
  );
};

export default VaricosePage;
