import React from 'react';
import BreastAugmentation from '../../../components/BreastAugmentation/BreastAugmentation';
import BreastProblem from '../../../components/BreastProblem/BreastProblem';
import AugmentationConsultation from '../../../components/AugmentationConsultation';
import BreastAugmentationPreparation from '../../../components/BreastAugmentationPreparation';
import BreastQuestion from '../../../components/BreastQuestion/BreastQuestion';

import { beforeAfterImages } from '../../../../data/before-after-gallery-data';
import SideBySideGallery from '../../../components/SideBySideGallery';

const PlasticSurgeryPage: React.FC = () => {
  return (
    <div>
      <BreastAugmentation backgroundColor="#CFF1FFFF" />
      <BreastProblem backgroundColor="#f0f7ff" />
      <AugmentationConsultation backgroundColor="#CFF1FFFF" />
      <BreastAugmentationPreparation backgroundColor="#f5f5f5" />
      <BreastQuestion backgroundColor="#f0f7ff" />

      <SideBySideGallery
        images={beforeAfterImages}
        backgroundColor="#f0f7ff"
        showTitle={true}
        title='Приклади робіт "до і після"'
      />
    </div>
  );
};

export default PlasticSurgeryPage;
