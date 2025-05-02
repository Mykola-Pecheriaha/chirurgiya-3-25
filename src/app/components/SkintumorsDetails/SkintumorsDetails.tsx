'use client';
import { useState } from 'react';
import styles from './SkintumorsDetails.module.css';
import { SkintumorsGallery } from './SkintumorsGallery';
import { SimpleButton } from '../../components/ui/simple-button';

interface SkintumorsDetailsProps {
  backgroundColor?: string;
}

export function SkintumorsDetails({
  backgroundColor = '#f8f9fa',
}: SkintumorsDetailsProps) {
  // Стани для розгортання/згортання кожного розділу
  const [expandedSections, setExpandedSections] = useState({
    nevus: false,
    papilloma: false,
    atheroma: false,
    hemangioma: false,
    lipoma1: false,
    lipoma2: false,
    symptoms: false,
    prevention: false,
    dermatoscopy: false,
  });

  // Функція для перемикання стану розділу
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className={styles.skintumorsSection} style={{ backgroundColor }}>
      <div className={styles.container}>
        {/* Перша частина - розділи про типи пухлин */}
        <div className={styles.sectionsContainer}>
          {/* НЕВУС */}
          <div className={styles.sectionItem}>
            <div className={styles.twoColumnSection}>
              <div className={styles.textColumn}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleHighlight}>НЕВУС</span> — ...
                  <SimpleButton
                    onClick={() => toggleSection('nevus')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.nevus ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.nevus && (
                  <div className={styles.expandedContent}>
                    <p className={styles.expandedText}>
                      новоутворення доброякісного характеру, що виникає на шкірі
                      у вигляді пігментації. Рекомендовано видаляти їх, якщо
                      вони локалізовані у незручних місцях на тілі, або у разі
                      загрози переродження у злоякісне новоутворення. Родимки та
                      невуси можуть бути у людини з самого народження або
                      виникнути пізніше в дитячому чи дорослому віці. Особливо
                      схильні до цього власники надмірно білої шкіри, яка погано
                      засмагає і схильна до виникнення сонячних опіків. Саме
                      тоді з’являються множинні та атипові родимки (родимки
                      неправильної форми, неоднорідні за кольором, що
                      супроводжуються сверблячкою, печінням). Сімейний анамнез
                      частіше за все фіксує, що в родині є випадки розвитку
                      передракових захворювань шкіри, меланоми.
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                {expandedSections.nevus && (
                  <div className={styles.imageWrapper}>
                    <img
                      src="/images/skintumors/dpkUlcer.jpg"
                      alt="Невус"
                      className={styles.sectionImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ПАПІЛОМА */}
          <div className={styles.sectionItem}>
            <div className={styles.twoColumnSection}>
              <div className={styles.textColumn}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleHighlight}>ПАПІЛОМА</span> — ...
                  <SimpleButton
                    onClick={() => toggleSection('papilloma')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.papilloma ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.papilloma && (
                  <div className={styles.expandedContent}>
                    <p className={styles.expandedText}>
                      Доброякісне пухлиноподібне новоутворення на шкірі або на
                      слизовій оболонці. Основна причина виникнення цих пухлин –
                      вірус папіломи. Ці новоутворення відрізняються зовнішньою
                      різноманітністю за формою і розміром, наростами.
                      Забарвлення може бути світло-, сіро- чи темно-коричневим.
                      Хоча бородавки та папіломи дуже схожі, головна їхня
                      відмінність, полягає в тому, що бородавки частіше
                      знаходяться на обличчі, пальцях рук, ліктях і підошвах.
                      Папіломи частіше розміщуються на шиї, спині, грудях,
                      пахвах, а також на статевих органах.
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                {expandedSections.papilloma && (
                  <div className={styles.imageWrapper}>
                    <img
                      src="/images/skintumors/papiloma.jpg"
                      alt="Папілома"
                      className={styles.sectionImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* АТЕРОМА */}
          <div className={styles.sectionItem}>
            <div className={styles.twoColumnSection}>
              <div className={styles.textColumn}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleHighlight}>АТЕРОМА</span> — ...
                  <SimpleButton
                    onClick={() => toggleSection('atheroma')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.atheroma ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.atheroma && (
                  <div className={styles.expandedContent}>
                    <p className={styles.expandedText}>
                      Eпітеліальна кіста – це доброякісне новоутворення сальної
                      залози, яке виникає в результаті її закупорки. Атероми та
                      ліпоми (жировики) виникають на ділянках шкіри з великою
                      кількістю сальних залоз в результаті їхньої закупорки.
                      Вони мають вигляд великого прища, не болять, м’які на
                      дотик і, крім неестетичного вигляду, можуть нічим не
                      турбувати пацієнта. Видаляють їх лише хірургічно, разом з
                      капсулою – інакше можливі рецидиви.
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                {expandedSections.atheroma && (
                  <div className={styles.imageWrapper}>
                    <img
                      src="/images/skintumors/teroma.jpg"
                      alt="Атерома"
                      className={styles.sectionImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ГЕМАНГІОМА */}
          <div className={styles.sectionItem}>
            <div className={styles.twoColumnSection}>
              <div className={styles.textColumn}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleHighlight}>ГЕМАНГІОМА</span> —
                  ...
                  <SimpleButton
                    onClick={() => toggleSection('hemangioma')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.hemangioma ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.hemangioma && (
                  <div className={styles.expandedContent}>
                    <p className={styles.expandedText}>
                      Це пухлинне судинне утворення належить до доброякісних.
                      Являє собою пляму яскраво-червоного кольору, яка трохи
                      виступає над поверхнею шкіри. При натисканні воно блідніє,
                      але дуже швидко відновлює колір, форму та об’єм. Розвиток
                      гемангіоми може викликати локальними кровотечі, що і
                      сприяє її розростанню.
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                {expandedSections.hemangioma && (
                  <div className={styles.imageWrapper}>
                    <img
                      src="/images/skintumors/gemangioma.jpg"
                      alt="Гемангіома"
                      className={styles.sectionImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ЛІПОМА 1 */}
          <div className={styles.sectionItem}>
            <div className={styles.twoColumnSection}>
              <div className={styles.textColumn}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleHighlight}>ЛІПОМА</span> — ...
                  <SimpleButton
                    onClick={() => toggleSection('lipoma1')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.lipoma1 ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.lipoma1 && (
                  <div className={styles.expandedContent}>
                    <p className={styles.expandedText}>
                      Доброякісна жирова пухлина. Це новоутворення, яке
                      формується з жирового прошарку, тому його друга назва –
                      «жировик». Це часточка жирової тканини, яка легко
                      рухається при дотику і зазвичай не викликає болю. Ліпоми
                      можуть з'являтися де завгодно на тілі, але найчастіше вони
                      з'являються на спині, тулубі (тулубі), руках, плечах і
                      шиї.
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                {expandedSections.lipoma1 && (
                  <div className={styles.imageWrapper}>
                    <img
                      src="/images/skintumors/lipoma.jpg"
                      alt="Ліпома"
                      className={styles.sectionImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ЛІПОМА 2 */}
          <div className={styles.sectionItem}>
            <div className={styles.twoColumnSection}>
              <div className={styles.textColumn}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.titleHighlight}>ФІБРОМА</span> — ...
                  <SimpleButton
                    onClick={() => toggleSection('lipoma2')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.lipoma2 ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.lipoma2 && (
                  <div className={styles.expandedContent}>
                    <ul className={styles.bulletList}>
                      <li>
                        доброякісна пухлина з волокнистої сполучної тканини.
                        Часто поєднується з розростанням інших тканин – зокрема
                        м'язової (фіброміома), судинної (ангіофіброма),
                        залізистої (фіброаденома). Дуже часто її діагностують у
                        молодому віці, переважно у жіночої статі. Вона може бути
                        різного кольору : від сірого до чорного. Поверхня
                        зазвичай гладка, зростає повільно.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.imageColumn}>
                {expandedSections.lipoma2 && (
                  <div className={styles.imageWrapper}>
                    <img
                      src="/images/skintumors/fibroma.jpg"
                      alt="Фіброма"
                      className={styles.sectionImage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Друга частина - додаткова інформація */}
        <div className={styles.additionalInfoSection}>
          <div className={styles.twoColumnSection}>
            <div className={styles.textColumn}>
              {/* Симптоми */}
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>
                  <span className={styles.warningIcon}>⚠️</span> Симптоми, які
                  вимагають негайного звернення до лікаря:
                  <SimpleButton
                    onClick={() => toggleSection('symptoms')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.symptoms ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.symptoms && (
                  <div className={styles.expandedContent}>
                    <ul className={styles.bulletList}>
                      <li>швидке збільшення новоутворення;</li>
                      <li>випадіння волосся з його поверхні;</li>
                      <li>
                        зміна кольору, кровоточивість, зміна консистенції;
                      </li>
                      <li>зменшення, зміна форми або розмитий контур;</li>
                      <li>поява запалення, свербежу, тріщин.</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Профілактика */}
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>
                  <span className={styles.checkIcon}>✅</span> Профілактичні
                  рекомендації:
                  <SimpleButton
                    onClick={() => toggleSection('prevention')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.prevention ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.prevention && (
                  <div className={styles.expandedContent}>
                    <ul className={styles.bulletList}>
                      <li>Уникайте тривалого перебування на сонці.</li>
                      <li>Своєчасно звертайтеся до лікаря.</li>
                      <li>
                        Регулярно проходьте діагностику за допомогою
                        дерматоскопа.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Дерматоскопія */}
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>
                  <span className={styles.labIcon}>🧪</span> Цифрова
                  дерматоскопія
                  <SimpleButton
                    onClick={() => toggleSection('dermatoscopy')}
                    variant="outline"
                    className={styles.expandButton}
                  >
                    {expandedSections.dermatoscopy ? 'згорнути' : 'розгорнути'}
                  </SimpleButton>
                </h3>
                {expandedSections.dermatoscopy && (
                  <div className={styles.expandedContent}>
                    <p className={styles.expandedText}>
                      Метод, що дає можливість детально розглянути новоутворення
                      під великим збільшенням.
                    </p>
                    <p className={styles.expandedText}>Дає змогу оцінити:</p>
                    <ul className={styles.bulletList}>
                      <li>пігментацію;</li>
                      <li>будову епідермісу;</li>
                      <li>межу між дермою та епідермісом;</li>
                      <li>сосочковий шар.</li>
                    </ul>
                    <p className={styles.expandedText}>
                      <span className={styles.blueIcon}>🔹</span> Зображення
                      виводиться на екран комп'ютера для точнішої діагностики.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Галерея */}
            <div className={styles.galleryColumn}>
              <h3 className={styles.galleryTitle}>Галерея пухлин шкіри</h3>
              <SkintumorsGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkintumorsDetails;
