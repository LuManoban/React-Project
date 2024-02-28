import '../styles/index.css'
import '../styles/style.css'
const Contactanos = () => {
    return ( 
        <main className="main">
            <article className="hero d-flex" id="hero">

                <div className="ms-5">
                    <form className="ms-5" action="#" method="post">
                        <h1 className="label contact">Contáctanos</h1>
                        <h3 className="label contact">Si nos quieres contactar, llena los datos de abajo.</h3>
      
                        <div className="ms-5">
                        <label className="label" htmlFor="nombre">Nombre:</label>          
                        <input className="placeholder" type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" required/>
                        </div>

                        <br/>
      
                        <div className="ms-5">
                        <label className="label" htmlFor="apellido">Apellido:</label>
                        <input className="placeholder" type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido" required/>
                        </div>

                        <br/>
      
                        <div className="ms-5">
                        <label className="label" htmlFor="email">Correo:</label>
                        <input className="placeholder" type="email" name="email" id="email" placeholder="Ingresa tu correo" required/>
                        </div>
      
                        <br/>
      
                        <div className="ms-5">
                        <label className="label" htmlFor="telefono">Teléfono(Opcional):</label>
                        <input className="placeholder" type="text" name="telefono" id="telefono" placeholder="Ingresa tu teléfono"/>
                        </div>
      
                        <br/>

                        <div className="ms-5">
                        <label className="label" htmlFor="comentario">Comentarios(Opcional):</label>
                        <br/>
                        <textarea className="comentario" id="comentario" cols="50" rows="10"></textarea>
                        </div>

                        <br/>

                        <div className="label">
                        <input className="label" type="submit" value="ENVIAR DATOS"/>
                        </div>
                    </form>
                </div>

            </article>
        </main>
    );
}
 
export default Contactanos;