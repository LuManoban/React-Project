import '../styles/index.css'
import '../styles/style.css'

const SolidosCarta = () =>{
    return(
        <main className="main">
                <br/>
                <br/>
                <br/>
            <section className="section">
                <br/>
                <br/>
                <h1 className="title">Los Solidos</h1>
                <br/>
                <br/>
                <br/>
                <div style={{ display: "flex", justifyContent: "space-evenly" }} className="flexbox flexbox--responsive g-layout g-layout--auto-fit-columns j-items-center g-md solid">
        
                    <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>       
                        <h2>Metallica Buffalo Wild Wings</h2>
                        <img style={{width: "350px"}} src="https://www.pennlive.com/resizer/PIG5HyGJcQN1fJ2Z7EnaYWYeEB0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/WZ7K32IGGZF2TMBYTJBVDY5IEU.jpg" alt=""/>
                        <p style={{margin: "20px"}}>Deliciosas chicken wings recubiertas en una diabolicamente picante salsa buffalo. Pruebalas si te atreves!</p>
                    </div>

                    <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
                        <h2>Salchipapa Slipknot</h2>
                        <img style={{width: "350px"}} src="https://img.freepik.com/foto-gratis/ternera-parrilla-papas-fritas-plato-rustico-generado-ia_188544-43099.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708473600&semt=sph" alt=""/>
                        <p style={{margin: "20px"}}>Papas fritas crocantes con salchicha frankfurter bajo una capa de salsa de chile. Tu proxima adiccion!</p>
                    </div>

                    <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
                        <h2>Hamburguesa a la Osbourne</h2>
                        <img style={{ width: "350px" }} src="https://recipes.net/wp-content/uploads/2024/01/how-to-smoke-burgers-in-an-electric-smoker-1704859195.jpg" alt="" />
                        <p style={{ margin: "20px" }}>Carne Angus humeada con cebolla caramelizada, queso cheddar y lechuga, atrapadas en un pan, crujiente por fuera, suave por dentro.</p>
                    </div>  

                </div>
                <br/>
                <br/>
                <br/>
                <div style={{ display: "flex", justifyContent: "space-evenly" }} className="flexbox flexbox--responsive g-layout g-layout--auto-fit-columns j-items-center g-md solid">

                    <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
                        <h2>Tequeños of Bodom</h2>
                        <img style={{ width: "350px" }} src="https://elpopular.cronosmedia.glr.pe/original/2022/07/19/62d76c773db53c0def130832.jpg" alt="" />
                        <p style={{ margin: "20px" }}>Imaginate el mejor lomo saltado. Ahora imaginalo en crocantes Tequeños. Uffffff... nada mas sexy!</p>
                    </div>

                    <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
                        <h2>Saratoga-Pizza</h2>
                        <img style={{ width: "350px" }} src="https://img.freepik.com/fotos-premium/pizza-cacerola-pizza-fuego-fondo_925062-23.jpg" alt="" />
                        <p style={{ margin: "20px" }}>Salsa de tomate, trocitos de tocino, peperoni, cebolla y carne mechada. Todo bañado en queso mozzarella, reposando sobre una delgada masa.</p>
                    </div>

                    <div style={{ width: "400px", height: "450px", borderRadius: "10px", border: "2px solid red", backgroundColor: "rgb(76, 76, 76)", textAlign: "center" }}>
                        <h2>Strips de carne :La Slayer </h2>
                        <img style={{ width: "350px", height: "230px" }} src="https://lh3.googleusercontent.com/proxy/jmZ1qFZ9gcSzixuzTJ2t59MrebgXRd4sMCMitLg8WA-1dnuaTRi-poSh5KsXymgX0539BAtqiL1im193eGIl645rvavMWxR9W97VpPqF8l-JOjNFBSWvFy8lOQnqmwg" alt="" />
                        <p style={{ margin: "20px" }}>Jugosas strips de carne con pimientos al wok, listos para que las pongas sobre rodajas de pan fresco hecho en casa.</p>
                    </div>

                </div>
            </section>


        </main>

    );
};
export default SolidosCarta;