import React from 'react';
import IntestineSurgery from '../../../components/IntestineSurgery';
import ColonSurgery from '../../../components/ColonSurgery';

const IntestineSurgeryPage: React.FC = () => {
  return (
    <div>
      <IntestineSurgery backgroundColor="#f0f7ff" />
      <ColonSurgery backgroundColor="#f0f7ff" />
    </div>
  );
};

export default IntestineSurgeryPage;
