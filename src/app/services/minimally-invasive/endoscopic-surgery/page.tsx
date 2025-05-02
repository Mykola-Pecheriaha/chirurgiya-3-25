import React from 'react';
import { Endoscopy } from '@/app/components/Endoscopy';
import { FiberGastroscopy } from '@/app/components/FiberGastroscopy';
import { FiberColonoscopy } from '@/app/components/FiberColonoscopy';

import { EndoscopicClipping } from '@/app/components/EndoscopicClipping';
import { EndoscopicPapillosphincterotomy } from '@/app/components/EndoscopicPapillosphincterotomy';

const EndoscopicSurgeryPage: React.FC = () => {
  return (
    <div>
      <Endoscopy backgroundColor="#C8E9FFFF" />
      <FiberGastroscopy backgroundColor="#EAF7FFFF" />
      <EndoscopicClipping backgroundColor="#C8E9FFFF" />
      <EndoscopicPapillosphincterotomy backgroundColor="#EAF7FFFF" />
      <FiberColonoscopy backgroundColor="#C8E9FFFF" />;
    </div>
  );
};

export default EndoscopicSurgeryPage;
