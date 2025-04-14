import React from 'react';
import MastopexyWithNippleCorrection from '../../../components/MastopexyWithNippleCorrection/MastopexyWithNippleCorrection';
import BreastLiftIndications from '../../../components/BreastLiftIndications/BreastLiftIndications';
import BreastLiftContraIndications from '../../../components/BreastLiftContraIndications/BreastLiftContraIndications';
import BreastLiftPreparation from '../../../components/BreastLiftPreparation/BreastLiftPreparation';
import MastopexyInfo from '../../../components/MastopexyInfo/MastopexyInfo';
import BreastLiftFAQ from '../../../components/BreastLiftFAQ/BreastLiftFAQ';

const MastopexyWithNippleCorrectionPage: React.FC = () => {
  return (
    <div>
      <MastopexyWithNippleCorrection backgroundColor="#E6F8BCFF" />
      <BreastLiftIndications backgroundColor="#F3FCDDFF" />
      <BreastLiftContraIndications backgroundColor="#E6F8BCFF" />
      <BreastLiftPreparation backgroundColor="#F3FCDDFF" />
      <MastopexyInfo backgroundColor="#E6F8BCFF" />
      <BreastLiftFAQ backgroundColor="#F3FCDDFF" />
    </div>
  );
};

export default MastopexyWithNippleCorrectionPage;
