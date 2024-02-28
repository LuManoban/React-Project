import { Link } from 'react-router-dom';
import '../styles/index.css'
import '../styles/style.css'

const Productos = () =>{
  return (
    <main className="main">
      <section className="section">
        <h1 className="title">Nuestra Carta</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 style={{ textAlign: "center", color: "black" }} className="card__subtitle">¡Elige tu destino!</h2>
        <br/>
        <br/>
        <div style={{ textAlign: "center" }}>
          <Link to="/solidos">
            <img style={{ width: "250px" }} src="/IMG/solidos_penta-removebg-preview.png" alt=""/>
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/liquidos">  
            <img style={{ width: "250px" }} src="/IMG/liquidos_penta-removebg-preview.png" alt=""/>
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
        <Link to="/merch">  
            <img style={{ width: "250px" }} src="/IMG/merch_penta-removebg-preview.png" alt=""/>
          </Link>
        </div>
        <br/>
      </section>
    </main>
  );
};

export default Productos;