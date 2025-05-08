import React from 'react';
import { Proctology } from '@/app/components/Proctology';
import { HemorrhoiSymptom } from '@/app/components/HemorrhoiSymptom';
import { AnalFissure } from '@/app/components/AnalFissure';
import { CoccyxCyst } from '@/app/components/CoccyxCyst';
import { PararectalFistulas } from '@/app/components/PararectalFistulas';

const ProctologyPage: React.FC = () => {
  return (
    <div>
      <Proctology backgroundColor="#BCE4FFFF" />
      <HemorrhoiSymptom backgroundColor="#EAF6FFFF" />
      <AnalFissure backgroundColor="#BCE4FFFF" />
      <CoccyxCyst backgroundColor="#EAF6FFFF" />
      <PararectalFistulas backgroundColor="#BCE4FFFF" />
    </div>
  );
};

export default ProctologyPage;
