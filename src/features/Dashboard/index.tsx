import MainDash from './Lecturer/Main';
import MateriSaya from './Materi/MateriSaya';
import MateriSemua from './Materi/MateriSemua';

const DashboardPage = () => {
  return (
    <div>
      <MainDash />
      <MateriSaya />
      <MateriSemua />
    </div>
  );
};

export default DashboardPage;
