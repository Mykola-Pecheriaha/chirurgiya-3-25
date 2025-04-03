import BigBord from './components/BigBord/BagBord';
import ExpertiseBanner from './components/ExpertiseBanner/ExpertiseBanner';
import ModernEquipment from './components/ModernEquipment/ModernEquipment';
import ComfortableRooms from './components/ComfortableRooms/ComfortableRooms';
import FullMedicationSupply from './components/FullMedicationSupply/FullMedicationSupply';
import AnesthesiaCare from './components/AnesthesiaCare/AnesthesiaCare';
import SurgeryDepartmentInfo from './components/SurgeryDepartmentInfo/SurgeryDepartmentInfo';

const Home: React.FC = () => {
  return (
    <div>
      <BigBord />
      <ExpertiseBanner
        backgroundColor="#e6f7ff"
        imageUrl="/images/profession/proff2.bmp"
        imageAlt="Команда хірургів"
      />
      <ModernEquipment
        backgroundColor="#f0f7ff"
        imageUrl="/images/modernEquipment/equipment.bmp"
        imageAlt="Сучасне медичне обладнання"
      />
      <ComfortableRooms
        backgroundColor="#f9f9f9"
        imageUrl="/images/comfortableRooms/terapі3.jpg"
        imageAlt="Комфортні палати"
      />
      <FullMedicationSupply
        backgroundColor="#f0f7ff"
        imageUrl="/images/fullMedicationSupply/medicament1.bmp"
        imageAlt="Медикаментозне забезпечення"
      />
      <AnesthesiaCare
        backgroundColor="#f9f9f9"
        imageUrl="/images/modernEquipment/medicfmtnt2.bmp"
        imageAlt="Наркозне забезпечення"
      />
      <SurgeryDepartmentInfo
        backgroundColor="#f0f7ff"
        textColor="#333333"
        headingColor="#1eaaf1"
        accentColor="#7b68ee"
      />
    </div>
  );
};
export default Home;
