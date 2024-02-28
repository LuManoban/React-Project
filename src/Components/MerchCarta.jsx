import '../styles/index.css'
import '../styles/style.css'

const MerchCarta = () => {
    return(

        <main  className=" main">
        <section className="section">
        <h1 className="title">Merchandizing</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <div style={{ display: "flex", justifyContent: "space-evenly" }} className="flexbox flexbox--responsive g-layout g-layout--auto-fit-columns j-items-center g-md solid">
          <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
            <h2>Los Vasos del Apocalipsis</h2>
            <img style={{ width: "350px" }} src="https://www.greenglass.cl/cdn/shop/products/METALEROS-6-VASOS-GREEN-GLASS-15CM-500ML.jpg?v=1671454542" alt="" />
            <p style={{ margin: "20px" }}>Son 6 modelos diferentes. ¡Demuestra que el metal corre por tus venas y por tus vasos!</p>
          </div>

          <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
            <h2>Polo Hail TLDG</h2>
            <img style={{ width: "350px" }} src="/IMG/polo2.png" alt="" />
            <p style={{ margin: "20px" }}>Si disfrutas de pasar el tiempo con nosotros en nuestro Restobar, grítalo al mundo con nuestro polo insignia.</p>
          </div>

          <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
            <h2>Mandil Hail TLDG</h2>
            <img style={{ width: "350px" }} src="/IMG/mandil2.png" alt="" />
            <p style={{ margin: "20px" }}>Llévanos contigo en tu cocina, mientras preparas la siguiente comida, sacudiendo la cabeza al ritmo del heavy metal.</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </section>
    </main>
    

    
    );
};
export default MerchCarta;