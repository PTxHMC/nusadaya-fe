import MulaiBelajar from './MulaiBelajar';
import MateriSaya from './Materi/MateriSaya';
import MateriSemua from './Materi/MateriSemua';

const BelajarPage = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/bg-belajar.png')] bg-cover bg-center bg-no-repeat">
      <MulaiBelajar />
      <MateriSaya />
      <MateriSemua />
    </div>
  );
};

export default BelajarPage;
