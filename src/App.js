import { Fragment, useEffect, useState } from "react";
import Clima from "./components/Clima";
import Error from "./components/Error";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {

  const company = {
    name: '⛈Clima de tu ciudad⛈',
    slogan: 'Ten a la naturaleza de tu lado.',
    comercialActivity: 'Pronóstico del clima'
  }

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {
        const appid = '27c81c216ce5a129190e824806f2c161';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

        const respusta = await fetch(url);
        const resultado = await respusta.json();

        setResultado(resultado);
        setConsultar(false);


        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarApi();
  }, [consultar]);

  let componente;

  if (error) {
    componente = <Error mensaje='Ciudad no encontrada' />;
  } else {
    componente = <Clima
      resultado={resultado}
    />
  }


  return (
    <Fragment>
      <Header
        company={company}
      />

      <section className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
