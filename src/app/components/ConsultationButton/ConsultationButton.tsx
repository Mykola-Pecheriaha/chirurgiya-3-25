'use client';

import React, { useState } from 'react';
import styles from './ConsultationButton.module.css';

const ConsultationButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Тут можна додати логіку для відправки даних на сервер
    console.log('Submitted:', { name, phone });
    closeModal();
  };

  return (
    <div className={styles.container}>
      <button onClick={openModal} className={styles.consultationButton}>
        Безкоштовна консультація
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Закрити"
            >
              &times;
            </button>
            <h2 className={styles.modalTitle}>
              Залишити заявку на безкоштовну консультацію пластичного хірурга
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Ваше імя</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Ваш телефон</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Чекаю дзвінка!
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationButton;
