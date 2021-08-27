import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const company = {
    name: '⛈Clima de tu ciudad⛈',
    slogan: 'Ten a la naturaleza de tu lado.',
    comercialActivity: 'Pronóstico del clima'
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
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
