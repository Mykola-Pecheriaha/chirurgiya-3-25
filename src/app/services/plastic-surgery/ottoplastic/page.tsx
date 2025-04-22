import React from 'react';
import { Ottoplastic } from '../../../components/Ottoplastic/Ottoplastic';
import { OttoDetails } from '../../../components/OttoDetails';
import { OttoPreparation } from '../../../components/OttoPreparation';
import { OttoFAQ } from '../../../components/OttoFAQ';

const OttoplasticPage: React.FC = () => {
  return (
    <div>
      <Ottoplastic backgroundColor="#DCEBFAFF" />
      <OttoDetails backgroundColor="#f8f9fa" />
      <OttoPreparation backgroundColor="#DCEBFAFF" />
      <OttoFAQ backgroundColor="#f5f5f5" />
    </div>
  );
};

export default OttoplasticPage;
