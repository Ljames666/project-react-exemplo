import DefaultLayout from './config/layout/default-layout/DefautLayout';
import RoutesApp from './routes';

function App(): JSX.Element {
  const Layout=DefaultLayout
  return (
    <>
    <Layout>
       <RoutesApp />
    </Layout>
     
    </>
  );
}

export default App;
