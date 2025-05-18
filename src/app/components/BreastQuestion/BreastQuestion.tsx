'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './BreastQuestion.module.css';
import Link from 'next/link';

interface BreastQuestionProps {
  backgroundColor?: string;
}

interface Question {
  title: string;
  content: string | React.ReactNode;
  image: string;
}

const questions: Question[] = [
  {
    title: 'Збільшення грудей: підготовка до операції',
    content: `За два тижні до хірургічного втручання рекомендовано відмовитись від куріння та прийому лікарських препаратів. Обов'язково повідомте спеціаліста, якщо ви регулярно приймаєте будь-які ліки!

    Варто враховувати, що вагітність і годування можуть вплинути на форму залози, після чого є ймовірність необхідності додаткової корекції. Тому втручання ефективніше через півроку після закінчення грудного годування.
    
    Результати обстеження та проведені аналізи мають показати, що пацієнтка здорова та готова до операції.`,
    image: '/images/breast-question/preparation1.jpg',
  },
  {
    title: 'Скільки триває операція зі збільшення грудей',
    content: `Збільшення молочних залоз триває від 1,5 до 2 годин. Час залежить від обсягу хірургічного втручання та індивідуальних особливостей пацієнтки. Задача хірурга є в тому, щоб створити простір під молочною залозою в запланованих шарах тканей (підмолочною залозою, під фасцією або під мязом) для установки імплантів. Ретельне розшарування тканей з надійним гемостазом в різних пацієнтів буде потрибувати різної кількості часу. Для хірурга важливий результат, а не час операції. Хоча час операції також дуже важливий. Дуже важливим чинником є досвід хірурга в проведенні цих операцій. Операція проводиться під загальною анестезією. В наші клініці ми практикуємо проводити операції на грудних залозах під епідуральною анестезією.`,
    image: '/images/breast-question/breastQuestion1.jpg',
  },
  {
    title: 'Показами до проведення операції зі збільшення грудей',
    content: (
      <>
        <p>
          Показання можна умовно поділити на 2 види: медичні та психологічні:
        </p>
        <h4>До медичних належать:</h4>
        <ul className={styles.contraindicationsList}>
          <li>
            вроджена патологія, недостатньо розвинений за обсягом (аплазія
            молочних залоз);
          </li>
          <li>виражена асиметрія залози, синдром Полланда тощо;</li>
          <li>
            постлактаційна інволюція молочних залоз (постлактаційний птоз);
          </li>
          <li>різке схуднення, що позначилося на формі грудей.</li>
        </ul>
        <p>
          До психологічних показань належить незадоволеність формою та розміром
          грудей.
        </p>
      </>
    ),
    image: '/images/breast-question/breast-gipoplasiya1.jpg',
  },
  {
    title: 'Протипоказання',
    content: (
      <>
        <p>Операція збільшення грудей протипоказана у таких випадках:</p>
        <ul className={styles.contraindicationsList}>
          <li>вік до 18 років;</li>
          <li>при загостренні хронічних захворювань (у тому числі й ГРВІ);</li>
          <li>при патологічних порушеннях згортання крові;</li>
          <li>
            при підозрі на рак, навіть у вигляді спадкової історії (у цьому
            випадку необхідна консультація мамолога);
          </li>
          <li>
            при психічних захворюваннях, серцево-судинній недостатності та
            цукровому діабеті в некомпенсованій формі.
          </li>
        </ul>
      </>
    ),
    image: '/images/breast-question/blefaroContraindicatio1.jpg',
  },
  {
    title: 'Реабілітація після збільшення грудей',
    content: (
      <>
        <p>
          Після операції пацієнтка перебуває у клініці 1 добу під наглядом
          пластичного хірурга та медичного персоналу. Наступного дня вона їде
          додому із рекомендаціями.
        </p>

        <p>
          Реабілітація після пластики триває 2-3 тижні. Відразу пацієнтка може
          мати відчуття, які можна порівняти з крепатурою від занять спортом.
          Також є деякі обмеження рухливості рук. Все це легко усувається
          знеболюючими.
        </p>

        <p>
          Період реабілітації потребує обовязкового носіння компресійної білизни
          для зменшення ризику ускладнень та стабілізації результату операції зі
          збільшення грудей. Білизну треба носити 4-6 тижнів.
        </p>

        <p>
          На рахунок швів, то тут підхід індівідуальний. Чаще їх не треба
          знімати. Але Часом для хорошої адаптації країв рани Ми самий верхній
          шов накладаємо тонкою ниткою (як волосок), то її треба буде зняти на
          7- 8 день після операції. Також працюємо зі спеціальним медичним клеєм
          для шкіри, який прискорює загоєння рубців. Ми отримуємо високі
          естетичні результати – через 1 місяць рубець виглядає, як через 6-8
          місяців.
        </p>

        <p>
          Після операції до звичайного ритму життя можна повернутись через 7-10
          днів. Через 2 місяці можна повертатися до активних фізичних
          навантажень (спортзал, басейн).
        </p>

        <p>
          За дотримання рекомендацій пластичного хірурга післяопераційний період
          проходить досить легко, а результат зберігається на багато років.
        </p>
      </>
    ),
    image: '/images/breast-question/implant16.jpg',
  },
];

const BreastQuestion: React.FC<BreastQuestionProps> = ({
  backgroundColor = '#f0f7ff',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Поширені запитання</h2>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionContainer}>
            <div
              className={`${styles.questionTitle} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {question.title}
              {openIndex === index ? (
                <ChevronUp className={styles.icon} />
              ) : (
                <ChevronDown className={styles.icon} />
              )}
            </div>
            {openIndex === index && (
              <div className={styles.questionContent}>
                <div className={styles.textContent}>
                  {typeof question.content === 'string' ? (
                    <p className={styles.paragraph}>{question.content}</p>
                  ) : (
                    question.content
                  )}
                </div>
                <div className={styles.imageContent}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={question.image || '/placeholder.svg'}
                      alt={`Ілюстрація до ${question.title}`}
                      width={400}
                      height={300}
                      className={styles.image}
                      onError={(e) => {
                        e.currentTarget.src =
                          '/placeholder.svg?height=300&width=400&text=Зображення';
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Заклик до дії */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Маєте додаткові запитання? Наші спеціалісти готові надати вам
            детальну консультацію.
          </p>
          <Link href="/about-doctor/contacts">
            <button className={styles.contactButton}>
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreastQuestion;
