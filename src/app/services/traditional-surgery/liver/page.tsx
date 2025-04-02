import React from 'react';
import HepaticIssues from '../../../components/HepaticIssues/HepaticIssues';

const HepaticIssuesPage: React.FC = () => {
  return (
    <div>
      <HepaticIssues
        backgroundColor="#f0f7ff"
        textColor="#333333"
        headingColor="#1eaaf1"
        fontSize={{
          paragraph: '1.3rem',
          heading2: '2.5rem',
          heading4: '1.5rem',
          listItem: '1.3rem',
        }}
        imageUrl="/images/liver/liver1.jpg"
        imageAlt="Хвороби печінки"
        secondImageUrl="/images/liver/liver2.jpg"
        secondImageAlt="Симптоми захворювань печінки"
        thirdImageUrl="/images/liver/liver3.jpg"
        thirdImageAlt="Лікування захворювань печінки"
        fourthImageUrl="/images/liver/liver4.jpg"
        fourthImageAlt="Діагностика захворювань печінки"
        fifthImageUrl="/images/liver/liver7.jpg"
        fifthImageAlt="Профілактика захворювань печінки"
      />
    </div>
  );
};

export default HepaticIssuesPage;
