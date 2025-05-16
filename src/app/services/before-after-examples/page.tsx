import BeforeAfterSlider from '@/app/components/BeforeAfterSlider';

export default function BeforeAfterExamplesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Результати лікування
      </h1>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Лікування варикозу</h2>
        <p className="mb-6">
          Малоінвазивні методи лікування варикозу дозволяють досягти відмінних
          результатів без великих розрізів та тривалого періоду відновлення.
          Перетягніть повзунок, щоб побачити результати до і після процедури.
        </p>

        <BeforeAfterSlider
          beforeImage="/data/results/varicose-before.jpg"
          afterImage="/data/results/varicose-after.jpg"
          beforeAlt="Варикоз до лікування"
          afterAlt="Результат після лікування варикозу"
        />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Лапароскопічна холецистектомія
          </h2>
          <p className="mb-6">
            Порівняння традиційного методу видалення жовчного міхура та
            лапароскопічного підходу. Зверніть увагу на різницю в розмірі рубців
            та загальному естетичному результаті.
          </p>

          <BeforeAfterSlider
            beforeImage="/data/results/gallbladder-traditional.jpg"
            afterImage="/data/results/gallbladder-laparoscopic.jpg"
            beforeAlt="Традиційна холецистектомія"
            afterAlt="Лапароскопічна холецистектомія"
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
