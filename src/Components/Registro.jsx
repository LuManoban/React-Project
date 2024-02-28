import '../styles/index.css'
import '../styles/style.css'

const Registro = () =>{
  return (
    <main className="main">
    <article className="hero d-flex" id="hero">
      <div className="ms-5">
        <form className="ms-5" action="#" method="post">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h1 style={{ fontSize: '50px', color: 'white' }} className="label contact">Registrate</h1>
          <h3 className="label contact">Registrate para tener beneficios exclusivos</h3>

          <br />

          <div style={{ display: 'flex', backgroundColor: 'black', width: '700px', height: '700px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
            <div style={{ display: 'flex', backgroundColor: 'white', width: '650px', height: '650px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
              <div style={{ display: 'flex', backgroundColor: 'black', width: '600px', height: '600px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                <div style={{ display: 'flex', backgroundColor: 'white', width: '550px', height: '550px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <div style={{ display: 'flex', flexFlow: 'column', backgroundColor: 'black', width: '500px', height: '500px', textAlign: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                    <div className="ms-5">
                      <label style={{ color: 'white' }} className="label" htmlFor="nombre">Nombre:</label>
                      <input style={{ backgroundColor: 'white', color: 'black', borderColor: 'red' }} className="placeholder" type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" required />
                    </div>

                    <br />

                    <div className="ms-5">
                      <label style={{ color: 'white' }} className="label" htmlFor="apellido">Apellido:</label>
                      <input style={{ backgroundColor: 'white', color: 'black', borderColor: 'red' }} className="placeholder" type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido" required />
                    </div>

                    <br />

                    <div className="ms-5">
                      <label style={{ color: 'white' }} className="label" htmlFor="username">Username:</label>
                      <input style={{ backgroundColor: 'white', color: 'black', borderColor: 'red' }} className="placeholder" type="text" name="username" id="username" placeholder="Ingresa tu username" required />
                    </div>

                    <br />

                    <div className="ms-5">
                      <label style={{ color: 'white' }} className="label" htmlFor="email">Correo:</label>
                      <input style={{ backgroundColor: 'white', color: 'black', borderColor: 'red' }} className="placeholder" type="email" name="email" id="email" placeholder="Ingresa tu correo" required />
                    </div>

                    <br />

                    <div className="ms-5">
                      <label style={{ color: 'white' }} className="label" htmlFor="role_id">Role_Id:</label>
                      <input style={{ backgroundColor: 'white', color: 'black', borderColor: 'red' }} className="placeholder" type="text" name="role_id" id="role_id" placeholder="Ingresa tu role_id" required />
                    </div>

                    <br />

                    <div className="ms-5">
                      <label style={{ color: 'white' }} className="label" htmlFor="password">Password:</label>
                      <input style={{ backgroundColor: 'white', color: 'black', borderColor: 'red' }} className="placeholder" type="password" name="password" id="password" placeholder="Ingresa tu password" required />
                    </div>

                    <br />

                    <div className="label">
                      <input style={{ backgroundColor: 'red', color: 'white', fontSize: '30px' }} className="label" type="submit" value="REGISTRAR" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </article>
  </main>
  );
};

export default Registro;