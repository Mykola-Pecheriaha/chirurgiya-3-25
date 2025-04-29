import React from 'react';
import LaparoscopicSurgery from '../../../components/LaparoscopicSurgery';
import { LaparoscopyDiagnostic } from '../../../components/LaparoscopyDiagnostic';
import { LaparoscopicCholecystectomy } from '@/app/components/LaparoscopicCholecystectomy';
import { LaparoAppendectomy } from '@/app/components/LaparoAppendectomy';

const LaparoscopicSurgeryPage: React.FC = () => {
  return (
    <div>
      <LaparoscopicSurgery backgroundColor="#C0DDFFFF" />
      <LaparoscopyDiagnostic backgroundColor="#E5F4FFFF" />
      <LaparoscopicCholecystectomy backgroundColor="#C0DDFFFF" />
      <LaparoAppendectomy backgroundColor="#E5F4FFFF" />
    </div>
  );
};

export default LaparoscopicSurgeryPage;
