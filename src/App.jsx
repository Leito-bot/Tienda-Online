import Layout from './components/layout/Layout'
import PersonCard from './components/common/PersonCard'

function App() {
  return (
    <Layout>
      <PersonCard nombre="Leonel Rosso" rol="Dueño / Gerente"/>
      <PersonCard nombre="Priscila Hernandez" rol="Arquitecta"/>
      <PersonCard nombre="Nahuel Florentin" rol="Tecnico en sistemas"/>
      
    </Layout>
  );
}

export default App;
