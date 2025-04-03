import React from 'react';
import GastroDuodeno from '../../../components/GastroDuodeno/GastroDuodeno';
import GastroDuodenoSurgery from '../../../components/GastroDuodenoSurgery/GastroDuodenoSurgery';

const GastroDuodenoPage: React.FC = () => {
  return (
    <div>
      <GastroDuodeno backgroundColor="#f0f7ff" />
      <GastroDuodenoSurgery backgroundColor="#f0f7ff" />
    </div>
  );
};

export default GastroDuodenoPage;
