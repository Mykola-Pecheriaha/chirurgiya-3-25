import React from 'react';
import ImplantRevision from '../../../components/ImplantRevision/ImplantRevision';
import BreastImplantRevision from '../../../components/BreastImplantRevision/BreastImplantRevision';
import ImplantReplacementProcedure from '../../../components/ImplantReplacementProcedure/ImplantReplacementProcedure';
import ImplantBreastRecoveryReabilit from '../../../components/ImplantBreastRecoveryReabilit/ImplantBreastRecoveryReabilit';

const ImplantRevisionPage: React.FC = () => {
  return (
    <div>
      <ImplantRevision backgroundColor="#BEDAFAFF" />
      <BreastImplantRevision backgroundColor="#EFF6FDFF" />
      <ImplantReplacementProcedure backgroundColor="#BEDAFAFF" />
      <ImplantBreastRecoveryReabilit backgroundColor="#EFF6FDFF" />
    </div>
  );
};

export default ImplantRevisionPage;
