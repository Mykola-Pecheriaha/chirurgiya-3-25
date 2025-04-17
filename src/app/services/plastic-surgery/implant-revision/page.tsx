import React from 'react';
import ImplantRevision from '../../../components/ImplantRevision/ImplantRevision';
import BreastImplantRevision from '../../../components/BreastImplantRevision/BreastImplantRevision';
import ImplantReplacementProcedure from '../../../components/ImplantReplacementProcedure/ImplantReplacementProcedure';
import ImplantBreastRecoveryReabilit from '../../../components/ImplantBreastRecoveryReabilit/ImplantBreastRecoveryReabilit';

const ImplantRevisionPage: React.FC = () => {
  return (
    <div>
      <ImplantRevision backgroundColor="#f0f7ff" />
      <BreastImplantRevision backgroundColor="#D6E8FCFF" />
      <ImplantReplacementProcedure backgroundColor="#f0f7ff" />
      <ImplantBreastRecoveryReabilit backgroundColor="#D6E8FCFF" />
    </div>
  );
};

export default ImplantRevisionPage;
