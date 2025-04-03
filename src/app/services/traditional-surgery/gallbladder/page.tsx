import React from 'react';
import Gallbladder from '../../../components/Gallbladder';

const GallbladderPage: React.FC = () => {
  return (
    <div>
      <Gallbladder
        backgroundColor="#f0f7ff"
        textColor="#333333"
        headingColor="#1eaaf1"
        fontSize={{
          paragraph: '1rem',
          heading2: '2.5rem',
          heading3: '1.8rem',
          heading4: '1.5rem',
          listItem: '1rem',
        }}
        images={[
          {
            url: '/images/gallbladder/liver18.jpg',
            alt: 'Жовчевий міхур',
          },
          {
            url: '/images/gallbladder/liver17.jpg',
            alt: 'Печінкова коліка',
          },
          {
            url: '/images/gallbladder/liver23.jpg',
            alt: 'Печінкова коліка',
          },
          {
            url: '/images/gallbladder/uzdchol.jpg',
            alt: 'Хронічний холецистит',
          },
          {
            url: '/images/gallbladder/liver19.jpg',
            alt: 'Лапароскопічна холецистектомія',
          },
          {
            url: '/images/gallbladder/holetistectoml.jpg',
            alt: 'Ускладнення',
          },
          {
            url: '/images/gallbladder/liver22.jpg',
            alt: 'Холангіт',
          },
          {
            url: '/images/gallbladder/hfhslotomi.jpg',
            alt: 'Діагностика',
          },
          {
            url: '/images/gallbladder/liver20.jpg',
            alt: 'Лікування',
          },
          {
            url: '/images/gallbladder/liver12.jpg',
            alt: 'Реабілітація',
          },
        ]}
      />
    </div>
  );
};

export default GallbladderPage;
