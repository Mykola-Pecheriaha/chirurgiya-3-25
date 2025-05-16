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
      <MastopexyWithNippleCorrection backgroundColor="#BEDAFAFF" />
      <BreastLiftIndications backgroundColor="#DFECFCFF" />
      <BreastLiftContraIndications backgroundColor="#BEDAFAFF" />
      <BreastLiftPreparation backgroundColor="#DFECFCFF" />
      <MastopexyInfo backgroundColor="#BEDAFAFF" />
      <BreastLiftFAQ backgroundColor="#DFECFCFF" />
    </div>
  );
};

export default MastopexyWithNippleCorrectionPage;
