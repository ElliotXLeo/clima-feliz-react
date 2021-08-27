import Header from "./components/Header";

function App() {

  const company = {
    name: '⛈Clima de tu ciudad⛈',
    slogan: 'Ten a la naturaleza de tu lado.',
    comercialActivity: 'Pronóstico del clima'
  }

  return (
    <Header
      company={company}
    />
  );
}

export default App;
