import './App.css';
import MainLayout from './pages/layouts/main-layout';

import Pages from './routes/routes';

function App() {
  return (
    <>
      <MainLayout>
        <Pages />
      </MainLayout>
    </>
  );
}

export default App;
