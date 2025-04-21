import React from 'react';
import Blefaroplastic from '../../../components/Blefaroplastic/Blefaroplastic';
import BlepharoplastytDetails from '../../../components/BlepharoplastytDetails/BlepharoplastytDetails';
import BlepharoPreparation from '../../../components/BlepharoPreparation/BlepharoPreparation';
import BlepharoFAQ from '../../../components/BlepharoFAQ/BlepharoFAQ';

const BlefaroplasticPage: React.FC = () => {
  return (
    <div>
      <Blefaroplastic backgroundColor="#f8f4ff" />
      <BlepharoplastytDetails backgroundColor="#f8f4ff" />
      <BlepharoPreparation backgroundColor="#f8f4ff" />
      <BlepharoFAQ backgroundColor="#f5f8ff" />
    </div>
  );
};

export default BlefaroplasticPage;
